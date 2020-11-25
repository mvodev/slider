import { ISettings } from './ISettings';
export class Model {

 private settings: ISettings;

 constructor(settings: ISettings) {
  this.settings = Object.assign({}, settings);
  if (!this.settings.to && this.settings.isRange) {
   this.settings.to = this.settings.max;
  }
  if (this.settings.min >= this.settings.max) {
   console.error('unacceptable value,min value in settings more than max value');
   throw new Error('unacceptable value,min value in settings more than max value');
  }
  if (this.settings.from < this.settings.min || this.settings.from > this.settings.max ||
   this.settings.to < this.settings.min || this.settings.to > this.settings.max) {
   console.error('unacceptable value,from and to values in settings must be between min and max value');
   throw new Error('unacceptable value,from and to values in settings must be between min and max value');
  }
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
}