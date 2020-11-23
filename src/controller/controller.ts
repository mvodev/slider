import { Model } from '../model/Model';
import { View } from '../view/View';
export class Controller {

 private view: View;
 private model: Model;

 constructor(view: View, model: Model) {
  this.view = view;
  this.model = model;
 }
 initialize() {
  this.view.render();
  if (!this.model.getSettings().hideThumbLabel) {
   this.setThumbToValue('thumbFrom');
   if (this.model.getSettings().isRange) {
    this.setThumbToValue('thumbTo');
   }
  }
  this.view.refreshView();
  this.view.setValueToMinRange(this.model.getSettings().min);
  this.view.setValueToMaxRange(this.model.getSettings().max);
 }

 bindEvents() {
  this.view.getThumbFrom().onmousedown = this.mouseFromHandler.bind(this);
  if (this.model.getSettings().isRange) {
   this.view.getThumbTo().onmousedown = this.mouseToHandler.bind(this);
  }
 }
 start() {
  this.initialize();
  this.bindEvents();
  //this.setValueToThumb();
  this.view.refreshView();
 }
 isVerticalSlider(): boolean | undefined {
  return this.model.getSettings().isVertical;
 }
 isRangeSlider(): boolean | undefined {
  return this.model.getSettings().isRange;
 }
 withThumbLabel(): boolean | undefined {
  return !this.model.getSettings().hideThumbLabel;
 }
 setThumbToValue(type: string) {
  if (type === 'thumbFrom') {
   if (this.isVerticalSlider()) {
    let valueToThumb = this.getPosInPxFromValue(this.model.getSettings().from);
    this.view.getThumbFrom().style.top = valueToThumb + 'px';
    this.model.getSettings().fromInPx = valueToThumb;
    this.view.refreshView();
   }
   else {
    let valueToThumb = this.getPosInPxFromValue(this.model.getSettings().from);
    this.view.getThumbFrom().style.left = valueToThumb + 'px';
    this.model.getSettings().fromInPx = valueToThumb;
    this.view.refreshView();
   }
  }
  else {
   if (this.isVerticalSlider()) {
    let valueToThumb = this.getPosInPxFromValue(this.model.getSettings().to);
    this.view.getThumbTo().style.top = valueToThumb + 'px';
    this.model.getSettings().toInPx = valueToThumb;
    this.view.refreshView();
   }
   else {
    let valueToThumb = this.getPosInPxFromValue(this.model.getSettings().to);
    this.view.getThumbTo().style.left = valueToThumb + 'px';
    this.model.getSettings().toInPx = valueToThumb;
    this.view.refreshView();
   }
  }
 }
 mouseFromHandler(e: MouseEvent) {
  e.preventDefault();
  if (this.isVerticalSlider()) {
   let shiftY = e.clientY - this.view.getThumbFrom().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumbFrom();
   let that = this;

   function onMouseMove(event: MouseEvent) {
    let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    if (newTop < 0) {
     newTop = 0;
    }
    let bottom = sliderRange.offsetHeight - thumb.offsetHeight / 2;
    if (that.isRangeSlider()) {
     bottom = that.model.getSettings().toInPx;
    }
    if (newTop > bottom) {
     newTop = bottom;
    }

    thumb.style.top = newTop + 'px';
    that.model.getSettings().fromInPx = newTop;

    that.setValueToThumb();
    that.view.refreshView();
   }

   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
  else {
   let shiftX = e.clientX - this.view.getThumbFrom().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumbFrom();
   let that = this;

   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    if (newLeft < 0) {
     newLeft = 0;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth / 2;
    if (that.isRangeSlider()) {
     rightEdge = that.model.getSettings().toInPx;
    }
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.model.getSettings().fromInPx = newLeft;
    that.setValueToThumb();
    that.view.refreshView();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

 mouseToHandler(e: MouseEvent) {
  e.preventDefault();
  if (this.isVerticalSlider()) {
   let shiftY = e.clientY - this.view.getThumbTo().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();

   let thumb = this.view.getThumbTo();
   let that = this;

   function onMouseMove(event: MouseEvent) {
    let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    if (newTop < that.model.getSettings().fromInPx) {
     newTop = that.model.getSettings().fromInPx + 1;
    }
    let bottom = sliderRange.offsetHeight - thumb.offsetHeight;

    if (newTop > bottom) {
     newTop = bottom;
    }

    thumb.style.top = newTop + 'px';
    that.model.getSettings().toInPx = newTop;
    that.setValueToThumb();
    that.view.refreshView();
   }

   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
  else {
   let shiftX = e.clientX - this.view.getThumbTo().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumbTo();
   let that = this;

   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    if (newLeft < that.model.getSettings().fromInPx) {
     newLeft = that.model.getSettings().fromInPx + 1;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.model.getSettings().toInPx = newLeft;
    that.setValueToThumb();
    that.view.refreshView();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }
 setValueToThumb() {
  if (this.withThumbLabel()) {
   if (this.isVerticalSlider()) {
    this.model.getSettings().from = this.getValueFromPosInPx(this.model.getSettings().fromInPx);
    if (this.isRangeSlider()) {
     this.model.getSettings().to = this.getValueFromPosInPx(this.model.getSettings().toInPx);
    }
   }
   else {
    this.model.getSettings().from = this.getValueFromPosInPx(this.model.getSettings().fromInPx);
    if (this.isRangeSlider()) {
     this.model.getSettings().to = this.getValueFromPosInPx(this.model.getSettings().toInPx);
    }
   }
  }
 }
 getPosInPxFromValue(value: number): number {
  return this.view.getSliderLengthInPx() / Math.abs(this.model.getSettings().max - this.model.getSettings().min) * (Math.abs(value - this.model.getSettings().min));
 }
 getValueFromPosInPx(valueInPx:number):number{
  return Math.floor(valueInPx / (this.view.getSliderLengthInPx() / Math.abs(this.model.getSettings().max - this.model.getSettings().min))) + this.model.getSettings().min;
 }
}
