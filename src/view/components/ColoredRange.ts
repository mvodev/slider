import ISettings from '../../model/ISettings';
import ClassNaming from '../../utils/ClassNaming';

class ColoredRange {
  private coloredRange: HTMLDivElement;

  constructor() {
    this.coloredRange = document.createElement('div');
    this.coloredRange.classList.add(ClassNaming.COLORED_RANGE);
  }

  getColoredRange(): HTMLDivElement {
    return this.coloredRange;
  }

  setColoredRange(
    viewSettings:ISettings,
    thumbFrom:HTMLDivElement,
    thumbTo:HTMLDivElement,
    thumbWidthInPercentage:number,
  ): void {
    if (viewSettings.isRange) {
      if (viewSettings.isVertical) {
        this.coloredRange.style.top = thumbFrom.style.top;
        this.coloredRange.style.left = '0%';
        this.coloredRange.style.width = '100%';
        this.coloredRange.style.height = `${(Number.parseInt(thumbTo.style.top, 10)
          - Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage * 0.6)}%`;
      } else {
        this.coloredRange.style.left = thumbFrom.style.left;
        this.coloredRange.style.top = '0%';
        this.coloredRange.style.height = '100%';
        this.coloredRange.style.width = `${(Number.parseInt(thumbTo.style.left, 10)
          - Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage * 0.6)}%`;
      }
    } else if (!viewSettings.isRange) {
      if (viewSettings.isVertical) {
        this.coloredRange.style.top = '0%';
        this.coloredRange.style.width = '100%';
        this.coloredRange.style.height = `${(Number.parseInt(thumbFrom.style.top, 10)
          + thumbWidthInPercentage * 0.5)}%`;
      } else {
        this.coloredRange.style.width = `${(Number.parseInt(thumbFrom.style.left, 10)
          + thumbWidthInPercentage * 0.5)}%`;
        this.coloredRange.style.left = '0%';
        this.coloredRange.style.top = '0%';
        this.coloredRange.style.height = '100%';
      }
    }
  }
}
export default ColoredRange;
