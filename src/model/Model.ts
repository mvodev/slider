import Messages from '../utils/messages';
import IModelFacade from './IModelFacade';
import ISettings from './ISettings';
import EventObservable from '../observers/EventObservable';
import Utils from '../utils/Utils';
import defaultSettings from './defaultSettings';

class Model extends EventObservable implements IModelFacade {
  private settings: ISettings;

  constructor(settings: ISettings) {
    super();
    this.settings = { ...defaultSettings };
    this.setSettings(settings);
  }

  private setSettings(settings: ISettings): void {
    this.settings = { ...settings };
  }

  getSettings(): string {
    return JSON.stringify(this.settings);
  }

  updateSettings(settings: ISettings): void {
    this.validateSettings(settings);
    this.notifyObservers(Messages.UPDATE, this.getSettings(), 0);
  }

  getMin(): number {
    return this.settings.min;
  }

  getMax() :number {
    return this.settings.max;
  }

  setFrom(valueInPercent: number, thumbWidthInPercent: number): void {
    const from = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);
    if (from > this.settings.max) {
      this.settings.from = this.settings.max;
    } else if (from < this.settings.min) {
      this.settings.from = this.settings.min;
    } else this.settings.from = from;
  }

  getFrom(): number {
    return this.settings.from;
  }

  setTo(valueInPercent: number, thumbWidthInPercent: number): void {
    const to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);
    if (to >= this.settings.max) {
      this.settings.to = this.settings.max;
    } else if (to <= this.settings.from) {
      this.settings.to = this.settings.from;
    } else this.settings.to = to;
  }

  getTo(): number {
    return this.settings.to;
  }

  getStep(): number {
    return this.settings.step ? this.settings.step : 1;
  }

  getIsRange(): boolean|undefined {
    return this.settings.isRange;
  }

  getIsVertical(): boolean|undefined {
    return this.settings.isVertical;
  }

  getHideThumbLabel(): boolean | undefined {
    return this.settings.hideThumbLabel;
  }

  private validateSettings(settings: ISettings): void {
    const newMin = Utils.convertFromInputToNumber(settings.min);
    const newMax = Utils.convertFromInputToNumber(settings.max);
    const newFrom = Utils.convertFromInputToNumber(settings.from);
    const newTo = Utils.convertFromInputToNumber(settings.to);
    const newStep = Utils.convertFromInputToNumber(settings.step);
    const newIsVertical = Utils.convertFromInputToBoolean(settings.isVertical);
    const newHideThumbLabel = Utils.convertFromInputToBoolean(settings.hideThumbLabel);
    const newRange = Utils.convertFromInputToBoolean(settings.isRange);

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
    if (newMin !== undefined && newMax !== undefined) {
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
      if (this.settings.isRange && newMax < this.settings.to) {
        throw new Error('min value more than to value');
      } else if (!this.settings.isRange && newMax < this.settings.from) {
        throw new Error('min value more than from value');
      } else {
        this.settings.max = newMax;
      }
    }
  }

  private validateFrom(newFrom:number|undefined) {
    if (newFrom !== undefined && !this.settings.isRange) {
      if (newFrom > this.settings.max) {
        throw new Error('from more than max');
      } else if (newFrom < this.settings.min) {
        throw new Error('from less than min');
      } else this.settings.from = newFrom;
    }
    if (newFrom !== undefined && this.settings.isRange) {
      if (newFrom > this.settings.to) {
        throw new Error('from more than to');
      } else if (newFrom < this.settings.min) {
        throw new Error('from less than min');
      } else this.settings.from = newFrom;
    }
  }

  private validateTo(newTo:number|undefined) {
    if (newTo !== undefined && this.settings.isRange) {
      if (newTo < this.settings.from) {
        throw new Error('to less than from');
      } else if (newTo > this.settings.max) {
        throw new Error('to more than max');
      } else this.settings.to = newTo;
    }
  }

  private validateStep(newStep:number|undefined) {
    if (newStep !== undefined) {
      if (newStep < 0) {
        throw new Error('step must be positive');
      } else if (newStep === 0) {
        throw new Error('step must not be zero');
      } else if (newStep > (Math.abs(this.settings.max - this.settings.min))) {
        throw new Error('step must be more than difference between max and min');
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.settings.step !== newStep) {
          this.settings.step = newStep;
          this.settings.from = +Math.round(this.settings.min + this.settings.step)
            .toFixed(Utils.numDigitsAfterDecimal(this.settings.step));
          if ((this.settings.from + this.settings.step) >= this.settings.max) {
            this.settings.to = this.settings.max;
          } else {
            this.settings.to = +Math.round(this.settings.from + this.settings.step)
              .toFixed(Utils.numDigitsAfterDecimal(this.settings.step));
          }
        }
      }
    }
  }

  private validateRange(newRange:boolean|undefined) {
    if (newRange !== undefined) {
      if (!this.settings.isRange) {
        this.settings.to = ((this.settings.from + this.settings.step) > this.settings.max)
          ? this.settings.max : (+Math.round(this.settings.from + this.settings.step)
            .toFixed(Utils.numDigitsAfterDecimal(this.settings.step)));
      }
      this.settings.isRange = newRange;
      if (this.settings.from >= this.settings.to) {
        this.settings.from = this.settings.min;
      }
    }
  }

  private convertFromPercentToValue(valueInPercent: number, thumbWidthInPercent:number) {
    const { min, max, step } = this.settings;
    if (valueInPercent <= 0) {
      return min;
    }
    if (valueInPercent >= (100 - thumbWidthInPercent)) {
      return max;
    }
    let delimeter = 1;
    if (step !== 0) {
      delimeter = 1.0 / step;
    }
    const diapason = Math.abs(max - min);
    const res = Math.round(+(((diapason * valueInPercent) / (100 - thumbWidthInPercent)))
      .toFixed(Utils.numDigitsAfterDecimal(step)) * delimeter)
      / delimeter + min;
    if (res < min) return min;
    if (res > max) return max;
    return res;
  }
}
export default Model;
