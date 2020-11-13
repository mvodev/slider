import { Range } from './modules/range';
import { Thumb } from './modules/thumb';
import { Model } from '../model/model';
export class View {
 private thumb: HTMLDivElement;
 private range: HTMLDivElement;
 private model: Model;
 private rootElem: HTMLDivElement;
 //TODO: add this class from settings
 constructor(model: Model, root: HTMLDivElement) {
  this.model = model;
  this.rootElem = root;
  this.thumb = new Thumb().getThumb();
  this.range = new Range().getRange();
 }
 getRange() {
  return this.range;
 }
 getThumb() {
  return this.thumb;
 }
 render() {
  this.rootElem.classList.add('fsd-silder');
  this.rootElem.appendChild(this.thumb);
  this.rootElem.appendChild(this.range);
  this.range.appendChild(this.thumb);
 }
 reDrawView() {
  this.thumb.style.left = this.model.getCurrPos();
 }
}