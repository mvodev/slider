import { ISettings } from '../model/ISettings';
import { Model } from '../model/Model';
import { Slider } from './modules/Slider';
export class View {

 private slider: Slider;
 private model: Model;
 private rootElem: HTMLDivElement;
 private numberOfMarking: number = 10;
 //TODO: add this class from settings
 constructor(model: Model, root: HTMLDivElement,) {
  this.model = model;
  this.rootElem = root;
  this.slider = new Slider(this.rootElem, this.model, this.numberOfMarking);
 }

 render() {
  this.slider.render();
  if (!this.model.showThumbLabel()) {
   this.slider.getThumbLabelFrom().hideLabel();
  }
  if (this.model.isVertical()) {
   this.slider.setVertical();
  }
 }
 // getModel() {
 //  return this.model;
 // }
 getRangeLabel() {
  return this.slider.getRangeLabel();
 }
 getSliderLengthInPx() {
  if (this.model.isVertical()) {
   return this.getRange().offsetHeight - this.getThumbFrom().offsetHeight;
  }
  else {
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
  this.slider.setValueToLabelThumbFrom(this.model.getFrom());
  if (this.model.isRange()) {
   this.slider.setValueToLabelThumbTo(this.model.getTo());
   if (this.model.isVertical()) {
    this.getThumbTo().style.top = this.model.getToInPx() + 'px';
    this.getThumbFrom().style.top = this.model.getFromInPx() + 'px';
   }
   else {
    this.getThumbTo().style.left = this.model.getToInPx() + 'px';
    this.getThumbFrom().style.left = this.model.getFromInPx() + 'px'
   }
  }
  else {
   if (this.model.isVertical()) {
    this.getThumbFrom().style.top = this.model.getFromInPx() + 'px';
    console.log('else if' + this.model.getFromInPx());
   }
   else {
    this.getThumbFrom().style.left = this.model.getFromInPx() + 'px';
   }
  }

  this.setColoredRange();
 }
 private setColoredRange() {
  //console.log('inside setColoredRange()');
  let that = this;
  if (this.model.isRange()) {
   if (this.model.isVertical()) {
    let thumbHalf = this.slider.getThumbFrom().offsetHeight / 2;
    let height = (this.model.getToInPx() + thumbHalf - this.model.getFromInPx()) + 'px';
    let top = this.model.getFromInPx() + 'px';
    this.slider.getColoredRange().style.top = top;
    this.slider.getColoredRange().style.height = height;
   }
   else {
    let thumbHalf = this.slider.getThumbFrom().offsetWidth / 2;
    let width = (this.model.getToInPx() + thumbHalf - this.model.getFromInPx()) + 'px';
    let left = this.model.getFromInPx() + 'px';
    this.slider.getColoredRange().style.left = left;
    this.slider.getColoredRange().style.width = width;
   }
  }
  else {
   //console.log('inside setColoredRange() is not range');
   if (this.model.isVertical()) {
    let thumbHalf = this.slider.getThumbFrom().offsetHeight / 2;
    let height = (this.model.getFromInPx() + thumbHalf) + 'px';
    this.slider.getColoredRange().style.height = height;
   }
   else {
    let thumbHalf = this.slider.getThumbFrom().offsetWidth / 2;
    let width = (this.model.getFromInPx() + thumbHalf) + 'px';
    this.slider.getColoredRange().style.width = width;
   }
  }
 }
}