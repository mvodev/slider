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
 constructor(rootElem:HTMLDivElement) {
  this.rootElem = rootElem;
  this.thumb = new Thumb();
  this.range = new Range();
  this.thumbLabel = new ThumbLabel(this.thumb.getThumb());
  this.rangeLabel = new RangeLabel();
 }
 render() {
  let container = document.createElement('div');
  container.classList.add('fsd-slider');
  container.appendChild(this.range.getRange());
  this.range.getRange().appendChild(this.thumb.getThumb());
  this.thumb.getThumb().appendChild(this.thumbLabel.getThumbLabelContainer());
  container.appendChild(this.rangeLabel.getRangeLabel());
  this.rootElem.appendChild(container);
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
 getSlider(){
  return this.getSlider;
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
}