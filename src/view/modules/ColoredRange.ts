export class ColoredRange {
 private coloredRange: HTMLDivElement;
 constructor() {
  this.coloredRange = document.createElement('div');
  this.coloredRange.classList.add('fsd-slider__colored-range');
 }
 getColoredRange() {
  return this.coloredRange;
 }
}