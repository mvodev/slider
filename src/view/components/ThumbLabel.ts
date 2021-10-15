import CLASS_NAMING from '../../utils/classNaming';

class ThumbLabel {
  private thumbLabelContainer: HTMLDivElement;

  private thumbLabelValue: HTMLSpanElement;

  constructor() {
    const div = document.createElement('div');
    const divValue = document.createElement('div');
    this.thumbLabelContainer = div;
    this.thumbLabelContainer.classList.add(CLASS_NAMING.thumbLabel);
    this.thumbLabelValue = divValue;
    this.thumbLabelValue.classList.add(CLASS_NAMING.thumbValue);
    this.thumbLabelContainer.appendChild(this.thumbLabelValue);
  }

  getThumbLabelHTML(): HTMLDivElement {
    return this.thumbLabelContainer;
  }

  setValueToLabel(value: number): void {
    this.thumbLabelValue.innerText = `${value}`;
  }

  hideLabel(): void {
    this.thumbLabelContainer.classList.add(CLASS_NAMING.hideElement);
  }

  showLabel(): void {
    this.thumbLabelContainer.classList.remove(CLASS_NAMING.hideElement);
  }

  setVertical(): void {
    this.thumbLabelContainer.classList.add(CLASS_NAMING.thumbLabelIsVertical);
  }

  setHorizontal(): void {
    this.thumbLabelContainer.classList.remove(CLASS_NAMING.thumbLabelIsVertical);
  }
}

export default ThumbLabel;
