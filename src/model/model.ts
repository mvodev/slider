interface Options {
 [key: string]: string | boolean;
}
export class Model {

 private options: Options;
 private currentPos: number;

 constructor(options: Options) {
  this.options = Object.assign({}, options);
  this.currentPos = 0;
 }

 getSettings(): Object {
  return Object.assign({}, this.options);
 }

 setCurrPos(pos: number) {
  this.currentPos = pos;
 }
 getCurrPos() {
  return this.currentPos + 'px';
 }
}