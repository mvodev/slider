import { Range } from './range';
import { Thumb } from './thumb';
import { ThumbLabel } from './thumbLabel';
import { RangeLabel } from './rangeLabel';
export class Slider {

 private thumb: Thumb;
 private range: Range;
 private thumbLabel: ThumbLabel;
 private rangeLabel: RangeLabel;
 private rootElem: HTMLDivElement;
 private container: HTMLDivElement;

 constructor(rootElem: HTMLDivElement) {
  this.rootElem = rootElem;
  this.thumb = new Thumb();
  this.range = new Range();
  this.thumbLabel = new ThumbLabel(this.thumb.getThumb());
  this.rangeLabel = new RangeLabel();
  this.container = document.createElement('div');
 }

 render() {
  this.container.classList.add('fsd-slider');
  this.container.appendChild(this.range.getRange());
  this.range.getRange().appendChild(this.thumb.getThumb());
  this.thumb.getThumb().appendChild(this.thumbLabel.getThumbLabelContainer());
  this.container.appendChild(this.rangeLabel.getRangeLabel());
  this.rootElem.appendChild(this.container);
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
 setMaxRange(value: number) {
  this.rangeLabel.setMaxRange(value);
 }
 setMinRange(value: number) {
  this.rangeLabel.setMinRange(value);
 }
 setValueToLabel(value: number) {
  this.thumbLabel.setValueToLabel(value);
 }
 setVertical() {
  this.container.classList.add('fsd-slider_is_vertical');
  this.range.getRange().classList.add('fsd-slider_is_vertical');
 }
}