export class Thumb {
 private thumb: HTMLDivElement;
 constructor(className:string) {
  this.thumb = document.createElement('div');
  this.thumb.classList.add(className);
 }
 getThumb(): HTMLDivElement {
  return this.thumb;
 }
}