export class RangeLabel {
 private rangeLabelContainer: HTMLDivElement;
 private minLabel: HTMLSpanElement;
 private maxLabel: HTMLSpanElement;

 constructor(numberOfMarking: number, isVertical: boolean) {
  this.rangeLabelContainer = document.createElement('div');
  this.rangeLabelContainer.classList.add('fsd-slider__range-label');
  this.minLabel = document.createElement('span');
  this.rangeLabelContainer.appendChild(this.minLabel);
  for (let i = 0; i < numberOfMarking; i++) {
   let marking = document.createElement('span');
   if (isVertical) {
    marking.innerText = '-';
   } else marking.innerText = '|';
   this.rangeLabelContainer.appendChild(marking);
  }
  this.maxLabel = document.createElement('span');
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
 getMinRange() {
  return this.minLabel;
 }
 getMaxRange() {
  return this.maxLabel;
 }
}