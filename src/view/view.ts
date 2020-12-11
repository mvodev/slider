import { ISettings } from '../model/ISettings';
import { Slider } from './modules/Slider';
import { Messages } from '../utils/Messages';
import { EventObservable } from '../observers/EventObservable';
import { Utils } from '../utils/Utils';
export class View extends EventObservable {
 private slider: Slider;
 private settings: ISettings;
 private rootElem: HTMLDivElement;
 private numberOfMarking: number = 10;
 private thumbInPercentage: number;
 constructor(settings: ISettings, root: HTMLInputElement,) {
  super();
  this.settings = settings;
  this.rootElem = root;
  this.slider = new Slider(this.rootElem, this.settings, this.numberOfMarking);
  if (this.settings.isVertical) {
   this.thumbInPercentage = Math.abs(this.getThumbFrom().offsetHeight / this.slider.getRange().offsetHeight) * 100;
  }
  else {
   this.thumbInPercentage = Math.abs(this.getThumbFrom().offsetWidth / this.slider.getRange().offsetWidth) * 100;
  }
 }
 render() {
  this.slider.render();
  if (this.settings.hideThumbLabel) {
   this.slider.getThumbLabelFrom().hideLabel();
  }
  if (this.settings.isVertical) {
   this.slider.setVertical();
  }
  this.bindEvents();
 }
 bindEvents() {
  this.getThumbFrom().onmousedown = this.mouseFromHandler.bind(this);
  //this.getRangeLabel().onmousedown = this.mouseRangeHandler.bind(this);
  if (this.settings.isRange) {
   this.getThumbTo().onmousedown = this.mouseToHandler.bind(this);
  }
 }
 getRangeLabel() {
  return this.slider.getRangeLabel();
 }
 private getSliderLengthInPx() {
  if (this.settings.isVertical) {
   return this.getRange().offsetHeight + this.getThumbFrom().offsetHeight;
  }
  else {
   return this.getRange().offsetWidth + this.getThumbFrom().offsetWidth;
  }
 }
 private getThumbLengthInPx() {
  if (this.settings.isVertical) {
   return this.getThumbFrom().offsetHeight;
  }
  else {
   return this.getThumbFrom().offsetWidth;
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
 refreshView(msg: Messages, s: ISettings) {
  if (msg === Messages.INIT || msg === Messages.UPDATE) {
   if (!this.settings.hideThumbLabel) {
    this.setThumbToValue('thumbFrom');
    if (this.settings.isRange) {
     this.setThumbToValue('thumbTo');
    }
   }
   this.slider.setMinRange(s.min);
   this.slider.setMaxRange(s.max);
   this.slider.setValueToLabelThumbFrom(s.from);
   if (s.isRange) {
    this.slider.setValueToLabelThumbTo(s.to);
    this.setColoredRange();
    if (s.isVertical) {
     this.getThumbTo().style.top = (Math.abs(s.to - s.min) / Math.abs(s.max - s.min)) * 100 + '%';
     this.getThumbFrom().style.top = (Math.abs(s.from - s.min) / Math.abs(s.max - s.min)) * 100 + '%';
    }
    else {
     this.getThumbTo().style.left = (Math.abs(s.to - s.min) / Math.abs(s.max - s.min)) * 100 + '%';
     this.getThumbFrom().style.left = (Math.abs(s.from - s.min) / Math.abs(s.max - s.min)) * 100 + '%';
    }
   }
   else {
    this.setColoredRange();
    if (s.isVertical) {
     this.getThumbFrom().style.top = (Math.abs(s.from - s.min) / Math.abs(s.max - s.min)) * 100 + '%';
    }
    else {
     this.getThumbFrom().style.left = (Math.abs(s.from - s.min) / Math.abs(s.max - s.min)) * 100 + '%';
    }
   }
  }
  else if (msg === Messages.FROM_IS_SET) {
   this.slider.setValueToLabelThumbFrom(s.from);
   this.setColoredRange();
  }
  else if (msg === Messages.TO_IS_SET) {
   this.slider.setValueToLabelThumbTo(s.to);
   this.setColoredRange();
  }
 }

 private setColoredRange() {
  if (this.settings.isRange) {
   if (this.settings.isVertical) {
    this.slider.getColoredRange().style.top = (this.getThumbFrom().getBoundingClientRect().top - 2*this.getThumbLengthInPx()) + 'px';
    this.slider.getColoredRange().style.height = (this.getThumbTo().getBoundingClientRect().top - this.getThumbFrom().getBoundingClientRect().top + this.getThumbLengthInPx()/2) + 'px';
   }
   else {
    this.slider.getColoredRange().style.left = (this.getThumbFrom().getBoundingClientRect().left - 1.2 * this.getThumbLengthInPx()) + 'px';
    this.slider.getColoredRange().style.width = (this.getThumbTo().getBoundingClientRect().left - this.getThumbFrom().getBoundingClientRect().left - this.getThumbLengthInPx() / 2) + 'px';
   }
  }
  else {
   if (this.settings.isVertical) {
    this.slider.getColoredRange().style.height = (this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbLengthInPx() / 2)) + 'px';
   }
   else {
    this.slider.getColoredRange().style.width = (this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbLengthInPx() / 2)) + 'px';
   }
  }
 }
 private mouseFromHandler(e: MouseEvent) {
  e.preventDefault();
  if (this.settings.isVertical) {
   let shiftY = e.clientY - this.getThumbFrom().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.getRange();
   let that = this;

   function onMouseMove(event: MouseEvent) {
    let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    if (newTop < - that.getThumbLengthInPx() / 2) {
     newTop = - that.getThumbLengthInPx() / 2;
    }
    let bottom = that.getSliderLengthInPx() - that.getThumbLengthInPx() / 2;
    if (that.settings.isRange) {
     let toPos = that.getThumbTo().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top - that.getThumbLengthInPx() / 4);
     bottom = toPos;
    }
    if (newTop > bottom) {
     newTop = bottom;
    }
    that.getThumbFrom().style.top = that.convertFromPxToPercent(newTop) + '%';
    that.notifyObservers(Messages.FROM_IS_SET, { from: that.convertFromPxToValue(newTop), min: that.settings.min, max: that.settings.max });
    that.setColoredRange();
   }

   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
  else {
   let shiftX = e.clientX - this.getThumbFrom().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.getRange();
   let that = this;
   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    if (newLeft < -that.getThumbFrom().offsetWidth / 2) {
     newLeft = -that.getThumbFrom().offsetWidth / 2;
    }
    let rightEdge = that.getSliderLengthInPx() - that.getThumbFrom().offsetWidth / 2;
    if (that.settings.isRange) {
     let toPos = that.getThumbTo().getBoundingClientRect().left - (that.getRange().getBoundingClientRect().left - that.getThumbLengthInPx() / 4);
     rightEdge = toPos;
    }
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    that.getThumbFrom().style.left = that.convertFromPxToPercent(newLeft) + '%';
    that.notifyObservers(Messages.FROM_IS_SET, { from: that.convertFromPxToValue(newLeft), min: that.settings.min, max: that.settings.max });
    that.setColoredRange();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }

 mouseToHandler(e: MouseEvent) {
  e.preventDefault();
  if (this.settings.isVertical) {
   let shiftY = e.clientY - this.getThumbTo().getBoundingClientRect().top;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.getRange();
   let thumb = this.getThumbTo();
   let that = this;

   function onMouseMove(event: MouseEvent) {
    let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
    let fromPos = that.getThumbFrom().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top - that.getThumbLengthInPx() / 2);
    if (newTop < fromPos) {
     newTop = fromPos;
    }
    let bottom = that.getSliderLengthInPx() - that.getThumbFrom().offsetWidth / 2;;
    if (newTop > bottom) {
     newTop = bottom;
    }
    that.getThumbTo().style.top = that.convertFromPxToPercent(newTop) + '%';
    that.notifyObservers(Messages.TO_IS_SET, { from: 0, to: that.convertFromPxToValue(newTop), min: that.settings.min, max: that.settings.max });
    that.setColoredRange();
   }

   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
  else {
   let shiftX = e.clientX - this.getThumbTo().getBoundingClientRect().left;
   document.addEventListener('mousemove', onMouseMove);
   document.addEventListener('mouseup', onMouseUp);
   let sliderRange = this.getRange();
   let that = this;
   function onMouseMove(e: MouseEvent) {
    let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
    let fromPos = that.getThumbFrom().getBoundingClientRect().left - (that.getRange().getBoundingClientRect().left - that.getThumbLengthInPx() / 2);
    if (newLeft < fromPos) {
     newLeft = fromPos;
    }
    let rightEdge = that.getSliderLengthInPx() - that.getThumbFrom().offsetWidth / 2;;
    if (newLeft > rightEdge) {
     newLeft = rightEdge;
    }
    that.getThumbTo().style.left = that.convertFromPxToPercent(newLeft) + '%';
    that.notifyObservers(Messages.TO_IS_SET, { from: 0, to: that.convertFromPxToValue(newLeft), min: that.settings.min, max: that.settings.max });
    that.setColoredRange();
   }
   function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
   }
  }
 }
 // mouseRangeHandler(e: MouseEvent) {
 //  if (this.settings.isVertical) {
 //   if (this.settings.isRange) {
 //    let shiftY = e.clientY - this.getRange().getBoundingClientRect().top;
 //    if (shiftY < this.model.getFromInPx()) {
 //     // this.model.setFromInPx(shiftY);
 //     // this.setValueToThumb();
 //     // this.view.refreshView(Messages.FROM_IN_PX_IS_SET, this.model.getSettings());
 //     //todo
 //    }
 //    else if (shiftY > this.model.getToInPx()) {
 //     // this.model.setToInPx(shiftY);
 //     // this.setValueToThumb();
 //     // this.view.refreshView(Messages.TO_IN_PX_IS_SET, this.model.getSettings());
 //     //todo
 //    }
 //    else if (shiftY >= this.model.getFromInPx() && shiftY <= this.model.getToInPx()) {
 //     let pivot = (this.model.getToInPx() - this.model.getFromInPx());
 //     if (shiftY < pivot) {
 //      // this.model.setFromInPx(shiftY);
 //      // this.setValueToThumb();
 //      // this.view.refreshView(Messages.FROM_IN_PX_IS_SET, this.model.getSettings());
 //      //todo
 //     }
 //     else if (shiftY >= pivot) {
 //      // this.model.setToInPx(shiftY);
 //      // this.setValueToThumb();
 //      // this.view.refreshView(Messages.TO_IN_PX_IS_SET, this.model.getSettings());
 //      //todo
 //     }
 //    }
 //   }
 //   else {
 //    let shiftY = e.clientY - this.view.getRange().getBoundingClientRect().top;
 //    // this.model.setFromInPx(shiftY);
 //    // this.setValueToThumb();
 //    // this.view.refreshView(Messages.FROM_IN_PX_IS_SET, this.model.getSettings());
 //    //todo
 //   }
 //  } else {
 //   let shiftX = e.clientX - this.view.getRange().getBoundingClientRect().left;
 //   if (this.settings.isRange) {
 //    if (shiftX < this.model.getFromInPx()) {
 //     // this.model.setFromInPx(shiftX);
 //     // this.setValueToThumb();
 //     // this.view.refreshView(Messages.FROM_IN_PX_IS_SET, this.model.getSettings());
 //     //todo
 //    }
 //    else if (shiftX > this.model.getToInPx()) {
 //     // this.model.setToInPx(shiftX);
 //     // this.setValueToThumb();
 //     // this.view.refreshView(Messages.TO_IN_PX_IS_SET, this.model.getSettings());
 //     //todo
 //    }
 //    else if (shiftX >= this.model.getFromInPx() && shiftX <= this.model.getToInPx()) {
 //     let pivot = (this.model.getToInPx() - this.model.getFromInPx());
 //     if (shiftX < pivot) {
 //      // this.model.setFromInPx(shiftX);
 //      // this.setValueToThumb();
 //      // this.view.refreshView(Messages.FROM_IN_PX_IS_SET, this.model.getSettings());
 //      //todo
 //     }
 //     else if (shiftX >= pivot) {
 //      // this.model.setToInPx(shiftX);
 //      // this.setValueToThumb();
 //      // this.view.refreshView(Messages.TO_IN_PX_IS_SET, this.model.getSettings());
 //      //todo
 //     }
 //    }
 //   }
 //   else {
 //    // this.model.setFromInPx(shiftX);
 //    // this.setValueToThumb();
 //    // this.view.refreshView(Messages.FROM_IN_PX_IS_SET, this.model.getSettings());
 //    //todo
 //   }
 //  }
 // }
 private convertFromPxToValue(valueInPx: number) {
  if (valueInPx < 0) valueInPx = 0
  if (valueInPx > this.getSliderLengthInPx() + this.getThumbLengthInPx() / 2) valueInPx = this.getSliderLengthInPx() + this.getThumbLengthInPx() / 2;
  if (this.settings.isVertical) {
   return +((valueInPx / (this.getSliderLengthInPx() - this.getThumbLengthInPx() / 2)) * Math.abs(this.settings.max - this.settings.min) + this.settings.min).toFixed(Utils.numDigitsAfterDecimal(this.settings.step));
  }
  else {
   return +((valueInPx / (this.getSliderLengthInPx() - this.getThumbLengthInPx() / 2)) * Math.abs(this.settings.max - this.settings.min) + this.settings.min).toFixed(Utils.numDigitsAfterDecimal(this.settings.step));
  }
 }
 private convertFromPxToPercent(valueInPX: number) {
  return (valueInPX / this.getSliderLengthInPx()) * 100;
 }

 private convertFromValueToPercent(value: number): number {
  return (100 / Math.abs(this.settings.max - this.settings.min)) * (Math.abs(value - this.settings.min));
 }
 private convertFromValueToPx(value: number) {
  return (this.getSliderLengthInPx() / Math.abs(this.settings.max - this.settings.min)) * (Math.abs(value - this.settings.min));
 }
 setThumbToValue(type: string) {
  if (type === 'thumbFrom') {
   if (this.settings.isVertical) {
    this.getThumbFrom().style.top = this.convertFromValueToPercent(this.settings.from) + '%';
   }
   else {
    this.getThumbFrom().style.left = this.convertFromValueToPercent(this.settings.from) + '%';
   }
  }
  else {
   if (this.settings.isVertical) {
    this.getThumbTo().style.top = this.convertFromValueToPercent
     (this.settings.to) + '%';
   }
   else {
    this.getThumbTo().style.left = this.convertFromValueToPercent
     (this.settings.to) + '%';
   }
  }
 }
}