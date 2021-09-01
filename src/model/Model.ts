import { Messages } from '../utils/Messages';
import { IModelFacade } from './IModelFacade';
import { ISettings } from './ISettings';
import { EventObservable } from '../observers/EventObservable';
import { Utils } from '../utils/Utils';
import {defaultSettings} from './DefaultSettings';
import { ErrorMessage } from '../error-message/ErrorMessage';
import { Constants } from '../utils/Constants';

class Model extends EventObservable implements IModelFacade {
  private settings: ISettings
  
  constructor(settings: ISettings) {
    super();
    this.settings = Object.assign({},defaultSettings);
    this.validateSettings(settings);
    this.settings.labels=this.calculateLabels();
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
    
    this.settings.isRange = settings.isRange ? Utils.convertFromInputToBoolean(settings.isRange):this.settings.isRange;
    this.validateMinOrError(newMin);
    this.validateMaxOrError(newMax);
    this.validateFromOrError(newFrom);
    this.validateToOrError(newTo);
    this.validateStepOrError(newStep);
    this.validateIsVerticalOrError(newIsVertical);
    this.validateThumbLabelOrError(newHideThumbLabel);
    this.settings.labels = this.calculateLabels();
  }
  private validateMinOrError(newMin:number|undefined):void{
    if (newMin) {
      if (newMin >= this.settings.max) {
        new ErrorMessage('unacceptable value,min value in settings more than max value', 'validate settings method of Model');
      }
      else if (newMin > this.settings.from) {
        new ErrorMessage('unacceptable value,min value in settings more than from value', 'validate settings method of Model');
      }
      else {
        this.settings.min = newMin;
      }
    }
  }
  private validateMaxOrError(newMax:number|undefined):void{
    if (newMax) {
      if (newMax <= this.settings.min) {
        new ErrorMessage('unacceptable value,max value in settings lower than min value', 'validate settings method of Model');
      }
      else if (newMax <= this.settings.to && this.settings.isRange) {
        new ErrorMessage('unacceptable value,max value in settings lower than to value', 'validate settings method of Model');
      }
      else if (newMax <= this.settings.from) {
        new ErrorMessage('unacceptable value,max value in settings lower than from value', 'validate settings method of Model');
      }
      else {
        this.settings.max = newMax;
      }
    }
  }
  private validateFromOrError(newFrom:number|undefined):void{
    if (newFrom) {
      const max = this.settings.isRange ? this.settings.to : this.settings.max;
      if (newFrom <= this.settings.min + this.settings.step || newFrom >= max + this.settings.step) {
        new ErrorMessage('from is invalid', 'validate settings method of Model');
        this.settings.from = this.settings.min;
      }
      else {
        this.settings.from = newFrom;
      }
    }
  }
  private validateToOrError(newTo:number|undefined):void{
    if (newTo) {
      if (newTo > this.settings.max) {
        new ErrorMessage('to must be lower than max', 'validate settings method of Model');
      }
      else if (newTo <= this.settings.min) {
        new ErrorMessage('to must be lower than max', 'validate settings method of Model');
      }
      else if (this.settings.isRange) {
        if (newTo <= this.settings.from) {
          new ErrorMessage('to must be lower than max', 'validate settings method of Model');
        }
        else {
          this.settings.to = newTo;
        }
      }
    }
  }
  private validateStepOrError(newStep:number|undefined):void{
    if (newStep) {
      if (newStep < 0) {
        new ErrorMessage('step must be positive', 'validate settings method of Model');
      }
      else if (newStep > (Math.abs(this.settings.max - this.settings.min))) {
        new ErrorMessage('step must be lower than difference between max and min', 'validate settings method of Model');
      }
      else {
        this.settings.step = newStep;
      }
    }
  }
  private validateIsVerticalOrError(newIsVertical:boolean|undefined):void{
    if (newIsVertical !== undefined) {
      this.settings.isVertical = newIsVertical;
    }
  }
  private validateThumbLabelOrError(newHideThumbLabel:boolean|undefined):void{
    if (newHideThumbLabel !== undefined) {
      this.settings.hideThumbLabel = newHideThumbLabel;
    }
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

  calculateLabels():number[]{
    const result:number[] = [];
    let del = 1;
    if (this.getStep() != 0) {
      del = 1.0 / this.getStep();
    }
    const step = Math.round(  +(Math.abs(this.getMax()-this.getMin())/Constants.NUMBER_OF_LABELS).
      toFixed(Utils.numDigitsAfterDecimal(this.getStep()))*del)/del;
    let initial = this.getMin();
    for(let i=0;i<Constants.NUMBER_OF_LABELS-1;i++){
      initial+=step;
      result.push(initial);
    }
    return result;
  }
}
export { Model }