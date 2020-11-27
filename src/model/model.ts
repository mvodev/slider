import { ISettings } from './ISettings';
export class Model {

 private settings: ISettings;

 constructor(settings: ISettings) {
  this.settings = Object.assign({}, settings);
  this.validateSettings();
 }

 getMin(): number {
  return this.settings.min;
 }
 getMax() {
  return this.settings.max;
 }
 showThumbLabel(): boolean | undefined {
  return !this.settings.hideThumbLabel;
 }
 setFrom(pos: number) {
  this.settings.from = pos;
 }
 getFrom(): number {
  return this.settings.from;
 }
 setTo(value: number): void {
  this.settings.to = value;
 }
 getTo(): number | undefined {
  return this.settings.to;
 }
 getFromInPx(): number {
  return this.settings.fromInPx;
 }
 setFromInPx(value: number): void {
  this.settings.fromInPx = value;
 }
 getToInPx(): number | undefined {
  return this.settings.toInPx;
 }
 setToInPx(value: number): void {
  this.settings.toInPx = value;
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
 validateSettings() {
  if (!this.settings.to && this.settings.isRange) {
   this.settings.to = this.settings.max;
  }
  if (this.settings.min >= this.settings.max) {
   console.error('unacceptable value,min value in settings more than max value');
   this.settings.min = this.settings.max - 10;
  }
  if (this.settings.from < this.settings.min) {
   console.error('unacceptable value,from must be lower min');
   this.settings.from = this.settings.min;
  }
  else if (this.settings.isRange && this.settings.to > this.settings.max) {
   console.error('unacceptable value,to must be higher than max');
   this.settings.to = this.settings.max;
  }
  if (this.settings.onChange && typeof this.settings.onChange != 'function') {
   console.error('unacceptable value,callback must be function');
   this.settings.onChange = undefined;
  }
  if (this.settings.onStart && typeof this.settings.onStart != 'function') {
   console.error('unacceptable value,callback must be function');
   this.settings.onStart = undefined;
  }
  if (this.settings.onFinish && typeof this.settings.onFinish != 'function') {
   console.error('unacceptable value,callback must be function');
   this.settings.onFinish = undefined;
  }
  if (this.settings.onUpdate && typeof this.settings.onUpdate != 'function') {
   console.error('unacceptable value,callback must be function');
   this.settings.onUpdate = undefined;
  }
 }
}