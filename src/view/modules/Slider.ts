import { Range } from './range';
import { Thumb } from './thumb';
import { ThumbLabel } from './thumbLabel';
import { RangeLabel } from './rangeLabel';
import { ColoredRange } from './coloredRange';
import { Model } from '../../model/Model';
import { ISettings } from '../../model/ISettings';
export class Slider {

 private thumbFrom: Thumb;
 private thumbTo: Thumb;
 private range: Range;
 private thumbLabelFrom: ThumbLabel;
 private thumbLabelTo: ThumbLabel;
 private rangeLabel: RangeLabel;
 private rootElem: HTMLDivElement;
 private container: HTMLDivElement;
 private coloredRange: ColoredRange;
 private settings: ISettings;
 private numberOfMarking: number;

 constructor(rootElem: HTMLDivElement, s: ISettings, numberOfMarking: number) {
  this.settings = s;
  this.rootElem = rootElem;
  this.numberOfMarking = numberOfMarking;
  this.numberOfMarking = this.numberOfMarking;
  this.thumbTo = new Thumb('fsd-slider__thumb-to');
  this.thumbLabelTo = new ThumbLabel(this.thumbTo.getThumb());
  this.thumbFrom = new Thumb('fsd-slider__thumb-from');
  this.thumbLabelFrom = new ThumbLabel(this.thumbFrom.getThumb());
  this.range = new Range();
  this.coloredRange = new ColoredRange();
  this.rangeLabel = new RangeLabel(this.numberOfMarking, this.settings.isVertical);
  this.container = document.createElement('div');
 }

 render() {
  this.container.classList.add('fsd-slider');
  this.container.appendChild(this.range.getRange());
  this.range.getRange().appendChild(this.coloredRange.getColoredRange());
  this.range.getRange().appendChild(this.thumbFrom.getThumb());
  this.thumbFrom.getThumb().appendChild(this.thumbLabelFrom.getThumbLabelContainer());
  if (this.settings.isRange) {
   this.thumbTo.getThumb().appendChild(this.thumbLabelTo.getThumbLabelContainer());
   this.range.getRange().appendChild(this.thumbTo.getThumb());
  }
  this.container.appendChild(this.rangeLabel.getRangeLabel());
  this.rootElem.appendChild(this.container);
 }
 getRange() {
  return this.range.getRange();
 }
 getThumbFrom() {
  return this.thumbFrom.getThumb();
 }
 getThumbTo() {
  return this.thumbTo.getThumb();
 }
 getThumbLabelFrom() {
  return this.thumbLabelFrom;
 }
 getThumbLabelTo() {
  return this.thumbLabelTo;
 }
 getColoredRange() {
  return this.coloredRange.getColoredRange();
 }
 setMaxRange(value: number) {
  this.rangeLabel.setMaxRange(value);
 }
 setMinRange(value: number) {
  this.rangeLabel.setMinRange(value);
 }
 private getMinRange(){
  return this.rangeLabel.getMinRange();
 }
 private getMaxRange() {
  return this.rangeLabel.getMaxRange();
 }
 setValueToLabelThumbFrom(value: number) {
  this.thumbLabelFrom.setValueToLabel(value);
 }
 setValueToLabelThumbTo(value: number) {
  this.thumbLabelTo.setValueToLabel(value);
 }
 getRangeLabel(): HTMLDivElement {
  return this.rangeLabel.getRangeLabel();
 }
 setVertical() {
  this.container.classList.add('fsd-slider_is_vertical');
  this.range.getRange().classList.add('fsd-slider__range_is_vertical');
  this.coloredRange.getColoredRange().classList.add('fsd-slider__colored-range_is_vertical');
  this.rangeLabel.getRangeLabel().classList.add('fsd-slider__range-label_is_vertical');
  this.thumbLabelFrom.getThumbLabelContainer().classList.add('fsd-slider__thumb-label_is_vertical');
  if (this.settings.isRange) {
   this.thumbLabelTo.getThumbLabelContainer().classList.add('fsd-slider__thumb-label_is_vertical');
  }
 }
}