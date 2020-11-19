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
  if(!this.model.getSettings().hideThumbLabel) {
   this.setThumbToValue(this.model.getSettings().currentPos);
  }
  this.view.setValueToMinRange(this.model.getSettings().min);
  this.view.setValueToMaxRange(this.model.getSettings().max);
 }
 setThumbToValue(currentPos: number) {
  let widthRange = this.view.getRange().offsetWidth - this.view.getThumb().offsetWidth;
  let valueToThumb = (widthRange / this.model.getSettings().max) * this.model.getSettings().currentPos;
  this.view.getThumb().style.left = '' + valueToThumb + 'px';
  this.view.setValueToThumbLabel(this.model.getSettings().currentPos);
 }
 bindEvents() {
  this.view.getThumb().onmousedown = this.mouseDownHandler.bind(this);
 }
 start() {
  this.initialize();
  this.bindEvents();
 }
 // setValueToThumb(value: number) {
 //  if (!this.model.getSettings().hideThumbLabel) {
 //   let widthRange = this.view.getRange().offsetWidth - this.view.getThumb().offsetWidth;
 //   let valueToThumbLabel =
 //   Math.floor((widthRange / this.model.getSettings().max) * this.model.getSettings().currentPos);
 //   this.model.getSettings().currentPos = valueToThumbLabel;
 //   this.view.reDrawView();
 //  }
 // }
 mouseDownHandler(e: MouseEvent) {
  e.preventDefault();
  if (this.model.getSettings().isVertical) {
   let shiftY = e.clientY - this.view.getThumb().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumb();
   let model = this.model;
   let view = this.view;

   function onMouseMove(event: MouseEvent) {
    let top = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    if (top < 0) {
     top = 0;
    }
    let bottom = sliderRange.offsetHeight - thumb.offsetHeight;
    if (top > bottom) {
     top = bottom;
    }

    thumb.style.top = top + 'px';
   }

   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
  else {
   let shiftX = e.clientX - this.view.getThumb().getBoundingClientRect().left;
   console.log('e.clientX=' + e.clientX + ' shiftX=' + shiftX + ' bound=' + this.view.getThumb().getBoundingClientRect().left);
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumb();
   let model = this.model;
   let view = this.view;
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
    //that.setValueToThumb(newLeft);
    view.reDrawView();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

}