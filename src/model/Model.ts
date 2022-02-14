import Messages from '../utils/messages';
import {
  convertFromInputToNumber,
  convertFromInputToBoolean,
  numDigitsAfterDecimal,
} from '../utils/Utils';
import EventObservable from '../observers/EventObservable';
import ISettings from './ISettings';
import defaultSettings from './defaultSettings';

class Model extends EventObservable {
  private settings: ISettings;

  constructor(settings: ISettings) {
    super();
    this.settings = defaultSettings;
    this.setSettings(settings);
  }

  getSettings(): ISettings {
    return { ...this.settings };
  }

  updateSettings(settings: ISettings): void {
    this.validateSettings(settings);
    this.notifyObservers(Messages.UPDATE, this.getSettings());
  }

  setFrom(valueInPercent: number): void {
    const from = this.convertFromPercentToValue(valueInPercent);
    if (from > this.settings.max) {
      this.settings.from = this.settings.max;
    } else if (from < this.settings.min) {
      this.settings.from = this.settings.min;
    } else this.settings.from = from;
    this.notifyObservers(Messages.FROM_IS_SET, this.getSettings());
  }

  setTo(valueInPercent: number): void {
    const to = this.convertFromPercentToValue(valueInPercent);
    if (to >= this.settings.max) {
      this.settings.to = this.settings.max;
    } else if (to <= this.settings.from) {
      this.settings.to = this.settings.from;
    } else this.settings.to = to;
    this.notifyObservers(Messages.TO_IS_SET, this.getSettings());
  }

  private setSettings(settings: ISettings): void {
    if (settings !== undefined) {
      const isMaxMoreThanMin = settings.max > settings.min;
      const isToMoreThanFrom = settings.isRange ? (settings.to > settings.from) : true;
      const isFromInDiapason = (settings.from > settings.min) && (settings.from < settings.max);
      const isToInDiapason = settings.isRange ? (settings.to < settings.max) : true;
      const isStepValid = (Math.abs(settings.max - settings.min) > settings.step)
        && settings.step > 0;
      const isSettingsValid = isMaxMoreThanMin && isToMoreThanFrom
        && isFromInDiapason && isToInDiapason && isStepValid;
      if (isSettingsValid) {
        this.settings = { ...settings };
      } else {
        throw new Error('settings is not valid');
      }
    }
  }

  private validateSettings(settings: ISettings): void {
    const newMin = convertFromInputToNumber(settings.min);
    const newMax = convertFromInputToNumber(settings.max);
    const newFrom = convertFromInputToNumber(settings.from);
    const newTo = convertFromInputToNumber(settings.to);
    const newStep = convertFromInputToNumber(settings.step);
    const newIsVertical = convertFromInputToBoolean(settings.isVertical);
    const newHideThumbLabel = convertFromInputToBoolean(settings.hideThumbLabel);
    const newRange = convertFromInputToBoolean(settings.isRange);

    this.validateMin(newMin, newMax);
    this.validateMax(newMax);
    this.validateFrom(newFrom);
    this.validateTo(newTo);
    this.validateStep(newStep);
    this.settings.isVertical = newIsVertical;
    this.settings.hideThumbLabel = newHideThumbLabel;
    this.validateRange(newRange);
  }

  private validateMin(newMin:number|undefined, newMax:number|undefined) {
    const newMinAndMaxIsValid = newMin !== undefined && newMax !== undefined;
    if (newMinAndMaxIsValid) {
      if (Math.abs(newMax - newMin) < this.settings.step) {
        throw new Error('difference between min and max more than step');
      }
    }
    if (newMin !== undefined) {
      if (newMin > this.settings.from) {
        throw new Error('min value more than from value');
      } else {
        this.settings.min = newMin;
      }
    }
  }

  private validateMax(newMax:number|undefined) {
    if (newMax !== undefined) {
      const newMaxLessThanTo = this.settings.isRange && newMax < this.settings.to;
      const newMaxLessThanFrom = !this.settings.isRange && newMax < this.settings.from;
      if (newMaxLessThanTo) {
        throw new Error('min value more than to value');
      } else if (newMaxLessThanFrom) {
        throw new Error('min value more than from value');
      } else {
        this.settings.max = newMax;
      }
    }
  }

  private validateFrom(newFrom:number|undefined) {
    const newFromIsValidWithoutRangeSettings = newFrom !== undefined && !this.settings.isRange;
    const newFromIsValidWithRangeSettings = newFrom !== undefined && this.settings.isRange;
    if (newFromIsValidWithoutRangeSettings) {
      if (newFrom > this.settings.max) {
        throw new Error('from more than max');
      } else if (newFrom < this.settings.min) {
        throw new Error('from less than min');
      } else this.settings.from = newFrom;
    }
    if (newFromIsValidWithRangeSettings) {
      if (newFrom > this.settings.to) {
        throw new Error('from more than to');
      } else if (newFrom < this.settings.min) {
        throw new Error('from less than min');
      } else this.settings.from = newFrom;
    }
  }

  private validateTo(newTo:number|undefined) {
    const newToIsValid = newTo !== undefined && this.settings.isRange;
    if (newToIsValid) {
      if (newTo < this.settings.from) {
        throw new Error('to less than from');
      } else if (newTo > this.settings.max) {
        throw new Error('to more than max');
      } else this.settings.to = newTo;
    }
  }

  private validateStep(newStep:number|undefined) {
    const {
      min, max, step,
    } = this.settings;
    if (newStep !== undefined) {
      if (newStep < 0) {
        throw new Error('step must be positive');
      } else if (newStep === 0) {
        throw new Error('step must not be zero');
      } else if (newStep > (Math.abs(max - min))) {
        throw new Error('step must be more than difference between max and min');
      } else if (step !== newStep) {
        this.settings.step = newStep;
        this.settings.from = min;
        if ((this.settings.from + this.settings.step) >= max) {
          this.settings.to = max;
        } else {
          this.settings.to = this.settings.from + this.settings.step;
        }
      }
    }
  }

  private validateRange(newRange:boolean|undefined) {
    const {
      min, max, step, isRange, to, from,
    } = this.settings;
    if (newRange !== undefined) {
      if (!isRange) {
        this.settings.to = ((from + step) > max) ? max
          : (+Math.round(from + step).toFixed(numDigitsAfterDecimal(step)));
      }
      this.settings.isRange = newRange;
      if (from >= to) {
        this.settings.from = min;
      }
    }
  }

  private convertFromPercentToValue(valueInPercent: number) {
    const { min, max, step } = this.settings;
    if (valueInPercent <= 0) {
      return min;
    }
    if (valueInPercent >= 100) {
      return max;
    }
    let delimeter = 1;
    if (step !== 0) {
      delimeter = 1.0 / step;
    }
    const diapason = Math.abs(max - min);
    const res = Math.round(+(((diapason * valueInPercent) / 100))
      .toFixed(numDigitsAfterDecimal(step)) * delimeter)
      / delimeter + min;
    if (res < min) return min;
    if (res > max) return max;
    return res;
  }
}

export default Model;
