import { ISettings } from './ISettings';
export class Model {

 private settings: ISettings;

 constructor(settings: ISettings) {
  this.settings = Object.assign({}, settings);
 }

 getSettings() {
  return this.settings;
 }

 setCurrPos(pos: number) {
  this.settings.currentPos = pos;
 }
 getCurrPos() {
  return this.settings.currentPos + 'px';
 }
}