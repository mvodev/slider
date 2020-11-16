import { Range } from './modules/range';
import { Thumb } from './modules/thumb';
import { Model } from '../model/model';
import { ThumbLabel } from './modules/thumbLabel';
import { RangeLabel } from './modules/rangeLabel';
export class View {
 private thumb: Thumb;
 private range: Range;
 private model: Model;
 private rootElem: HTMLDivElement;
 private thumbLabel: ThumbLabel;
 private rangeLabel: RangeLabel;
 //TODO: add this class from settings
 constructor(model: Model, root: HTMLDivElement) {
  this.model = model;
  this.rootElem = root;
  this.thumb = new Thumb();
  this.range = new Range();
  this.thumbLabel = new ThumbLabel(this.thumb.getThumb());
  this.rangeLabel = new RangeLabel();
 }
 getRange() {
  return this.range.getRange();
 }
 getThumb() {
  return this.thumb.getThumb();
 }
 getThumbLabel() {
  return this.thumbLabel;
 }
 setValueToThumbLabel(value: number) {
  this.thumbLabel.setValueToLabel(value);
 }
 setValueToMinRange(value: number) {
  this.rangeLabel.setMinRange(value);
 }
 setValueToMaxRange(value: number) {
  this.rangeLabel.setMaxRange(value);
 }
 render() {
  this.rootElem.classList.add('fsd-slider');
  this.rootElem.appendChild(this.range.getRange());
  this.range.getRange().appendChild(this.thumb.getThumb());
  this.thumb.getThumb().appendChild(this.thumbLabel.getThumbLabelContainer());
  this.rootElem.appendChild(this.rangeLabel.getRangeLabel());
 }
 reDrawView() {
  this.thumb.getThumb().style.left = this.model.getCurrPos();
 }
}