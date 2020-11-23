import { ISettings } from './ISettings';
export class Model {

 private settings: ISettings;

 constructor(settings: ISettings) {
  this.settings = Object.assign({}, settings);
 }

 // getSettings() {
 //  return this.settings;
 // }
getMin():number{
 return this.settings.min;
}
getMax(){
 return this.settings.max;
}
showThumbLabel():boolean|undefined{
 return !this.settings.hideThumbLabel;
}
 setFrom(pos: number) {
  this.settings.from = pos;
 }
 getFrom():number {
  return this.settings.from;
 }
 setTo(value: number): void {
  this.settings.to = value;
 }
 getTo():number|undefined{
  return this.settings.to;
 }
 getFromInPx(): number {
  return this.settings.fromInPx;
 }
 setFromInPx(value: number): void {
  this.settings.fromInPx = value;
 }
 getToInPx(): number|undefined {
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
}