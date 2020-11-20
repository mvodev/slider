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
   this.slider.getThumbLabelFrom().hideLabel();
  }
  if (this.model.getSettings().isVertical) {
   this.slider.setVertical();
  }
 }

 getSliderWidth() {
  return this.rangeWidth;
 }
 setValueToThumbLabelFrom(value: number) {
  this.slider.setValueToLabelThumbFrom(value);
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
 getThumbFrom() {
  return this.slider.getThumbFrom();
 }
 setValueToThumbLabelTo(value: number) {
  this.slider.setValueToLabelThumbTo(value);
 }
 getThumbTo() {
  return this.slider.getThumbTo();
 }
 setColoredRange(value: number) {
  this.slider.setWidthToColoredRange(value,this.model.getSettings().isVertical);
 }
}