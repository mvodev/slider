import { Range } from './Range';
import { Messages } from '../../utils/Messages';
import { RangeLabel } from './RangeLabel';
import { ISettings } from '../../model/ISettings';
import { defaultSettings } from '../../model/DefaultSettings';
import { EventObservable } from '../../observers/EventObservable';
import { ClassNaming } from '../../utils/ClassNaming';


class Slider extends EventObservable{

  private range!: Range;
  private rangeLabel!: RangeLabel;
  private rootElem!: HTMLDivElement;
  private container!: HTMLDivElement;
  private settings: ISettings;
  private resPercentage: number;
  //private stepInPx:number;
  private sliderLengthInPx:number;

  constructor(rootElem: HTMLDivElement) {
    super();
    this.settings = Object.assign({},defaultSettings);
    this.rootElem = rootElem;
    this.resPercentage = 0;
    //this.stepInPx = 0;
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
    //this.stepInPx = this.getSliderLengthInPx() / (Math.abs((this.settings.max - this.settings.min) / this.settings.step));
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
    this.getRangeLabel().addEventListener('mousedown', this.handleRange.bind(this));
    this.getRange().addEventListener('mousedown', this.handleRange.bind(this));
  }

  private handleRange(e: MouseEvent) {
    
    let clickedPos: number, fromPos: number;
    let toPos:number;
    const bottom = this.sliderLengthInPx - this.getThumbWidthInPx();
    if (this.settings.isVertical) {
      clickedPos = e.clientY - this.getRange().getBoundingClientRect().top;
      fromPos = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top);
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top): bottom;
    }
    else {
      clickedPos = e.clientX - this.getRange().getBoundingClientRect().left;
      fromPos = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left);
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left) : bottom;
    }
    if (clickedPos > bottom) {
      clickedPos = bottom;
    }
    if(this.settings.isRange){
      if(fromPos>toPos){
        fromPos = toPos;
        this.dispatchEvent(clickedPos, 'thumbTo');
      }
    }
    if(!this.settings.isRange){ 
      this.dispatchEvent(clickedPos,'thumbFrom');
    }
    else{
      if(clickedPos>toPos){
        this.dispatchEvent(clickedPos, 'thumbTo');
      }
      if (clickedPos < fromPos){
          this.dispatchEvent(clickedPos, 'thumbFrom');
        
      }
      else if(clickedPos>fromPos&&clickedPos<toPos){
        const pivot = (toPos-fromPos)/2;
        if (clickedPos < (pivot + fromPos)&&(clickedPos<toPos)){
          this.dispatchEvent(clickedPos, 'thumbFrom');
        }
        else if (clickedPos > (pivot + fromPos) && (clickedPos < toPos)){
          this.dispatchEvent(clickedPos, 'thumbTo')
        }
      }
    }
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

  private getRange(): HTMLDivElement {
    return this.range.getRange();
  }

  setValueToLabelThumbFrom(value: number): void {
    this.range.setValueToLabelThumbFrom(value);
  }

  setValueToLabelThumbTo(value: number): void {
    this.range.setValueToLabelThumbTo(value);
  }

  private getRangeLabel(): HTMLDivElement {
    return this.rangeLabel.getRangeLabel();
  }

  private getThumbFrom(): HTMLDivElement {
    return this.range.getThumbFrom();
  }

  private getThumbTo(): HTMLDivElement {
    return this.range.getThumbTo();
  }

  private setVertical(): void {
    this.container.classList.add(ClassNaming.SLIDER_IS_VERTICAL);
    this.range.setVertical();
    this.rangeLabel.setVertical();

  }

  private setHorizontal(): void {
    this.container.classList.remove(ClassNaming.SLIDER_IS_VERTICAL);
    this.range.setHorizontal();
    this.rangeLabel.setHorizontal();

  }

  private setColoredRange(): void {
    this.range.setColoredRange(this.getThumbWidthInPercentage());
  }

  private getThumbWidthInPx(): number {
    return this.getThumbFrom().offsetWidth;
  }

}
export {Slider}