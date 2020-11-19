import { Model } from '../model/Model';
import { Slider } from './modules/Slider';
export class View {
 private slider: Slider;
 private model: Model;
 private rootElem: HTMLDivElement;
 private rangeWidth: number;
 //TODO: add this class from settings
 constructor(model: Model, root: HTMLDivElement) {
  this.model = model;
  this.rootElem = root;
  this.slider = new Slider(this.rootElem);
  this.rangeWidth = 0;
 }

 render() {
  this.slider.render();
  if (this.model.getSettings().hideThumbLabel) {
   this.slider.getThumbLabel().hideLabel();
  }
  if (this.model.getSettings().isVertical) {
   this.slider.setVertical();
  }
 }

 getSliderWidth() {
  return this.rangeWidth;
 }
 setValueToThumbLabel(value: number) {
  this.slider.setValueToLabel(value);
 }
 setValueToMinRange(value: number) {
  this.slider.setMinRange(value);
 }
 setValueToMaxRange(value: number) {
  this.slider.setMaxRange(value);
 }

 getRange() {
  return this.slider.getRange();
 }
 getThumb() {
  return this.slider.getThumb();
 }
 setWidthToColoredRange(value: number) {
  this.slider.setWidthToColoredRange(value,this.model.getSettings().isVertical);
 }
}