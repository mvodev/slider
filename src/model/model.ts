import { ISettings } from './ISettings';
export class Model {

 private settings: ISettings;

 constructor(settings: ISettings) {
  this.settings = Object.assign({}, settings);
 }

 getSettings() {
  return this.settings;
 }

 setFrom(pos: number) {
  this.settings.from = pos;
 }
 getFrom() {
  return this.settings.from + 'px';
 }
}