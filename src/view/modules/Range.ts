import { IViewSettings } from '../../model/IViewSettings';
import { ClassNaming } from '../../utils/ClassNaming';

class Range{
  private range: HTMLDivElement;
  private viewSettings:IViewSettings;

  constructor(settings:IViewSettings) {
    const div = document.createElement('div');
    div.classList.add(ClassNaming.RANGE);
    this.range = div;
    this.viewSettings = settings;
  }
  getRange(): HTMLDivElement {
    return this.range;
  }
  render(settings:string):void{
    Object.assign(this.viewSettings, JSON.parse(settings));
  }

}
export {Range}