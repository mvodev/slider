import {ISettings} from './ISettings';
export class Model {

 private settings: ISettings;
 private currentPos: number;

 constructor(settings: ISettings) {
  this.settings = Object.assign({}, settings);
  console.log(this.settings);
  this.currentPos = 0;
 }

 getSettings() {
  return this.settings;
 }

 setCurrPos(pos: number) {
  this.currentPos = pos;
 }
 getCurrPos() {
  return this.currentPos + 'px';
 }
}