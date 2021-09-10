import { Range } from './Range';
import { Messages } from '../../utils/Messages';
import { RangeLabel } from './RangeLabel';
import { ISettings } from '../../model/ISettings';
import { defaultSettings } from '../../model/DefaultSettings';
import { EventObservable } from '../../observers/EventObservable';
import { ClassNaming } from '../../utils/ClassNaming';
import { ThumbsPosition } from '../Interfaces/ThumbsPosition';
import { Constants } from '../../utils/Constants';

class Slider extends EventObservable{

  private range!: Range;
  private rangeLabel!: RangeLabel;
  private rootElem!: HTMLDivElement;
  private container!: HTMLDivElement;
  private settings: ISettings;
  private resPercentage: number;
  private stepInPx:number;
  private sliderLengthInPx:number;
  private moveHandlerBinded!:EventListenerOrEventListenerObject;
  private removeHandlerBinded!: EventListenerOrEventListenerObject;
  private handleRangeBinded!:EventListenerOrEventListenerObject;
  private handleRangeLabelBinded!:EventListenerOrEventListenerObject;

  constructor(rootElem: HTMLDivElement) {
    super();
    this.settings = Object.assign({},defaultSettings);
    this.rootElem = rootElem;
    this.resPercentage = 0;
    this.stepInPx = 0;
    this.sliderLengthInPx = 0;
    this.initSliderComponents();
  }
  
  render(settings:string) :void{
    this.settings = Object.assign(this.settings,JSON.parse(settings));
    this.container.classList.add(ClassNaming.ROOT);
    this.container.appendChild(this.range.getRange());
    this.range.render(settings);
    this.rangeLabel.render(JSON.parse(settings));
    this.container.appendChild(this.rangeLabel.getRangeLabel());
    this.rootElem.appendChild(this.container);
    
    if (this.settings.hideThumbLabel) {
      this.range.hideLabel();
    }
    else{
      this.range.showLabel();
    }
    if (this.settings.isVertical) {
      this.setVertical();
    }
    else {
      this.setHorizontal();
    }
    this.handleRangeBinded = this.handleRange.bind(this, 'range');
    this.handleRangeLabelBinded = this.handleRange.bind(this, 'rangeLabel');
    this.bindEvents();
    this.stepInPx = this.getSliderLengthInPx() / (Math.abs((this.settings.max - this.settings.min) / this.settings.step));
    this.sliderLengthInPx = this.getSliderLengthInPx();
    this.range.setValueToLabelThumbFrom(this.settings.from);
    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from),this.settings.isVertical);
    if (this.settings.isRange) {
      this.range.setValueToLabelThumbTo(this.settings.to);
      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);
    }
    this.setColoredRange();
  }

  private convertFromValueToPercent(value: number): number {
    return (((100 - this.getThumbWidthInPercentage()) / Math.abs(this.settings.max - this.settings.min)) * (Math.abs(value - this.settings.min)));
  }

  private initSliderComponents() {
    this.range = new Range(this.settings);
    this.rangeLabel = new RangeLabel(this.settings);
    this.container = document.createElement('div');
  }

  private bindEvents(): void {
    this.getRangeLabel().addEventListener('mousedown', this.handleRangeLabelBinded);
    this.getRange().addEventListener('mousedown', this.handleRangeBinded);
  }

  private bindExtraListeners(){
    this.moveHandlerBinded = this.moveHandler.bind(this);
    this.removeHandlerBinded = this.removeHandler.bind(this);
    this.getRange().addEventListener('mousemove', this.moveHandlerBinded);
    document.addEventListener('mouseup', this.removeHandlerBinded);
  }

  private unbindEvents(){
    this.removeHandler();
    this.getRangeLabel().removeEventListener('mousedown', this.handleRangeLabelBinded);
    this.getRange().removeEventListener('mousedown', this.handleRangeBinded);
  }

  private handleRange(type:string,e: Event) {
    if (e instanceof MouseEvent){
      let clickedPos: number;
      const pos = this.getElemsPos();
      let fromPos = pos.fromPos;
      const toPos = pos.toPos;
      const bottom = pos.bottom;
      if (this.settings.isVertical) {
        clickedPos = e.clientY - this.getRange().getBoundingClientRect().top;
      }
      else {
        clickedPos = e.clientX - this.getRange().getBoundingClientRect().left;
      }
      if (clickedPos > bottom) {
        clickedPos = bottom;
      }
      if (this.settings.isRange) {
        if (fromPos > toPos) {
          fromPos = toPos;
          this.dispatchEvent(clickedPos, 'thumbTo');
        }
      }
      if (!this.settings.isRange) {
        this.dispatchEvent(clickedPos, 'thumbFrom');
      }
      else {
        if (clickedPos > toPos) {
          this.dispatchEvent(clickedPos, 'thumbTo');
        }
        if (clickedPos < fromPos) {
          this.dispatchEvent(clickedPos, 'thumbFrom');

        }
        else if (clickedPos > fromPos && clickedPos < toPos) {
          const pivot = (toPos - fromPos) / 2;
          if (clickedPos < (pivot + fromPos) && (clickedPos < toPos)) {
            this.dispatchEvent(clickedPos, 'thumbFrom');
          }
          else if (clickedPos > (pivot + fromPos) && (clickedPos < toPos)) {
            this.dispatchEvent(clickedPos, 'thumbTo')
          }
        }
      }
      if(type==='range'){
        this.bindExtraListeners();
      }
    }
  }

  private moveHandler(e: Event) {
    let newPos:number;
    const pos = this.getElemsPos();
    const fromPos = pos.fromPos;
    const toPos = pos.toPos;
    const bottom = pos.bottom;
    let thumbType = '';
    if(e instanceof MouseEvent){
      if(this.settings.isVertical){
        newPos = e.clientY - this.getRange().getBoundingClientRect().top;
      }
      else{
        newPos = e.clientX - this.getRange().getBoundingClientRect().left;
      }
      if(!this.settings.isRange){
        if(newPos<0){
          newPos = 0;
        }
        if(newPos>bottom){
          newPos = bottom;
        }
        thumbType = Constants.THUMB_FROM;
        this.dispatchEvent(newPos, thumbType);
      }
      else{
        if(newPos<fromPos) thumbType = Constants.THUMB_FROM;
        if (newPos > toPos) thumbType = Constants.THUMB_TO;
        if(newPos>=fromPos&&newPos<=toPos){
          const pivot = (toPos - fromPos) / 2;
          if (newPos < (pivot + fromPos)) thumbType = Constants.THUMB_FROM;
          else if (newPos >= (pivot + fromPos)) thumbType = Constants.THUMB_TO;
        }
        if(thumbType===Constants.THUMB_FROM){
          if(newPos<0) newPos = 0;
          if(newPos>toPos) newPos = toPos;
        }
        if(thumbType===Constants.THUMB_TO){
          if(newPos<fromPos) newPos = fromPos;
          if(newPos>bottom) newPos = bottom;
        }
        if (Math.abs(newPos % this.stepInPx) <= 0.2 * this.stepInPx) {
          this.dispatchEvent(newPos, thumbType);
        }
      }
    }
  }

  private removeHandler() {
    this.getRange().removeEventListener('mousemove', this.moveHandlerBinded);
    document.removeEventListener('mouseup', this.removeHandlerBinded);
  }

  private convertFromPxToPercent(valueInPX: number) {
    return (valueInPX / this.sliderLengthInPx) * 100;
  }

  getThumbWidthInPercentage() :number{
    if (this.settings.isVertical) {
      return ((this.getThumbFrom().offsetHeight / this.sliderLengthInPx) * 100);
    }
    else {
      return ((this.getThumbFrom().offsetWidth / this.sliderLengthInPx) * 100);
    }
  }

  private getElemsPos():ThumbsPosition{
    let fromPos:number,toPos:number;
    const bottom = this.sliderLengthInPx - this.getThumbWidthInPx();
    if (this.settings.isVertical) {
      fromPos = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top);
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top) : bottom;
    }
    else {
      fromPos = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left);
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left) : bottom;
    }
    return {fromPos,toPos,bottom}
  }

  private getSliderLengthInPx() :number{
    if (this.settings.isVertical) {
      return this.getRange().offsetHeight;
    }
    else {
      return this.getRange().offsetWidth;
    }
  }

  private dispatchEvent(shift: number, type: string) {
    this.resPercentage = this.convertFromPxToPercent(shift);
    if (type === "thumbFrom") {
      this.range.setThumbPositionFrom(this.resPercentage,this.settings.isVertical);
      this.notifyObservers(Messages.SET_FROM, JSON.stringify({ from: this.resPercentage }),0);
    }
    else {
      this.range.setThumbPositionTo(this.resPercentage,this.settings.isVertical);
      this.notifyObservers(Messages.SET_TO, JSON.stringify({ to: this.resPercentage }),0);
    }
    this.setColoredRange();
  }

  getRange(): HTMLDivElement {
    return this.range.getRange();
  }

  setValueToLabelThumbFrom(value: number): void {
    this.range.setValueToLabelThumbFrom(value);
  }

  setValueToLabelThumbTo(value: number): void {
    this.range.setValueToLabelThumbTo(value);
  }

  getRangeLabel(): HTMLDivElement {
    return this.rangeLabel.getRangeLabel();
  }

  getThumbFrom(): HTMLDivElement {
    return this.range.getThumbFrom();
  }

  private getThumbTo(): HTMLDivElement {
    return this.range.getThumbTo();
  }

  private setVertical(): void {
    this.unbindEvents()
    this.container.classList.add(ClassNaming.SLIDER_IS_VERTICAL);
    this.range.setVertical();
    this.rangeLabel.setVertical();
  }

  private setHorizontal(): void {
    this.unbindEvents();
    this.container.classList.remove(ClassNaming.SLIDER_IS_VERTICAL);
    this.range.setHorizontal();
    this.rangeLabel.setHorizontal();
  }

  private setColoredRange(): void {
    this.range.setColoredRange(this.getThumbWidthInPercentage());
  }

  private getThumbWidthInPx(): number {
    if(this.settings.isVertical){
      return this.getThumbFrom().offsetHeight;
    }
    return this.getThumbFrom().offsetWidth;
  }

  getThumbLabelFrom():HTMLElement{
    return this.range.getThumbFrom();
  }

  getThumbLabelTo():HTMLElement{
    return this.range.getThumbTo();
  }

}
export {Slider}