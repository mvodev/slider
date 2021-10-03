import Messages from '../utils/Messages';
import IModelFacade from './IModelFacade';
import ISettings from './ISettings';
import EventObservable from '../observers/EventObservable';
import Utils from '../utils/Utils';
import defaultSettings from './defaultSettings';
import ErrorMessage from '../error-message/ErrorMessage';

class Model extends EventObservable implements IModelFacade {
  private settings: ISettings;

  constructor(settings: ISettings) {
    super();
    this.settings = { ...defaultSettings };
    this.setSettings(settings);
  }

  private setSettings(settings:ISettings):void {
    this.settings = { ...settings };
  }

  getSettings(): string {
    return JSON.stringify(this.settings);
  }

  updateSettings(settings: ISettings):void {
    this.validateSettings(settings);
    this.notifyObservers(Messages.UPDATE, this.getSettings(), 0);
  }

  getMin(): number {
    return this.settings.min;
  }

  getMax() :number {
    return this.settings.max;
  }

  setFrom(valueInPercent: number, thumbWidthInPercent:number): void {
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

  setTo(valueInPercent: number, thumbWidthInPercent:number): void {
    const to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);
    if (to >= this.settings.max) {
      this.settings.to = this.settings.max;
    } else if (to <= this.settings.from) {
      this.settings.to = this.settings.from;
    } else this.settings.to = to;
  }

  getTo() :number {
    return this.settings.to;
  }

  getStep() :number {
    return this.settings.step ? this.settings.step : 1;
  }

  private validateSettings(settings: ISettings):void {
    const newMin = Utils.convertFromInputToNumber(settings.min);
    const newMax = Utils.convertFromInputToNumber(settings.max);
    const newFrom = Utils.convertFromInputToNumber(settings.from);
    const newTo = Utils.convertFromInputToNumber(settings.to);
    const newStep = Utils.convertFromInputToNumber(settings.step);
    const newIsVertical = Utils.convertFromInputToBoolean(settings.isVertical);
    const newHideThumbLabel = Utils.convertFromInputToBoolean(settings.hideThumbLabel);
    const newRange = Utils.convertFromInputToBoolean(settings.isRange);
    if (newMin !== undefined && newMax !== undefined) {
      if (Math.abs(newMax - newMin) < this.settings.step) {
        throw new ErrorMessage('unacceptable values,difference between min and max more than step');
      }
    }
    if (newMin !== undefined) {
      if (newMin > this.settings.from) {
        this.settings.min = this.settings.from;
        throw new ErrorMessage('unacceptable value,min value more than from value');
      } else {
        this.settings.min = newMin;
      }
    }
    if (newMax !== undefined) {
      if (this.settings.isRange && newMax < this.settings.to) {
        throw new ErrorMessage('unacceptable value,min value more than to value');
      } else if (!this.settings.isRange && newMax < this.settings.from) {
        this.settings.max = this.settings.from + this.settings.step;
        throw new ErrorMessage('unacceptable value,min value more than from value');
      } else {
        this.settings.max = newMax;
      }
    }
    if (newFrom !== undefined && newTo !== undefined) {
      if (newFrom > newTo && this.settings.isRange) {
        this.settings.from = this.settings.min;
        this.settings.to = this.settings.max;
        throw new ErrorMessage('unacceptable value,from more than to');
      }
    }
    if (newFrom !== undefined && !this.settings.isRange) {
      if (newFrom > this.settings.max) {
        throw new ErrorMessage('unacceptable value,from more than max');
      }
      if (newFrom < this.settings.min) {
        throw new ErrorMessage('unacceptable value,from less than min');
      }
      this.settings.from = newFrom;
    }
    if (newFrom !== undefined && this.settings.isRange) {
      if (newFrom > this.settings.to) {
        throw new ErrorMessage('unacceptable value,from more than to');
      }
      if (newFrom < this.settings.min) {
        throw new ErrorMessage('unacceptable value,from less than min');
      }
      this.settings.from = newFrom;
    }
    if (newTo !== undefined && this.settings.isRange) {
      if (newTo < this.settings.from) {
        throw new ErrorMessage('unacceptable value,to less than from');
      } else if (newTo > this.settings.max) {
        throw new ErrorMessage('unacceptable value,to more than max');
      } else this.settings.to = newTo;
    }
    if (newStep !== undefined) {
      if (newStep < 0) {
        // eslint-disable-next-line no-new
        new ErrorMessage('step must be positive');
      } else if (newStep === 0) {
        // eslint-disable-next-line no-new
        new ErrorMessage('step must not be zero');
      } else if (newStep > (Math.abs(this.settings.max - this.settings.min))) {
        // eslint-disable-next-line no-new
        new ErrorMessage('step must be more than difference between max and min');
      } else if (this.settings.step !== newStep) {
        this.settings.step = newStep;
        this.settings.from = this.settings.min + this.settings.step;
        this.settings.to = this.settings.from + this.settings.step;
      }
    }
    this.settings.isVertical = newIsVertical;
    this.settings.hideThumbLabel = newHideThumbLabel;
    if (newRange !== undefined) {
      if (!this.settings.isRange) {
        this.settings.to = this.settings.max;
      }
      this.settings.isRange = newRange;
      if (this.settings.from >= this.settings.to) {
        this.settings.from = this.settings.min;
      }
    }
  }

  private convertFromPercentToValue(valueInPercent: number, thumbWidthInPercent:number) {
    if (valueInPercent <= 0) {
      return this.getMin();
    }
    if (valueInPercent >= 100) {
      return this.getMax();
    }
    let del = 1;
    if (this.getStep() !== 0) {
      del = 1.0 / this.getStep();
    }
    const diapason = Math.abs(this.getMax() - this.getMin());
    const res = Math.round(+(((diapason * valueInPercent) / (100 - thumbWidthInPercent)))
      .toFixed(Utils.numDigitsAfterDecimal(this.getStep())) * del) / del + this.getMin();
    if (res < this.getMin()) return this.getMin();
    if (res > this.getMax()) return this.getMax();
    return res;
  }
}
export default Model;
