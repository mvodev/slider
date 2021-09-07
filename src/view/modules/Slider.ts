import { Range } from './Range';
import { Messages } from '../../utils/Messages';

import { RangeLabel } from './RangeLabel';
import { IViewSettings } from '../../model/IViewSettings';
import { defaultSettings } from '../../model/DefaultSettings';
import { EventObservable } from '../../observers/EventObservable';
import { ClassNaming } from '../../utils/ClassNaming';

class Slider extends EventObservable{

private range!: Range;
private rangeLabel!: RangeLabel;
private rootElem!: HTMLDivElement;
private container!: HTMLDivElement;
private viewSettings: IViewSettings;
private resPercentage: number;
private stepInPx:number;
private sliderLengthInPx:number;

constructor(rootElem: HTMLDivElement) {
  super();
  this.viewSettings = Object.assign({},defaultSettings);
  this.rootElem = rootElem;
  this.resPercentage = 0;
  this.stepInPx = 0;
  this.sliderLengthInPx = 0;
  this.initSliderComponents();
}

render(settings:string) :void{
  this.viewSettings = Object.assign(this.viewSettings,JSON.parse(settings));
  this.container.classList.add(ClassNaming.ROOT);
  this.container.appendChild(this.range.getRange());
  this.range.render(settings);
  this.rangeLabel.render(JSON.parse(settings));
  this.container.appendChild(this.rangeLabel.getRangeLabel());
  this.rootElem.appendChild(this.container);
  
  if (this.viewSettings.hideThumbLabel) {
    this.range.hideLabel();
  }
  else{
    this.range.showLabel();
  }
  if (this.viewSettings.isVertical) {
    this.setVertical();
  }
  else {
    this.setHorizontal();
  }
  this.bindEvents();
  this.stepInPx = this.getSliderLengthInPx() / (Math.abs((this.viewSettings.max - this.viewSettings.min) / this.viewSettings.step));
  this.sliderLengthInPx = this.getSliderLengthInPx();
  this.range.setValueToLabelThumbFrom(this.viewSettings.from);
  this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.viewSettings.from),this.viewSettings.isVertical);
  if (this.viewSettings.isRange) {
    this.range.setValueToLabelThumbTo(this.viewSettings.to);
    this.range.setThumbPositionTo(this.convertFromValueToPercent(this.viewSettings.to), this.viewSettings.isVertical);
  }
  this.setColoredRange();
}

private convertFromValueToPercent(value: number): number {
  return (((100 - this.getThumbWidthInPercentage()) / Math.abs(this.viewSettings.max - this.viewSettings.min)) * (Math.abs(value - this.viewSettings.min)));
}

private initSliderComponents() {
  this.range = new Range(this.viewSettings);
  this.rangeLabel = new RangeLabel(this.viewSettings);
  this.container = document.createElement('div');
}

private bindEvents(): void {
  this.getRangeLabel().addEventListener('mousedown', this.handleRangeLabel.bind(this));
  this.getThumbFrom().addEventListener('mousedown', this.handleThumb.bind(this, "thumbFrom"));
  if (this.viewSettings.isRange) {
    this.getThumbTo().addEventListener('mousedown', this.handleThumb.bind(this, "thumbTo"));
  }
}

getThumbFrom():HTMLDivElement{
  return this.range.getThumbFrom();
}

getThumbTo():HTMLDivElement{
  return this.range.getThumbTo();
}

setVertical():void {
  this.container.classList.add(ClassNaming.SLIDER_IS_VERTICAL);
  this.range.setVertical();
  this.rangeLabel.setVertical();
  
}

setHorizontal():void{
  this.container.classList.remove(ClassNaming.SLIDER_IS_VERTICAL);
  this.range.setHorizontal();
  this.rangeLabel.setHorizontal();
  
}

setColoredRange(): void {
  this.range.setColoredRange(this.getThumbWidthInPercentage());
}

private  getThumbWidthInPx() :number{
  return this.getThumbFrom().offsetWidth;
}

private handleThumb(thumbType: string, e: MouseEvent): void {
  e.preventDefault();
  let targetElem: HTMLDivElement = this.getThumbFrom();
  if (thumbType === "thumbTo") {
    targetElem = this.getThumbTo();
  }
  let shift: number;
  if (this.viewSettings.isVertical) {
    shift = e.clientY - targetElem.getBoundingClientRect().top;
  }
  else{
    shift = e.clientX - targetElem.getBoundingClientRect().left;
  }
  if (this.viewSettings.isVertical) {   
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
   // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
   // eslint-disable-next-line no-inner-declarations
    function onMouseMove(event: MouseEvent) {
      let newPos = event.clientY - shift - that.getRange().getBoundingClientRect().top;
      if (thumbType === "thumbTo") {
        const fromPos = that.getThumbFrom().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top);
        if (newPos < fromPos) {
          newPos = fromPos;
        }
      }
      else {
        if (newPos < 0) {
          newPos = 0;
        }
      }
      let bottom = that.sliderLengthInPx -that.getThumbWidthInPx();
      if (that.viewSettings.isRange) {
        const toPos = that.getThumbTo().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top);
        if (thumbType === "thumbFrom") {
          bottom = toPos;
        }
      }
      if (newPos > bottom) {
        newPos = bottom;
      }
      if (Math.abs(newPos % that.stepInPx) <= 0.2 * that.stepInPx){
        that.dispatchEvent(newPos, thumbType);
      }
      
    }
   // eslint-disable-next-line no-inner-declarations
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
    }
    else {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      //eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      //eslint-disable-next-line no-inner-declarations
      function onMouseMove(e: MouseEvent) {
        let newPos = e.clientX - shift - that.getRange().getBoundingClientRect().left;
        if (thumbType === "thumbTo") {
          const fromPos = that.getThumbFrom().getBoundingClientRect().left - that.getRange().getBoundingClientRect().left;
          if (newPos <= fromPos) {
            newPos = fromPos;
          }
        }
        else {
          if (newPos < 0) {
          newPos = 0;
          }
        }
        let rightEdge = that.sliderLengthInPx - that.getThumbWidthInPx();
        if (that.viewSettings.isRange) {
          const toPos = that.getThumbTo().getBoundingClientRect().left
                        - that.getRange().getBoundingClientRect().left;
          if (thumbType === "thumbFrom") {
            rightEdge = toPos;
          }
        }
        if (newPos >= rightEdge) {
          newPos = rightEdge;
        }
        if (Math.abs(newPos % that.stepInPx) <= 0.2 * that.stepInPx) {
          that.dispatchEvent(newPos, thumbType);
        }
      }
    // eslint-disable-next-line no-inner-declarations
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
  }
  this.setColoredRange();
}

private handleRangeLabel(e: MouseEvent) {
  let shift: number, fromPos: number;
  if (this.viewSettings.isVertical) {
    shift = e.clientY - this.getRange().getBoundingClientRect().top;
    fromPos = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx()/2);
  }
  else{
    shift = e.clientX - this.getRange().getBoundingClientRect().left;
    fromPos = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2);
  }
  if (this.viewSettings.isVertical) {
    if (this.viewSettings.isRange) {
      const toPos = this.getThumbTo().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top );
    if (shift < fromPos) {
      this.dispatchEvent(shift, "thumbFrom");
    }
    else if (shift > toPos) {
      this.dispatchEvent(shift, "thumbTo");
    }
    else if (shift >= fromPos && shift <= toPos) {
      const pivot = (toPos - fromPos)/2;
      if (shift < pivot+fromPos) {
        this.dispatchEvent(shift, "thumbFrom");
      }
      else if (shift >= pivot+fromPos) {
        this.dispatchEvent(shift, "thumbTo");
      }
    }
    }
    else {
      if (shift < fromPos) {
        this.dispatchEvent(shift, "thumbFrom");
      }
      else {   //vertical mode single thumb 
        this.dispatchEvent(shift, "thumbFrom");
      }
    }
  }
  else {
    if (this.viewSettings.isRange) {
      const toPos = this.getThumbTo().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left);
    if (shift < fromPos) {
      this.dispatchEvent(shift, "thumbFrom");
    }
    else if (shift > toPos) {
      this.dispatchEvent(shift, "thumbTo");
    }
    else if (shift >= fromPos && shift <= toPos) {
      const pivot = (toPos - fromPos)/2;
      if (shift < pivot+fromPos) {
        this.dispatchEvent(shift, "thumbFrom");
      }
      else if (shift >= pivot+fromPos) {
        this.dispatchEvent(shift, "thumbTo");
      }
    }
    }
    else { //horizontal mode single thumb
      this.dispatchEvent(shift, "thumbFrom");
    }
  }
  this.setColoredRange();
}

private convertFromPxToPercent(valueInPX: number) {
  return (valueInPX / this.sliderLengthInPx) * 100;
}

getThumbWidthInPercentage() :number{
  if (this.viewSettings.isVertical) {
    return ((this.getThumbFrom().offsetHeight / this.sliderLengthInPx) * 100);
  }
  else {
    return ((this.getThumbFrom().offsetWidth / this.sliderLengthInPx) * 100);
  }
}

private getSliderLengthInPx() :number{
  if (this.viewSettings.isVertical) {
    return this.getRange().offsetHeight;
  }
  else {
    return this.getRange().offsetWidth;
  }
}

private dispatchEvent(shift: number, type: string) {

  this.resPercentage = this.convertFromPxToPercent(shift);
  if (type === "thumbFrom") {
    this.range.setThumbPositionFrom(this.resPercentage,this.viewSettings.isVertical);
    this.notifyObservers(Messages.SET_FROM, JSON.stringify({ from: this.resPercentage }),0);
  }
  else {
    this.range.setThumbPositionTo(this.resPercentage,this.viewSettings.isVertical);
    this.notifyObservers(Messages.SET_TO, JSON.stringify({ to: this.resPercentage }),0);
  }
  this.setColoredRange();
}

getRange(): HTMLDivElement {
  return this.range.getRange();
}

hideLabel():void{
  this.range.hideLabel();
}

showLabel():void{
  this.range.showLabel();
}

// getThumbLabelFrom(): ThumbLabel {
//   return this.thumbLabelFrom;
// }
// getThumbLabelTo(): ThumbLabel {
//   return this.thumbLabelTo;
// }

setValueToLabelThumbFrom(value: number): void {
  this.range.setValueToLabelThumbFrom(value);
}

setValueToLabelThumbTo(value: number): void {
  this.range.setValueToLabelThumbTo(value);
}

getRangeLabel(): HTMLDivElement {
  return this.rangeLabel.getRangeLabel();
}

}
export {Slider}