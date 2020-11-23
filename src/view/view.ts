import { ISettings } from '../model/ISettings';
import { Model } from '../model/Model';
import { Slider } from './modules/Slider';
export class View {

 private slider: Slider;
 private model: Model;
 private rootElem: HTMLDivElement;
 //TODO: add this class from settings
 constructor(model: Model, root: HTMLDivElement) {
  this.model = model;
  this.rootElem = root;
  this.slider = new Slider(this.rootElem, this.model);
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
 getModel() {
  return this.model;
 }
 getSliderLengthInPx() {
  if(this.model.getSettings().isVertical){
   return this.getRange().offsetHeight - this.getThumbFrom().offsetHeight;
  }
  else{
   return this.getRange().offsetWidth - this.getThumbFrom().offsetWidth;
  }
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
 refreshView() {
  this.slider.setValueToLabelThumbFrom(this.model.getSettings().from);
  if (this.model.getSettings().isRange) {
   this.slider.setValueToLabelThumbTo(this.model.getSettings().to);
  }
 }
 
}