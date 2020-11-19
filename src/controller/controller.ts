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
   this.setThumbToValue(this.model.getSettings().from);
  }
  this.view.setValueToMinRange(this.model.getSettings().min);
  this.view.setValueToMaxRange(this.model.getSettings().max);
 }
 setThumbToValue(currentPos: number) {
  if (this.model.getSettings().isVertical) {
   let heightRange = this.view.getRange().offsetHeight - this.view.getThumb().offsetHeight;
   let valueToThumb = (heightRange / this.model.getSettings().max) * this.model.getSettings().from;
   this.view.getThumb().style.top = '' + valueToThumb + 'px';
   this.view.setValueToThumbLabel(this.model.getSettings().from);
  }
  else {
   let widthRange = this.view.getRange().offsetWidth - this.view.getThumb().offsetWidth;
   let valueToThumb = (widthRange / this.model.getSettings().max) * this.model.getSettings().from;
   this.view.getThumb().style.left = '' + valueToThumb + 'px';
   this.view.setValueToThumbLabel(this.model.getSettings().from);
  }

 }
 bindEvents() {
  this.view.getThumb().onmousedown = this.mouseDownHandler.bind(this);
 }
 start() {
  this.initialize();
  this.bindEvents();
 }
 setValueToThumb(value: number) {
  if (!this.model.getSettings().hideThumbLabel) {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumb().offsetHeight;
    let valueToThumbLabel = Math.floor(value / (heightRange / this.model.getSettings().max));
    this.view.setValueToThumbLabel(valueToThumbLabel);
    this.model.getSettings().from = valueToThumbLabel;
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumb().offsetWidth;
    let valueToThumbLabel = Math.floor(value / (widthRange / this.model.getSettings().max));
    this.view.setValueToThumbLabel(valueToThumbLabel);
    this.model.getSettings().from = valueToThumbLabel;
   }
  }
 }
 mouseDownHandler(e: MouseEvent) {
  e.preventDefault();
  if (this.model.getSettings().isVertical) {
   let shiftY = e.clientY - this.view.getThumb().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumb();
   let that = this;

   function onMouseMove(event: MouseEvent) {
    let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    if (newTop < 0) {
     newTop = 0;
    }
    let bottom = sliderRange.offsetHeight - thumb.offsetHeight;
    if (newTop > bottom) {
     newTop = bottom;
    }

    thumb.style.top = newTop + 'px';
    that.setValueToThumb(newTop);
   }

   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
  else {
   let shiftX = e.clientX - this.view.getThumb().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumb();
   let that = this;

   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    if (newLeft < 0) {
     newLeft = 0;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.setValueToThumb(newLeft);
    //view.reDrawView();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

}