import ISettings from '../../model/ISettings';
import ClassNaming from '../../utils/classNaming';
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
    div.classList.add(ClassNaming.RANGE);
    this.range = div;
    this.viewSettings = settings;
    this.coloredRange = new ColoredRange();
    this.thumbTo = new Thumb(ClassNaming.THUMB_TO);
    this.thumbFrom = new Thumb(ClassNaming.THUMB_FROM);
    this.range.appendChild(this.coloredRange.getColoredRange());
    this.range.appendChild(this.thumbFrom.getThumb());
  }

  getRange(): HTMLDivElement {
    return this.range;
  }

  render(settings: string): void {
    Object.assign(this.viewSettings, JSON.parse(settings));
    if (this.viewSettings.isRange) {
      this.range.appendChild(this.thumbTo.getThumb());
    } else if (!this.viewSettings.isRange) {
      if (this.range.contains(this.thumbTo.getThumb())) {
        this.range.removeChild(this.thumbTo.getThumb());
      }
    }
  }

  setVertical(): void {
    this.range.classList.add(ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.add(ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setVertical();
    if (this.viewSettings.isRange) {
      this.thumbTo.setVertical();
    }
  }

  setHorizontal(): void {
    this.range.classList.remove(ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.remove(ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setHorizontal();
    if (this.viewSettings.isRange) {
      this.thumbTo.setHorizontal();
    }
  }

  setColoredRange(thumbWidthInPercentage:number): void {
    this.coloredRange.setColoredRange(
      this.viewSettings,
      this.thumbFrom.getThumb(),
      this.thumbTo.getThumb(),
      thumbWidthInPercentage,
    );
  }

  getThumbFrom(): HTMLDivElement {
    return this.thumbFrom.getThumb();
  }

  getThumbTo(): HTMLDivElement {
    return this.thumbTo.getThumb();
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
      return this.thumbFrom.getThumb().offsetHeight;
    }
    return this.thumbFrom.getThumb().offsetWidth;
  }
}
export default Range;
