import { ClassNaming } from "../../utils/ClassNaming";

class ThumbLabel {
 private thumbLabelContainer: HTMLDivElement;
 private thumbLabelValue: HTMLSpanElement;
 constructor() {
  const div = document.createElement('div');
  const divValue = document.createElement('div');
  this.thumbLabelContainer = div;
  this.thumbLabelContainer.classList.add(ClassNaming.THUMB_LABEL);
  this.thumbLabelValue = divValue;
  this.thumbLabelValue.classList.add(ClassNaming.THUMB_VALUE);
  this.thumbLabelContainer.appendChild(this.thumbLabelValue);
 }
 getThumbLabelContainer(): HTMLDivElement {
  return this.thumbLabelContainer;
 }
 setValueToLabel(value: number): void {
  this.thumbLabelValue.innerText = '' + value;
 }
 hideLabel(): void {
  this.thumbLabelContainer.style.display = 'none';
 }
 showLabel(): void {
  this.thumbLabelContainer.style.display = 'block';
 }
}
export { ThumbLabel }