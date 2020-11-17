export class ThumbLabel {
 private thumbLabelContainer: HTMLDivElement;
 private thumbLabelValue: HTMLSpanElement;
 constructor(thumbRootElen: HTMLDivElement) {
  let div = document.createElement('div');
  let divValue = document.createElement('div');
  this.thumbLabelContainer = div;
  this.thumbLabelContainer.classList.add('fsd-slider__thumb-label');
  this.thumbLabelValue = divValue;
  this.thumbLabelValue.classList.add('fsd-slider__thumb-label-value');
  this.thumbLabelContainer.appendChild(this.thumbLabelValue);
 }

 getThumbLabelContainer() {
  return this.thumbLabelContainer;
 }
 setValueToLabel(value: number) {
  this.thumbLabelValue.innerText = '' + value;
 }
 hideLabel() {
  this.thumbLabelContainer.style.display = 'none';
 }
 showLabel() {
  this.thumbLabelContainer.style.display = 'block';
 }
}