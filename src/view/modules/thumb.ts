export class Thumb {
 private thumb: HTMLDivElement;
 constructor() {
  let div = document.createElement('div');
  div.classList.add('fsd-slider__thumb');
  this.thumb = div;
 }
 getThumb(): HTMLDivElement {
  return this.thumb;
 }
}