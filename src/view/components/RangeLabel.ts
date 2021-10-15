import ISettings from '../../model/ISettings';
import CLASSNAMING from '../../utils/classNaming';

class RangeLabel {
  private rangeLabelContainer!: HTMLDivElement;

  private minLabel!: HTMLSpanElement;

  private maxLabel!: HTMLSpanElement;

  private labels: HTMLSpanElement[];

  private settings!: ISettings;

  constructor(settings: ISettings) {
    this.labels = [];
    this.settings = { ...settings };
    this.initComponents();
  }

  render(settings: ISettings): void {
    this.settings = Object.assign(this.settings, settings);
    this.setMinRange(this.settings.min);
    this.setMaxRange(this.settings.max);
  }

  getRangeLabelHTML(): HTMLDivElement {
    return this.rangeLabelContainer;
  }

  setMinRange(value: number): void {
    this.minLabel.innerText = `${value}`;
  }

  setMaxRange(value: number): void {
    this.maxLabel.innerText = `${value}`;
  }

  private initComponents() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add(CLASSNAMING.rangeLabel);
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(CLASSNAMING.rangeLabelScale);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(CLASSNAMING.rangeLabelScale);
    this.rangeLabelContainer.appendChild(this.minLabel);
    this.labels.push(this.minLabel);
    const pivotMark = document.createElement('span');
    pivotMark.classList.add(CLASSNAMING.rangeLabelScale);
    this.labels.push(pivotMark);
    this.rangeLabelContainer.appendChild(pivotMark);
    this.rangeLabelContainer.appendChild(this.maxLabel);
    this.labels.push(this.maxLabel);
  }

  setVertical(): void {
    this.rangeLabelContainer.classList.add(CLASSNAMING.rangeLabelIsVertical);
  }

  setHorizontal(): void {
    this.rangeLabelContainer.classList.remove(CLASSNAMING.rangeLabelIsVertical);
  }

  getLabels(): HTMLElement[] {
    return this.labels;
  }

  hideLabels(): void {
    this.rangeLabelContainer.classList.add(CLASSNAMING.hideElement);
  }

  showLabels(): void {
    this.rangeLabelContainer.classList.remove(CLASSNAMING.hideElement);
  }
}
export default RangeLabel;
