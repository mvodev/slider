import { Range } from './Range';
import { Messages } from '../../utils/Messages';
import { RangeLabel } from './RangeLabel';
import { ISettings } from '../../model/ISettings';
import { defaultSettings } from '../../model/defaultSettings';
import { EventObservable } from '../../observers/EventObservable';
import { ClassNaming } from '../../utils/ClassNaming';
import { ThumbsPosition } from '../Interfaces/ThumbsPosition';
import { Constants } from '../../utils/Constants';
import { Utils } from '../../utils/Utils';
import { ErrorMessage } from '../../error-message/ErrorMessage';

class Slider extends EventObservable{

  private range!: Range;
  private rangeLabel!: RangeLabel;
  private rootElem!: HTMLDivElement;
  private container!: HTMLDivElement;
  private settings: ISettings;
  private resPercentage: number;
  private stepInPx:number;
  private threshold:number;
  private sliderLengthInPx:number;
  private handleThumbMoveBinded!:EventListenerOrEventListenerObject;
  private removeHandlerBinded!: EventListenerOrEventListenerObject;
  private handleRangeBinded!:EventListenerOrEventListenerObject;
  private handleRangeLabelBinded!:EventListenerOrEventListenerObject;

  constructor(rootElem: HTMLDivElement|null) {
    super();
    this.settings = Object.assign({},defaultSettings);
    if(rootElem){
      this.rootElem = rootElem;
    }
    else new ErrorMessage('root elem of Slider is null!');
    
    this.resPercentage = 0;
    this.stepInPx = 0;
    this.threshold = 0;
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
    this.bindEvents();
    this.stepInPx = this.getSliderLengthInPx() / (Math.abs((this.settings.max - this.settings.min) / this.settings.step));
    this.threshold = 0.2*this.stepInPx;
    this.sliderLengthInPx = this.getSliderLengthInPx();
    this.range.setValueToLabelThumbFrom(this.settings.from);
    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from),this.settings.isVertical);
    if (this.settings.isRange) {
      this.range.setValueToLabelThumbTo(this.settings.to);
      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);
    }
    this.setLabelsPosition();
    this.setColoredRange();
  }

  private initSliderComponents() {
    this.range = new Range(this.settings);
    this.rangeLabel = new RangeLabel(this.settings);
    this.container = document.createElement('div');
  }

  private roundWithStep(value: number): number {
    let del = 1;
    if (this.settings.step != 0) {
      del = 1.0 / this.settings.step;
    }
    const result = Math.round(+value.toFixed(Utils.numDigitsAfterDecimal(this.settings.step)) * del) / del;
    return result;
  }

  private getLabels():HTMLElement[]{
    return this.rangeLabel.getLabels();
  }

  private setLabelsPosition(): void {
    const diapason = Math.abs(this.settings.max - this.settings.min);
    const step = diapason / (Constants.NUMBER_OF_LABELS + 1);
    let initialValue = this.settings.min;
    
    for (let i = 0; i < this.getLabels().length; i++) {
      if(!this.settings.isVertical){
        if (i === 0) {
          this.getLabels()[i].setAttribute('value', this.settings.min.toString());
          this.getLabels()[i].style.left = (this.getThumbWidthInPercentage() / 2 - this.getLabels()[i].offsetWidth / this.getSliderLengthInPx() * 100 / 2) + '%';
          this.getLabels()[i].style.top = '';
        }
        else if (i === this.getLabels().length - 1) {
          this.getLabels()[i].setAttribute('value', this.settings.max.toString());
          this.getLabels()[i].style.left = (100 - ((this.getLabels()[i].offsetWidth / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx()) * 100) + '%';
          this.getLabels()[i].style.top = '';
        }
        else {
          initialValue += step;
          this.getLabels()[i].setAttribute('value', this.roundWithStep(initialValue).toString());
          this.getLabels()[i].innerText = this.roundWithStep(initialValue).toString();
          this.getLabels()[i].style.left = (this.convertFromValueToPercent(this.roundWithStep(initialValue)) + this.getThumbWidthInPercentage() / 2 - (this.getLabels()[i].offsetWidth / this.getSliderLengthInPx() * 100 / 2)) + '%';
          this.getLabels()[i].style.top = '';
        }
      }
      else{
        if (i === 0) {
          this.getLabels()[i].setAttribute('value', this.settings.min.toString());
          this.getLabels()[i].style.top = (this.getThumbWidthInPercentage() / 2 - this.getLabels()[i].offsetHeight/ this.getSliderLengthInPx() * 100 / 2) + '%';
          this.getLabels()[i].style.left = '';
        }
        else if (i === this.getLabels().length - 1) {
          this.getLabels()[i].setAttribute('value', this.settings.max.toString());
          this.getLabels()[i].style.top = (100 - ((this.getLabels()[i].offsetHeight / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx()) * 100) + '%';
          this.getLabels()[i].style.left = '';
        }
        else {
          initialValue += step;
          this.getLabels()[i].setAttribute('value', this.roundWithStep(initialValue).toString());
          this.getLabels()[i].innerText = this.roundWithStep(initialValue).toString();
          this.getLabels()[i].style.top = (this.convertFromValueToPercent(this.roundWithStep(initialValue)) + this.getThumbWidthInPercentage() / 2 - (this.getLabels()[i].offsetHeight / this.getSliderLengthInPx() * 100 / 2)) + '%';
          this.getLabels()[i].style.left = '';
        }
      }
    }
  }

  private bindEvents(): void {
    this.handleRangeBinded = this.handleRange.bind(this, 'range');
    this.handleRangeLabelBinded = this.handleRangeLabel.bind(this);
    this.getRange().addEventListener('mousedown', this.handleRangeBinded);
    this.rangeLabel.getLabels().forEach(elem=>elem.addEventListener('click',this.handleRangeLabelBinded));
  }

  private bindExtraListeners(){
    this.handleThumbMoveBinded = this.handleThumbMove.bind(this);
    this.removeHandlerBinded = this.removeHandler.bind(this);
    document.addEventListener('mousemove', this.handleThumbMoveBinded);
    document.addEventListener('mouseup', this.removeHandlerBinded);
  }

  private unbindEvents() {
    this.removeHandler();
    this.getRangeLabel().removeEventListener('mousedown', this.handleRangeLabelBinded);
    this.getRange().removeEventListener('mousedown', this.handleRangeBinded);
  }

  private handleRangeLabel(e:Event){
    if(e.target instanceof Element){
      if (e.target.getAttribute('value')){

        if(!this.settings.isRange){
          this.dispatchEvent(this.convertFromValueToPx(Number(e.target.getAttribute('value'))), Constants.THUMB_FROM);
        }
        else{
          if (Number(e.target.getAttribute('value')) >= this.settings.to) {
            this.dispatchEvent(this.convertFromValueToPx(Number(e.target.getAttribute('value'))), Constants.THUMB_TO);
          }
          else if (Number(e.target.getAttribute('value')) <= this.settings.from) {
            this.dispatchEvent(this.convertFromValueToPx(Number(e.target.getAttribute('value'))), Constants.THUMB_FROM);
          }
          else {
            const pivot = Math.abs(this.settings.to - this.settings.from) / 2;
            if (Number(e.target.getAttribute('value')) <= (pivot + this.settings.from)) {
              this.dispatchEvent(this.convertFromValueToPx(Number(e.target.getAttribute('value'))), Constants.THUMB_FROM);
            }
            else if (Number(e.target.getAttribute('value')) > (pivot + this.settings.from)) {
              this.dispatchEvent(this.convertFromValueToPx(Number(e.target.getAttribute('value'))), Constants.THUMB_TO);
            }
          }
        }
      } 
    }
    this.setColoredRange();
  }

  private handleRange(type:string,e: Event) {
    if (e instanceof MouseEvent){
      let clickedPos: number;
      const pos = this.getElemsPos();
      let fromPos = pos.fromPos;
      const toPos = pos.toPos;
      const bottom = pos.bottom;
      if (this.settings.isVertical) {
        clickedPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx()/2;
      }
      else {
        clickedPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;
      }
      if (clickedPos > bottom) clickedPos = bottom;
      if(clickedPos < 0) clickedPos = 0;
      if (this.settings.isRange) {
        if (fromPos > toPos) {
          fromPos = toPos;
          this.dispatchEvent(clickedPos, Constants.THUMB_FROM);
        }
      }
      if (!this.settings.isRange) {
        this.dispatchEvent(clickedPos, Constants.THUMB_FROM);
      }
      else {
        if (clickedPos > toPos) {
          this.dispatchEvent(clickedPos, Constants.THUMB_TO);
        }
        if (clickedPos < fromPos) {
          this.dispatchEvent(clickedPos, Constants.THUMB_FROM);

        }
        else if (clickedPos > fromPos && clickedPos < toPos) {
          const pivot = (toPos - fromPos) / 2;
          if (clickedPos < (pivot + fromPos) && (clickedPos < toPos)) {
            this.dispatchEvent(clickedPos, Constants.THUMB_FROM);
          }
          else if (clickedPos > (pivot + fromPos) && (clickedPos < toPos)) {
            this.dispatchEvent(clickedPos, Constants.THUMB_TO)
          }
        }
      }
      if(type==='range'){
        this.bindExtraListeners();
      }
    }
  }

  private handleThumbMove(e: Event) {
    let newPos:number;
    const pos = this.getElemsPos();
    const fromPos = pos.fromPos;
    const toPos = pos.toPos;
    const bottom = pos.bottom;
    let thumbType = '';
    if(e instanceof MouseEvent){
      if(this.settings.isVertical){
        newPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx()/2;
      }
      else{
        newPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;
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
        if (Math.abs(newPos % this.stepInPx) <= this.threshold) {
          this.dispatchEvent(newPos, thumbType);
        }
      }
    }
  }

  private removeHandler() {
    document.removeEventListener('mousemove', this.handleThumbMoveBinded);
    document.removeEventListener('mouseup', this.removeHandlerBinded);
  }

  private convertFromPxToPercent(valueInPX: number):number {
    return (valueInPX / this.sliderLengthInPx) * 100;
  }

  private convertFromValueToPx(value:number):number{
    return ((Math.abs(value - this.settings.min)) / Math.abs(this.settings.max - this.settings.min))*(this.getSliderLengthInPx()-this.getThumbWidthInPx());
  }

  private convertFromValueToPercent(value: number): number {
    return (((100 - this.getThumbWidthInPercentage()) / Math.abs(this.settings.max - this.settings.min)) * (Math.abs(value - this.settings.min)));
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
    this.settings.from = value;
  }

  setValueToLabelThumbTo(value: number): void {
    this.range.setValueToLabelThumbTo(value);
    this.settings.to = value;
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