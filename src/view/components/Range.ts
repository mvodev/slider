import ISettings from '../../model/ISettings';
import CLASS_NAMING from '../../utils/classNaming';
import ColoredRange from './ColoredRange';
import Thumb from './Thumb';

class Range {
  private range: HTMLDivElement;

  private coloredRange!: ColoredRange;

  private viewSettings: ISettings;

  private thumbFrom!: Thumb;

  private thumbTo!: Thumb;

  constructor(settings: ISettings) {
    const div = document.createElement('div');
    div.classList.add(CLASS_NAMING.range);
    this.range = div;
    this.viewSettings = settings;
    this.coloredRange = new ColoredRange();
    this.thumbTo = new Thumb(CLASS_NAMING.thumbTo);
    this.thumbFrom = new Thumb(CLASS_NAMING.thumbFrom);
    this.range.appendChild(this.coloredRange.getColoredRangeHTML());
    this.range.appendChild(this.thumbFrom.getThumbHTML());
  }

  getRangeHTML(): HTMLDivElement {
    return this.range;
  }

  render(settings: string): void {
    Object.assign(this.viewSettings, JSON.parse(settings));
    if (this.viewSettings.isRange) {
      this.range.appendChild(this.thumbTo.getThumbHTML());
    } else if (!this.viewSettings.isRange) {
      if (this.range.contains(this.thumbTo.getThumbHTML())) {
        this.range.removeChild(this.thumbTo.getThumbHTML());
      }
    }
  }

  setVertical(): void {
    this.range.classList.add(CLASS_NAMING.rangeIsVertical);
    this.coloredRange.getColoredRangeHTML().classList.add(CLASS_NAMING.coloredRangeIsVertical);
    this.thumbFrom.setVertical();
    if (this.viewSettings.isRange) {
      this.thumbTo.setVertical();
    }
  }

  setHorizontal(): void {
    this.range.classList.remove(CLASS_NAMING.rangeIsVertical);
    this.coloredRange.getColoredRangeHTML().classList.remove(CLASS_NAMING.coloredRangeIsVertical);
    this.thumbFrom.setHorizontal();
    if (this.viewSettings.isRange) {
      this.thumbTo.setHorizontal();
    }
  }

  setColoredRange(thumbWidthInPercentage:number): void {
    this.coloredRange.setColoredRange(
      this.viewSettings,
      this.thumbFrom.getThumbHTML(),
      this.thumbTo.getThumbHTML(),
      thumbWidthInPercentage,
    );
  }

  getThumbFromHTML(): HTMLDivElement {
    return this.thumbFrom.getThumbHTML();
  }

  getThumbLabelFromHTML(): HTMLElement {
    return this.thumbFrom.getThumbLabelHTML();
  }

  getThumbTo(): HTMLDivElement {
    return this.thumbTo.getThumbHTML();
  }

  hideLabel(): void {
    this.thumbFrom.hideLabel();
    if (this.viewSettings.isRange) {
      this.thumbTo.hideLabel();
    }
  }

  showLabel(): void {
    this.thumbFrom.showLabel();
    if (this.viewSettings.isRange) {
      this.thumbTo.showLabel();
    }
  }

  setValueToLabelThumbFrom(value: number): void {
    this.thumbFrom.setValueToLabel(value);
  }

  setValueToLabelThumbTo(value: number): void {
    this.thumbTo.setValueToLabel(value);
  }

  setThumbPositionFrom(shift: number, isVertical: boolean | undefined): void {
    this.thumbFrom.setThumbPosition(shift, isVertical);
  }

  setThumbPositionTo(shift: number, isVertical: boolean | undefined): void {
    this.thumbTo.setThumbPosition(shift, isVertical);
  }

  getThumbWidthInPx(): number {
    if (this.viewSettings.isVertical) {
      return this.thumbFrom.getThumbHTML().offsetHeight;
    }
    return this.thumbFrom.getThumbHTML().offsetWidth;
  }
}
export default Range;
