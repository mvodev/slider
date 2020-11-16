interface Settings {
 [key: string]: string | boolean;
}
export class Model {

 private settings: Settings;
 private currentPos: number;

 constructor(settings: Settings) {
  this.settings = Object.assign({}, settings);
  this.currentPos = 0;
 }

 getSettings(): Object {
  return Object.assign({}, this.settings);
 }

 setCurrPos(pos: number) {
  this.currentPos = pos;
 }
 getCurrPos() {
  return this.currentPos + 'px';
 }
}