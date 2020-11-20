export class Thumb {
 private thumb: HTMLDivElement;
 constructor(className:string) {
  let div = document.createElement('div');
  div.classList.add(className);
  this.thumb = div;
 }
 getThumb(): HTMLDivElement {
  return this.thumb;
 }
}