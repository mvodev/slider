import ISettings from '../../model/ISettings';
import CLASS_NAMING from '../../utils/classNaming';

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

  getMinRangeHTML(): HTMLElement {
    return this.minLabel;
  }

  private initComponents() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add(CLASS_NAMING.rangeLabel);
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(CLASS_NAMING.rangeLabelScale);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(CLASS_NAMING.rangeLabelScale);
    this.rangeLabelContainer.appendChild(this.minLabel);
    this.labels.push(this.minLabel);
    const pivotMark = document.createElement('span');
    pivotMark.classList.add(CLASS_NAMING.rangeLabelScale);
    this.labels.push(pivotMark);
    this.rangeLabelContainer.appendChild(pivotMark);
    this.rangeLabelContainer.appendChild(this.maxLabel);
    this.labels.push(this.maxLabel);
  }

  setVertical(): void {
    this.rangeLabelContainer.classList.add(CLASS_NAMING.rangeLabelIsVertical);
  }

  setHorizontal(): void {
    this.rangeLabelContainer.classList.remove(CLASS_NAMING.rangeLabelIsVertical);
  }

  getLabels(): HTMLElement[] {
    return this.labels;
  }

  hideLabels(): void {
    this.rangeLabelContainer.classList.add(CLASS_NAMING.hideElement);
  }

  showLabels(): void {
    this.rangeLabelContainer.classList.remove(CLASS_NAMING.hideElement);
  }
}
export default RangeLabel;
