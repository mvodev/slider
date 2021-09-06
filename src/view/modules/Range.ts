import { IViewSettings } from '../../model/IViewSettings';
import { ClassNaming } from '../../utils/ClassNaming';
import { ColoredRange } from './ColoredRange';
import { Thumb } from './Thumb';

class Range{
  private range: HTMLDivElement;
  private coloredRange!: ColoredRange;
  private viewSettings:IViewSettings;
  private thumbFrom!: Thumb;
  private thumbTo!: Thumb;

  constructor(settings:IViewSettings) {
    const div = document.createElement('div');
    div.classList.add(ClassNaming.RANGE);
    this.range = div;
    this.viewSettings = settings;
    this.coloredRange = new ColoredRange();
    this.thumbTo = new Thumb(ClassNaming.THUMB_TO);
    this.thumbFrom = new Thumb(ClassNaming.THUMB_FROM);
    this.getRange().appendChild(this.coloredRange.getColoredRange());
  }
  getRange(): HTMLDivElement {
    return this.range;
  }
  render(settings:string):void{
    Object.assign(this.viewSettings, JSON.parse(settings));
    this.getRange().appendChild(this.thumbFrom.getThumb());
    
    if (this.viewSettings.isRange) {
      this.getRange().appendChild(this.thumbTo.getThumb());
    }
  }
  setVertical():void{
    this.range.classList.add(ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.add(ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setVertical();
    if (this.viewSettings.isRange) {
      this.thumbTo.setVertical();
    }
  }
  setHorizontal():void{
    this.range.classList.remove(ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.remove(ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setHorizontal();
    if (this.viewSettings.isRange) {
      this.thumbTo.setHorizontal();
    }
  }
  setColoredRange(thumbFrom: HTMLDivElement, thumbTo: HTMLDivElement,widthThumb:number):void{
    this.coloredRange.setColoredRange(
      this.viewSettings,
      thumbFrom,
      thumbTo,
      widthThumb);
  }

  getThumbFrom(): HTMLDivElement {
    return this.thumbFrom.getThumb();
  }

  getThumbTo(): HTMLDivElement {
    return this.thumbTo.getThumb();
  }

  hideLabel(): void {
    this.thumbFrom.hideLabel();
    if (this.viewSettings.isRange) {
      this.thumbTo.hideLabel();
    }
  }

showLabel(): void {
  this.thumbFrom.showLabel();
  if (this.viewSettings.isRange) {
    this.thumbTo.showLabel();
  }
}

setValueToLabelThumbFrom(value: number):void{
  this.thumbFrom.setValueToLabel(value);
}

setValueToLabelThumbTo(value: number): void {
  this.thumbTo.setValueToLabel(value);
}

setThumbPositionFrom(shift: number, isVertical: boolean | undefined):void{
  this.thumbFrom.setThumbPosition(shift, isVertical);
}

setThumbPositionTo(shift: number, isVertical: boolean | undefined): void {
  this.thumbTo.setThumbPosition(shift, isVertical);
}

}
export {Range}