export class Range {
 private range: HTMLDivElement;
 constructor() {
  let div = document.createElement('div');
  div.classList.add('fsd-slider__range');
  this.range = div;
 }
 getRange(): HTMLDivElement {
  return this.range;
 }
}