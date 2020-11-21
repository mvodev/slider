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
   this.setThumbToValue('from');
   if (this.model.getSettings().isRange) {
    this.setThumbToValue('to');
   }
  }
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
  this.view.refreshView();
 }
 setValueToThumb(value: number, type: string) {
  if (!this.model.getSettings().hideThumbLabel) {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumbFrom().offsetHeight;
    let valueToThumbLabel = Math.floor(value / (heightRange / (this.model.getSettings().max - this.model.getSettings().min)));
    if (type === 'from') {
     this.model.getSettings().from = valueToThumbLabel;
    }
    else {
     this.model.getSettings().to = valueToThumbLabel;
    }
    this.view.refreshView();
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumbFrom().offsetWidth;
    let valueToThumbLabel = Math.floor(value / (widthRange / (this.model.getSettings().max - this.model.getSettings().min)));
    if (type === 'from') {
     this.model.getSettings().from = valueToThumbLabel;
    }
    else {
     this.model.getSettings().to = valueToThumbLabel;
    }
    this.view.refreshView();
   }
  }
 }
 setThumbToValue(type: string) {
  if (type === 'from') {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumbFrom().offsetHeight;
    let valueToThumb = (heightRange / (this.model.getSettings().max - this.model.getSettings().min)) * this.model.getSettings().from;

    this.view.getThumbFrom().style.top = '' + valueToThumb + 'px';
    this.model.getSettings().currentFrom = valueToThumb;
    this.view.refreshView();
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumbFrom().offsetWidth;
    let valueToThumb = (widthRange / (this.model.getSettings().max - this.model.getSettings().min)) * (this.model.getSettings().from);
    this.view.getThumbFrom().style.left = '' + valueToThumb + 'px';
    this.model.getSettings().currentFrom = valueToThumb;
    this.view.refreshView();
   }
  }
  else {
   if (this.model.getSettings().isVertical) {
    let heightRange = this.view.getRange().offsetHeight - this.view.getThumbTo().offsetHeight;
    let valueToThumb = (heightRange / (this.model.getSettings().max - this.model.getSettings().min)) * this.model.getSettings().to;
    this.view.refreshView();
    this.view.getThumbTo().style.top = '' + valueToThumb + 'px';
    this.model.getSettings().currentTo = valueToThumb;
    this.view.setValueToThumbLabelTo(this.model.getSettings().from);
   }
   else {
    let widthRange = this.view.getRange().offsetWidth - this.view.getThumbTo().offsetWidth;
    let valueToThumb = (widthRange / (this.model.getSettings().max - this.model.getSettings().min)) * this.model.getSettings().to;
    this.view.refreshView();
    this.view.getThumbTo().style.left = '' + valueToThumb + 'px';
    this.model.getSettings().currentTo = valueToThumb;
    this.view.setValueToThumbLabelTo(this.model.getSettings().to);
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
    if (that.model.getSettings().isRange) {
     bottom = that.model.getSettings().currentTo;
    }
    if (newTop > bottom) {
     newTop = bottom;
    }

    thumb.style.top = newTop + 'px';
    that.model.getSettings().currentFrom = newTop;
    that.setValueToThumb(newTop, 'from');
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
    if (that.model.getSettings().isRange) {
     rightEdge = that.model.getSettings().currentTo;
    }
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.model.getSettings().currentFrom = newLeft;
    that.setValueToThumb(newLeft < 0 ? 0 : newLeft, 'from');
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

 mouseToHandler(e: MouseEvent) {
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
    if (newTop < that.model.getSettings().currentFrom) {
     newTop = that.model.getSettings().currentFrom + 1;
    }
    let bottom = sliderRange.offsetHeight - thumb.offsetHeight / 2;

    if (newTop > bottom) {
     newTop = bottom;
    }

    thumb.style.top = newTop + 'px';
    that.model.getSettings().currentTo = newTop;
    that.setValueToThumb(newTop, 'to');
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
    if (newLeft < that.model.getSettings().currentFrom) {
     newLeft = that.model.getSettings().currentFrom + 1;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth / 2;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    thumb.style.left = newLeft + 'px';
    that.model.getSettings().currentTo = newLeft;
    that.setValueToThumb(newLeft < 0 ? 0 : newLeft, 'to');
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }
}