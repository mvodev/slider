export class RangeLabel {
 private rangeLabelContainer: HTMLDivElement;
 private minLabel: HTMLSpanElement;
 private maxLabel: HTMLSpanElement;
 constructor() {
  this.rangeLabelContainer = document.createElement('div');
  this.rangeLabelContainer.classList.add('fsd-slider__range-label');
  this.minLabel = document.createElement('span');
  this.maxLabel = document.createElement('span');
  this.rangeLabelContainer.appendChild(this.minLabel);
  this.rangeLabelContainer.appendChild(this.maxLabel);
 }
 getRangeLabel() {
  return this.rangeLabelContainer;
 }
 setMinRange(value: number) {

  this.minLabel.innerText = '' + value;
 }
 setMaxRange(value: number) {
  this.maxLabel.innerText = '' + value;
 }
}