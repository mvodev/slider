import { IViewSettings } from '../../model/IViewSettings';
import { ClassNaming } from '../../utils/ClassNaming';
import { ColoredRange } from './ColoredRange';

class Range{
  private range: HTMLDivElement;
  private coloredRange!: ColoredRange;
  private viewSettings:IViewSettings;

  constructor(settings:IViewSettings) {
    const div = document.createElement('div');
    div.classList.add(ClassNaming.RANGE);
    this.range = div;
    this.viewSettings = settings;
    this.coloredRange = new ColoredRange();
    this.getRange().appendChild(this.coloredRange.getColoredRange());
  }
  getRange(): HTMLDivElement {
    return this.range;
  }
  render(settings:string):void{
    Object.assign(this.viewSettings, JSON.parse(settings));
  }
  setVertical():void{
    this.range.classList.add(ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.add(ClassNaming.COLORED_RANGE_IS_VERTICAL);
  }
  setHorizontal():void{
    this.range.classList.remove(ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.remove(ClassNaming.COLORED_RANGE_IS_VERTICAL);
  }
  setColoredRange(thumbFrom: HTMLDivElement, thumbTo: HTMLDivElement,widthThumb:number):void{
    this.coloredRange.setColoredRange(
      this.viewSettings,
      thumbFrom,
      thumbTo,
      widthThumb);
  }

}
export {Range}