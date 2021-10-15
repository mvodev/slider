import CLASSNAMING from '../../utils/classNaming';

class ThumbLabel {
  private thumbLabelContainer: HTMLDivElement;

  private thumbLabelValue: HTMLSpanElement;

  constructor() {
    const div = document.createElement('div');
    const divValue = document.createElement('div');
    this.thumbLabelContainer = div;
    this.thumbLabelContainer.classList.add(CLASSNAMING.thumbLabel);
    this.thumbLabelValue = divValue;
    this.thumbLabelValue.classList.add(CLASSNAMING.thumbValue);
    this.thumbLabelContainer.appendChild(this.thumbLabelValue);
  }

  getThumbLabelHTML(): HTMLDivElement {
    return this.thumbLabelContainer;
  }

  setValueToLabel(value: number): void {
    this.thumbLabelValue.innerText = `${value}`;
  }

  hideLabel(): void {
    this.thumbLabelContainer.classList.add(CLASSNAMING.hideElement);
  }

  showLabel(): void {
    this.thumbLabelContainer.classList.remove(CLASSNAMING.hideElement);
  }

  setVertical(): void {
    this.thumbLabelContainer.classList.add(CLASSNAMING.thumbLabelIsVertical);
  }

  setHorizontal(): void {
    this.thumbLabelContainer.classList.remove(CLASSNAMING.thumbLabelIsVertical);
  }
}

export default ThumbLabel;
