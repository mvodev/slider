import { Messages } from '../utils/Messages';
import { IModelFacade } from './IModelFacade';
import { ISettings } from './ISettings';
import { EventObservable } from '../observers/EventObservable';
import { Utils } from '../utils/Utils';
export class Model extends EventObservable implements IModelFacade {
 //todo  delete this method after all subscribed

 getSettings(): ISettings {
  return this.settings;
 }

 private settings: ISettings;
 private defaultSettings: ISettings = {
  min: 0,
  max: 10,
  from: 5,
  isRange: false,
  isVertical: false,
  hideThumbLabel: false,
  callBack: undefined,
 };
 constructor(settings: ISettings) {
  super();
  this.settings = Object.assign(this.defaultSettings, settings);
  this.validateSettings(this.settings);
 }
 updateSettings(settings: ISettings) {
  this.settings = Object.assign(this.settings, settings);
  this.validateSettings(this.settings);
  this.notifyObservers(Messages.UPDATE, this.settings);
 }
 getMin(): number {
  return this.settings.min;
 }
 getMax() {
  return this.settings.max;
 }
 getOnChangeCallback() {
  return this.settings.onChange;
 }
 showThumbLabel(): boolean | undefined {
  return !this.settings.hideThumbLabel;
 }
 setFrom(valueInPercent: number): void {
  this.settings.from = this.convertFromPercentToValue(valueInPercent);
 }
 getFrom(): number {
  return this.settings.from;
 }
 setTo(valueInPercent: number): void {
  this.settings.to = this.convertFromPercentToValue(valueInPercent);;
 }
 getTo(): number | undefined {
  return this.settings.to;
 }
 isRange(): boolean | undefined {
  return this.settings.isRange;
 }
 isVertical(): boolean | undefined {
  return this.settings.isVertical;
 }
 getStep() {
  return this.settings.step ? this.settings.step : 1;
 }
 getOnStart(): Function | undefined {
  return this.settings.onStart;
 }
 getOnChange(): Function | undefined {
  return this.settings.onChange;
 }
 getOnUpdate(): Function | undefined {
  return this.settings.onUpdate;
 }
 getOnDestroy(): Function | undefined {
  return this.settings.onDestroy;
 }
 private validateSettings(settings: ISettings) {
  if (settings.min >= settings.max) {
   console.error('unacceptable value,min value in settings more than max value');
   this.settings.min = settings.max - 10;
  }
  if (!settings.to && settings.isRange) {
   this.settings.to = settings.max;
   console.error('unacceptable value,`to` value must be established');
  }
  if (settings.from < settings.min) {
   console.error('unacceptable value,from must be more than min');
   this.settings.from = settings.min;
  }
  if (settings.from > settings.max) {
   console.error('unacceptable value,from must be lower than max');
   this.settings.from = settings.min;
  }
  if ((settings.to < settings.min) && settings.isRange) {
   console.error(settings.to + ' ' + settings.min);
   this.settings.to = settings.max;

   console.error('unacceptable value,`to` value must be between min and max');
  }
  if (settings.isRange && settings.to > settings.max) {
   console.error('unacceptable value,to must be lower than max');
   this.settings.to = settings.max;
  }
  if (settings.isRange && settings.from >= settings.to) {
   console.error('unacceptable value,from must be lower than to');
   this.settings.to = this.settings.from + this.settings.step ? this.settings.step : 0;
  }
  if (settings.onStart && typeof settings.onStart != 'function') {
   console.error('unacceptable value,callback must be function');
   this.settings.onStart = undefined;
  }
  if (settings.onChange && typeof settings.onChange != 'function') {
   console.error('unacceptable value,callback onChange must be function');
   this.settings.onChange = undefined;
  }
  if (settings.onUpdate && typeof settings.onUpdate != 'function') {
   console.error('unacceptable value,callback onUpdate must be function');
   this.settings.onUpdate = undefined;
  }
  if (settings.onDestroy && typeof settings.onDestroy != 'function') {
   console.error('unacceptable value,callback onUpdate must be function');
   this.settings.onDestroy = undefined;
  }
 }
 private convertFromPercentToValue(valueInPercent: number) {
  if (valueInPercent <= 0) {
   return this.getMin();
  }
  if (valueInPercent >= 100) {
   return this.getMax();
  }
  let del = 1.0 /this.getStep();
  return Math.round(+((Math.abs(this.getMax() - this.getMin()) * valueInPercent / 100) + this.getMin()).toFixed(Utils.numDigitsAfterDecimal(this.getStep())) * del) / del;
 }
}