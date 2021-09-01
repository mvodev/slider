import { Range } from './Range';
import { Messages } from '../../utils/Messages';
import { Thumb } from './Thumb';
import { ThumbLabel } from './ThumbLabel';
import { RangeLabel } from './RangeLabel';
import { ColoredRange } from './ColoredRange';
import { IViewSettings } from '../../model/IViewSettings';
import { defaultSettings } from '../../model/DefaultSettings';
import { EventObservable } from '../../observers/EventObservable';
import { ClassNaming } from '../../utils/ClassNaming';

class Slider extends EventObservable{
private thumbFrom!: Thumb;
private thumbTo!: Thumb;
private range!: Range;
private thumbLabelFrom!: ThumbLabel;
private thumbLabelTo!: ThumbLabel;
private rangeLabel!: RangeLabel;
private rootElem!: HTMLDivElement;
private container!: HTMLDivElement;
private coloredRange!: ColoredRange;
private viewSettings: IViewSettings;
private resPercentage: number;
constructor(rootElem: HTMLDivElement) {
  super();
  this.viewSettings = Object.assign({},defaultSettings);
  this.rootElem = rootElem;
  this.resPercentage = 0;
  this.initSliderComponents();
}

render(settings:string) :void{
  this.viewSettings = Object.assign(this.viewSettings,JSON.parse(settings));
  this.container.classList.add(ClassNaming.ROOT);
  this.container.appendChild(this.range.getRange());
  this.range.getRange().appendChild(this.coloredRange.getColoredRange());
  this.range.getRange().appendChild(this.thumbFrom.getThumb());
  this.thumbFrom.getThumb().appendChild(this.thumbLabelFrom.getThumbLabelContainer());
  if (this.viewSettings.isRange) {
    this.thumbTo.getThumb().appendChild(this.thumbLabelTo.getThumbLabelContainer());
    this.range.getRange().appendChild(this.thumbTo.getThumb());
  }
  this.rangeLabel.render(JSON.parse(settings));
  this.container.appendChild(this.rangeLabel.getRangeLabel());
  this.rootElem.appendChild(this.container);
  this.bindEvents();
}

private initSliderComponents() {
  this.thumbTo = new Thumb(ClassNaming.THUMB_TO);
  this.thumbLabelTo = new ThumbLabel();
  this.thumbFrom = new Thumb(ClassNaming.THUMB_FROM);
  this.thumbLabelFrom = new ThumbLabel();
  this.range = new Range();
  this.coloredRange = new ColoredRange();
  this.rangeLabel = new RangeLabel();
  this.container = document.createElement('div');
}
private bindEvents(): void {
  this.getRangeLabel().addEventListener('mousedown', this.handleRange.bind(this));
  this.getThumbFrom().addEventListener('mousedown', this.handleThumb.bind(this, "thumbFrom"));
  if (this.viewSettings.isRange) {
    this.getThumbTo().addEventListener('mousedown', this.handleThumb.bind(this, "thumbTo"));
  }
}
setVertical():void {
  this.container.classList.add(ClassNaming.SLIDER_IS_VERTICAL);
  this.range.getRange().classList.add(ClassNaming.RANGE_IS_VERTICAL);
  this.coloredRange.getColoredRange().classList.add(ClassNaming.COLORED_RANGE_IS_VERTICAL);
  this.rangeLabel.getRangeLabel().classList.add(ClassNaming.RANGE_LABEL_IS_VERTICAL);
  this.thumbLabelFrom.getThumbLabelContainer().classList.add(ClassNaming.THUMB_LABEL_IS_VERTICAL);
  if (this.viewSettings.isRange) {
    this.thumbLabelTo.getThumbLabelContainer().classList.add(ClassNaming.THUMB_LABEL_IS_VERTICAL);
  }
}

setColoredRange(): void {
  this.coloredRange.setColoredRange(
      this.viewSettings,
      this.getThumbFrom(),
      this.getThumbTo(),
      this.getThumbWidthInPercentage());
}

private  getThumbWidthInPx() :number{
  return this.getThumbFrom().offsetWidth;
}

setNumberLabels(value:number[]):void{
  this.rangeLabel.setRangeLabels(value);
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
      let bottom = that.getSliderLengthInPx() -that.getThumbWidthInPx();
      if (that.viewSettings.isRange) {
        const toPos = that.getThumbTo().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top);
        if (thumbType === "thumbFrom") {
          bottom = toPos;
        }
      }
      if (newPos > bottom) {
        newPos = bottom;
      }
      that.dispatchEvent(newPos, thumbType);
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
        let rightEdge = that.getSliderLengthInPx() - that.getThumbWidthInPx();
        if (that.viewSettings.isRange) {
          const toPos = that.getThumbTo().getBoundingClientRect().left - that.getRange().getBoundingClientRect().left;
          if (thumbType === "thumbFrom") {
            rightEdge = toPos;
          }
        }
        if (newPos >= rightEdge) {
          newPos = rightEdge;
        }
        that.dispatchEvent(newPos, thumbType);
      }
    // eslint-disable-next-line no-inner-declarations
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
  }
  this.setColoredRange();
}
private handleRange(e: MouseEvent) {
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
  return (valueInPX / this.getSliderLengthInPx()) * 100;
}
getThumbWidthInPercentage() :number{
  if (this.viewSettings.isVertical) {
    return ((this.getThumbFrom().offsetHeight / this.getSliderLengthInPx()) * 100);
  }
  else {
    return ((this.getThumbFrom().offsetWidth / this.getSliderLengthInPx()) * 100);
  }
}
private getSliderLengthInPx() {
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
    this.thumbFrom.setThumbPosition(this.resPercentage,this.viewSettings.isVertical);
    this.notifyObservers(Messages.SET_FROM, JSON.stringify({ from: this.resPercentage }),0);
  }
  else {
    this.thumbTo.setThumbPosition(this.resPercentage,this.viewSettings.isVertical);
    this.notifyObservers(Messages.SET_TO, JSON.stringify({ to: this.resPercentage }),0);
  }
  this.setColoredRange();
}
getRange(): HTMLDivElement {
  return this.range.getRange();
}
getThumbFrom(): HTMLDivElement {
  return this.thumbFrom.getThumb();
}
getThumbTo(): HTMLDivElement {
  return this.thumbTo.getThumb();
}
getThumbLabelFrom(): ThumbLabel {
  return this.thumbLabelFrom;
}
getThumbLabelTo(): ThumbLabel {
  return this.thumbLabelTo;
}
setMaxRange(value: number): void {
  this.rangeLabel.setMaxRange(value);
}
setMinRange(value: number): void {
  this.rangeLabel.setMinRange(value);
}
setValueToLabelThumbFrom(value: number): void {
  this.thumbLabelFrom.setValueToLabel(value);
}
setValueToLabelThumbTo(value: number): void {
  this.thumbLabelTo.setValueToLabel(value);
}
getRangeLabel(): HTMLDivElement {
  return this.rangeLabel.getRangeLabel();
}
}
export {Slider}