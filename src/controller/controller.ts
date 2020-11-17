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
  this.view.setValueToThumbLabel(this.model.getSettings().currentPos);
  this.view.setValueToMinRange(this.model.getSettings().min);
  this.view.setValueToMaxRange(this.model.getSettings().max);
 }
 bindEvents() {
  this.view.getThumb().onmousedown = this.mouseDownHandler.bind(this);
 }
 start() {
  this.initialize();
  this.bindEvents();
 }
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

   function onMouseMove(event:MouseEvent) {
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
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.view.getRange();
   let thumb = this.view.getThumb();
   let model = this.model;
   let view = this.view;

   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    console.log(e.clientX + ' ' + shiftX + ' ' + sliderRange.getBoundingClientRect().left);
    if (newLeft < 0) {
     newLeft = 0;
    }
    let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    model.setCurrPos(newLeft);
    view.reDrawView();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

}