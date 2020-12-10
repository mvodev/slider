import { ISettings } from '../model/ISettings';
import { Slider } from './modules/Slider';
import { Messages } from '../utils/Messages';
import { EventObservable } from '../observers/EventObservable';
export class View extends EventObservable {
 private slider: Slider;
 private settings: ISettings;
 private rootElem: HTMLDivElement;
 private numberOfMarking: number = 10;
 constructor(settings: ISettings, root: HTMLInputElement,) {
  super();
  this.settings = settings;
  this.rootElem = root;
  this.slider = new Slider(this.rootElem, this.settings, this.numberOfMarking);
 }
 render() {
  this.slider.render();
  if (this.settings.hideThumbLabel) {
   this.slider.getThumbLabelFrom().hideLabel();
  }
  if (this.settings.isVertical) {
   this.slider.setVertical();
  }
 }
 getRangeLabel() {
  return this.slider.getRangeLabel();
 }
 getSliderLengthInPx() {
  if (this.settings.isVertical) {
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
 refreshView(msg: Messages, s: ISettings) {
  if (msg === Messages.INIT || msg === Messages.UPDATE) {
   this.slider.setMinRange(s.min);
   this.slider.setMaxRange(s.max);
   this.slider.setValueToLabelThumbFrom(s.from);
   if (s.isRange) {
    this.slider.setValueToLabelThumbTo(s.to);
    if (s.isVertical) {
     this.getThumbTo().style.top = (s.toInPx / this.getRange().clientHeight) * 100 + '%';
     this.getThumbFrom().style.top = (s.fromInPx / this.getRange().clientHeight) * 100 + '%';
    }
    else {

     this.getThumbTo().style.left = (s.toInPx / this.getRange().clientWidth) * 100 + '%';
     this.getThumbFrom().style.left = (s.fromInPx / this.getRange().clientWidth) * 100 + '%';
    }
   }
   else {
    if (s.isVertical) {
     this.getThumbFrom().style.top = (s.fromInPx / this.getRange().offsetHeight) * 100 + '%';
    }
    else {
     this.getThumbFrom().style.left = (s.fromInPx / this.getRange().clientWidth) * 100 + '%';
    }
   }
   this.setColoredRange(msg, s);
  }
  else if (msg === Messages.FROM_IN_PX_IS_SET) {
   this.slider.setValueToLabelThumbFrom(s.from);
   if (s.isVertical) {
    this.getThumbFrom().style.top = (s.fromInPx / this.getRange().offsetHeight) * 100 + '%';
   }
   else {
    this.getThumbFrom().style.left = (s.fromInPx / this.getRange().clientWidth) * 100 + '%';
   }
   this.setColoredRange(msg, s);
  }
  else if (msg === Messages.TO_IN_PX_IS_SET) {
   this.slider.setValueToLabelThumbTo(s.to);
   if (s.isVertical) {
    this.getThumbTo().style.top = (s.toInPx / this.getRange().offsetHeight) * 100 + '%';
   }
   else {
    this.getThumbTo().style.left = (s.toInPx / this.getRange().clientWidth) * 100 + '%';
   }
   this.setColoredRange(msg, s);
  }
 }
 private setColoredRange(msg: Messages, s: ISettings) {
  let that = this;
  if (s.isRange) {
   if (s.isVertical) {
    let thumbHalf = this.slider.getThumbFrom().offsetHeight / 2;
    let height = ((s.toInPx + thumbHalf - s.fromInPx) / this.getRange().offsetHeight) * 100 + '%';
    let top = (s.fromInPx / this.getRange().offsetHeight) * 100 + '%';
    this.slider.getColoredRange().style.top = top;
    this.slider.getColoredRange().style.height = height;
   }
   else {
    let thumbHalf = this.slider.getThumbFrom().offsetWidth / 2;
    let width = ((s.toInPx + thumbHalf - s.fromInPx) / this.getRange().offsetWidth) * 100 + '%';
    let left = (s.fromInPx / this.getRange().offsetWidth) * 100 + '%';
    this.slider.getColoredRange().style.left = left;
    this.slider.getColoredRange().style.width = width;
   }
  }
  else {
   if (s.isVertical) {
    let thumbHalf = this.slider.getThumbFrom().offsetHeight / 2;
    let height = ((s.fromInPx + thumbHalf) / this.getRange().clientHeight) * 100 + '%';
    this.slider.getColoredRange().style.height = height;
   }
   else {
    let thumbHalf = this.slider.getThumbFrom().offsetWidth / 2;
    let width = ((s.fromInPx + thumbHalf) / this.getRange().clientWidth) * 100 + '%';
    this.slider.getColoredRange().style.width = width;
   }
  }
 }
}