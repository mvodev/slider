import { Messages } from '../utils/Messages';
import { IModelFacade } from './IModelFacade';
import { ISettings } from './ISettings';
import { EventObservable } from '../observers/EventObservable';
import { Utils } from '../utils/Utils';
import {defaultSettings} from './defaultSettings';
import { ErrorMessage } from '../error-message/ErrorMessage';

class Model extends EventObservable implements IModelFacade {
  private settings: ISettings
  
  constructor(settings: ISettings) {
    super();
    this.settings = Object.assign({},defaultSettings);
    this.validateSettings(settings);
  }
  getSettings(): string {
    return JSON.stringify(this.settings);
  }
  updateSettings(settings: ISettings):void {
    this.validateSettings(settings);
    this.notifyObservers(Messages.UPDATE, this.getSettings(),0);
  }
  getMin(): number {
      return this.settings.min;
  }
  getMax() :number{
    return this.settings.max;
  }
  setFrom(valueInPercent: number, thumbWidthInPercent:number): void {
    this.settings.from = this.convertFromPercentToValue(valueInPercent,thumbWidthInPercent);
  }
  getFrom(): number {
  return this.settings.from;
  }
  setTo(valueInPercent: number, thumbWidthInPercent:number): void {
    this.settings.to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);
  }
  getTo() :number{
    return this.settings.to;
  }
  getStep() :number{
    return this.settings.step ? this.settings.step : 0;
  }
  private validateSettings(settings: ISettings):void {
    
    const newMin = Utils.convertFromInputToNumber(settings.min);
    const newMax = Utils.convertFromInputToNumber(settings.max);
    const newFrom = Utils.convertFromInputToNumber(settings.from);
    const newTo = Utils.convertFromInputToNumber(settings.to);
    const newStep = Utils.convertFromInputToNumber(settings.step);
    const newIsVertical = Utils.convertFromInputToBoolean(settings.isVertical);
    const newHideThumbLabel = Utils.convertFromInputToBoolean(settings.hideThumbLabel);
    if(newMin&&newMax){
      if(newMin>newMax) new ErrorMessage('unacceptable value,min value more than max value');
      this.settings.min = newMin;
      this.settings.max = newMax;
    }
    if(newMax){
      this.settings.max = newMax;
    }
    if(newMin){
      this.settings.min = newMin;
    }
    if (newFrom && newTo) {
      if (newFrom > newTo) new ErrorMessage('unacceptable value,from more than to');
      this.settings.from = newFrom;
      this.settings.to = newTo;
    }
    if(newFrom){
      this.settings.from = newFrom;
    }
    if(newStep){
      if(newStep<0){
        new ErrorMessage('step must be positive');
        this.settings.step = newStep * (-1);
      }
      this.settings.step = newStep;
    }
    this.settings.isVertical = newIsVertical
    this.settings.hideThumbLabel = newHideThumbLabel;
    this.settings.isRange = settings.isRange ? Utils.convertFromInputToBoolean(settings.isRange):this.settings.isRange;
  }
  
  private convertFromPercentToValue(valueInPercent: number,thumbWidthInPercent:number) {
    if (valueInPercent <= 0) {
      return this.getMin();
    }
    if (valueInPercent >= 100) {
      return this.getMax();
    }
    let del = 1;
    if (this.getStep() != 0) {
      del = 1.0 / this.getStep();
    }
    const diapason = Math.abs(this.getMax() - this.getMin());
    const res = Math.round(+((diapason * valueInPercent / (100 - thumbWidthInPercent)) + this.getMin()).toFixed(Utils.numDigitsAfterDecimal(this.getStep())) * del) / del;
    if (res < this.getMin()) return this.getMin();
    if (res > this.getMax()) return this.getMax();
    return res;
  }

}
export { Model }