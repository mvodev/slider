import { Model } from '../model/model';
import { View } from '../view/view';
export class Controller {

 private view: View;
 private model: Model;

 constructor(view: View, model: Model) {
  this.view = view;
  this.model = model;
 }
 initialize() {
  this.view.render();
  this.view.setValueToThumbLabel(20);
  this.view.setValueToMinRange(10);
  this.view.setValueToMaxRange(100);
 }
 bindEvents() {
  this.view.getThumb().onmousedown = this.mouseDownHandler.bind(this);
 }
 mouseDownHandler(e: MouseEvent) {
  e.preventDefault();
  let shiftX = e.clientX - this.view.getThumb().getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  let slider = this.view.getRange();
  let thumb = this.view.getThumb();
  let model = this.model;
  let view = this.view;

  function onMouseMove(e: MouseEvent) {
   let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;
   console.log(e.clientX + ' ' + shiftX + ' ' + slider.getBoundingClientRect().left);
   if (newLeft < 0) {
    newLeft = 0;
   }
   let rightEdge = slider.offsetWidth - thumb.offsetWidth;
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