import { EventObservable } from "../../observers/EventObservable";

class Thumb extends EventObservable{
 private thumb: HTMLDivElement;
 constructor(className:string) {
  super();
  this.thumb = document.createElement('div');
  this.thumb.classList.add(className);
 }
 getThumb(): HTMLDivElement {
  return this.thumb;
 }
 setThumbPosition(shift:number,isVertical:boolean|undefined):void{
  if (isVertical) {
   this.getThumb().style.top = shift + '%';
  }
  else {
   this.getThumb().style.left = shift + '%';
  }
 }
}
export {Thumb}