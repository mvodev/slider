import { EventObservable } from "../../observers/EventObservable";
import { ThumbLabel } from "./ThumbLabel";

class Thumb extends EventObservable{
  private thumb: HTMLDivElement;
  private thumbLabel:ThumbLabel;
  private thumbLabelHTML:HTMLDivElement;

  constructor(className:string) {
    super();
    this.thumb = document.createElement('div');
    this.thumb.classList.add(className);
    this.thumbLabel = new ThumbLabel();
    this.thumbLabelHTML = this.thumbLabel.getThumbLabelContainer();
    this.thumb.appendChild(this.thumbLabelHTML);

  }
  getThumb(): HTMLDivElement {
    return this.thumb;
  }
  getThumbLabel():HTMLDivElement{
    return this.thumbLabelHTML;
  }
  setThumbPosition(shift:number,isVertical:boolean|undefined):void{
    if (isVertical) {
      this.getThumb().style.top = shift + '%';
    }
    else {
      this.getThumb().style.left = shift + '%';
    }
  }
  setVertical():void{
    this.thumbLabel.setVertical();
  }

  setHorizontal(): void {
    this.thumbLabel.setHorizontal();
  }

  hideLabel():void{
    this.thumbLabel.hideLabel();
  }

  showLabel():void{
    this.thumbLabel.showLabel();
  }

  setValueToLabel(value: number): void {
    this.thumbLabel.setValueToLabel(value);
  }

}
export {Thumb}