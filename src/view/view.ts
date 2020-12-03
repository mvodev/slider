import { ISettings } from '../model/ISettings';
import { Model } from '../model/Model';
import { Slider } from './modules/Slider';
import { IObserver } from '../Observers/IObserver';
export class View implements IObserver {
 private slider: Slider;
 private model: Model;
 private rootElem: HTMLDivElement;
 private numberOfMarking: number = 10;
 private isUpdated: boolean;
 constructor(model: Model, root: HTMLInputElement,) {
  this.model = model;
  this.rootElem = root;
  this.slider = new Slider(this.rootElem, this.model, this.numberOfMarking);
  this.isUpdated = false;
 }
 handleEvent(s: ISettings) {
  this.refreshView(s);
 }
 private setIsUpdate(value: boolean) {
  this.isUpdated = value;
 }
 private isUpdate(): boolean {
  return this.isUpdated;
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
 refreshView(s: ISettings) {
  this.slider.setMinRange(s.min);
  this.slider.setMaxRange(s.max);
  this.slider.setValueToLabelThumbFrom(s.from);
  if (this.model.isRange()) {
   this.slider.setValueToLabelThumbTo(s.to);
   if (this.model.isVertical()) {
    this.getThumbTo().style.top = (this.model.getToInPx() / this.getRange().clientHeight) * 100 + '%';
    this.getThumbFrom().style.top = (this.model.getFromInPx() / this.getRange().clientHeight) * 100 + '%';
   }
   else {

    this.getThumbTo().style.left = (this.model.getToInPx() / this.getRange().clientWidth) * 100 + '%';
    this.getThumbFrom().style.left = (this.model.getFromInPx() / this.getRange().clientWidth) * 100 + '%';
   }
  }
  else {
   if (this.model.isVertical()) {
    this.getThumbFrom().style.top = (this.model.getFromInPx() / this.getRange().offsetHeight) * 100 + '%';
   }
   else {
    this.getThumbFrom().style.left = (this.model.getFromInPx() / this.getRange().clientWidth) * 100 + '%';
   }
  }
  this.setColoredRange();
 }
 private setColoredRange() {
  let that = this;
  if (this.model.isRange()) {
   if (this.model.isVertical()) {
    let thumbHalf = this.slider.getThumbFrom().offsetHeight / 2;
    let height = ((this.model.getToInPx() + thumbHalf - this.model.getFromInPx()) / this.getRange().offsetHeight) * 100 + '%';
    let top = (this.model.getFromInPx() / this.getRange().offsetHeight) * 100 + '%';
    this.slider.getColoredRange().style.top = top;
    this.slider.getColoredRange().style.height = height;
   }
   else {
    let thumbHalf = this.slider.getThumbFrom().offsetWidth / 2;
    let width = ((this.model.getToInPx() + thumbHalf - this.model.getFromInPx()) / this.getRange().offsetWidth) * 100 + '%';
    let left = (this.model.getFromInPx() / this.getRange().offsetWidth) * 100 + '%';
    this.slider.getColoredRange().style.left = left;
    this.slider.getColoredRange().style.width = width;
   }
  }
  else {
   if (this.model.isVertical()) {
    let thumbHalf = this.slider.getThumbFrom().offsetHeight / 2;
    let height = ((this.model.getFromInPx() + thumbHalf) / this.getRange().clientHeight) * 100 + '%';
    this.slider.getColoredRange().style.height = height;
   }
   else {
    let thumbHalf = this.slider.getThumbFrom().offsetWidth / 2;
    let width = ((this.model.getFromInPx() + thumbHalf) / this.getRange().clientWidth) * 100 + '%';
    this.slider.getColoredRange().style.width = width;
   }
  }
 }
}