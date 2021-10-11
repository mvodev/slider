import ClassNaming from '../../utils/classNaming';

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
    this.thumbLabelValue.innerText = `${value}`;
  }

  hideLabel(): void {
    this.thumbLabelContainer.classList.add(ClassNaming.HIDE_ELEMENT);
  }

  showLabel(): void {
    this.thumbLabelContainer.classList.remove(ClassNaming.HIDE_ELEMENT);
  }

  setVertical(): void {
    this.thumbLabelContainer.classList.add(ClassNaming.THUMB_LABEL_IS_VERTICAL);
  }

  setHorizontal(): void {
    this.thumbLabelContainer.classList.remove(ClassNaming.THUMB_LABEL_IS_VERTICAL);
  }
}

export default ThumbLabel;
