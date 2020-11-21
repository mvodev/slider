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
   this.setThumbToValue(this.model.getSettings().from, 'from');
   if (this.model.getSettings().isRange) {
    this.setThumbToValue(this.model.getSettings().to, 'to');
   }
  }
  this.view.setValueToMinRange(this.model.getSettings().min);
  this.view.setValueToMaxRange(this.model.getSettings().max);
 }

 setThumbToValue(currentPos: number | undefined, type: string) {
  if (type === 'from') {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumbFrom().offsetHeight;
    let valueToThumb = (heightRange / (this.model.getSettings().max - this.model.getSettings().min)) * this.model.getSettings().from;
    this.view.setColoredRange(valueToThumb);
    this.view.getThumbFrom().style.top = '' + valueToThumb + 'px';
    this.view.setValueToThumbLabelFrom(this.model.getSettings().from);
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumbFrom().offsetWidth;
    let valueToThumb = (widthRange / (this.model.getSettings().max - this.model.getSettings().min)) * (this.model.getSettings().from);
    this.view.setColoredRange(valueToThumb);
    this.view.getThumbFrom().style.left = '' + valueToThumb + 'px';
    this.view.setValueToThumbLabelFrom(this.model.getSettings().from);
   }
  }
  else {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumbTo().offsetHeight;
    let valueToThumb = (heightRange / (this.model.getSettings().max - this.model.getSettings().min)) * this.model.getSettings().to;
    this.view.setColoredRange(valueToThumb);
    this.view.getThumbTo().style.top = '' + valueToThumb + 'px';
    this.view.setValueToThumbLabelTo(this.model.getSettings().from);
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumbTo().offsetWidth;
    let valueToThumb = (widthRange / (this.model.getSettings().max - this.model.getSettings().min)) * this.model.getSettings().to;
    this.view.setColoredRange(valueToThumb);
    this.view.getThumbTo().style.left = '' + valueToThumb + 'px';
    this.view.setValueToThumbLabelTo(this.model.getSettings().to);
   }
  }
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
 }
 setValueToThumb(value: number) {
  if (!this.model.getSettings().hideThumbLabel) {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumbFrom().offsetHeight;
    let valueToThumbLabel = Math.floor(value / (heightRange / this.model.getSettings().max));
    this.view.setValueToThumbLabelFrom(valueToThumbLabel);
    this.view.setColoredRange(value);
    this.model.getSettings().from = valueToThumbLabel;
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumbFrom().offsetWidth;
    let valueToThumbLabel = Math.floor(value / (widthRange / (this.model.getSettings().max - this.model.getSettings().min)));
    this.view.setValueToThumbLabelFrom(valueToThumbLabel);
    this.view.setColoredRange(value);
    this.model.getSettings().from = valueToThumbLabel;
   }
  }
 }
 mouseFromHandler(e: MouseEvent) {
  //console.log(type);
  e.preventDefault();
  if (this.model.getSettings().isVertical) {
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
   let shiftX = e.clientX - this.view.getThumbFrom().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumbFrom();
   let that = this;

   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    if (newLeft < -thumb.offsetWidth / 2) {
     newLeft = -thumb.offsetWidth / 2;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth / 2;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.setValueToThumb(newLeft < 0 ? 0 : newLeft);
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

 mouseToHandler(e: MouseEvent) {
  //console.log(type);
  e.preventDefault();
  if (this.model.getSettings().isVertical) {
   let shiftY = e.clientY - this.view.getThumbTo().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();

   let thumb = this.view.getThumbTo();
   let that = this;

   function onMouseMove(event: MouseEvent) {
    let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    if (newTop < 0) {
     newTop = 0;
    }
    let bottom = sliderRange.offsetHeight - thumb.offsetHeight / 2;
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
   let shiftX = e.clientX - this.view.getThumbTo().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumbTo();
   let that = this;

   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    if (newLeft < -thumb.offsetWidth / 2) {
     newLeft = -thumb.offsetWidth / 2;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth / 2;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.setValueToThumb(newLeft < 0 ? 0 : newLeft);
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }
}