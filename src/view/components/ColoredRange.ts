import ISettings from '../../model/ISettings';
import CLASS_NAMING from '../../utils/classNaming';

class ColoredRange {
  private coloredRange: HTMLDivElement;

  constructor() {
    this.coloredRange = document.createElement('div');
    this.coloredRange.classList.add(CLASS_NAMING.coloredRange);
  }

  getColoredRangeHTML(): HTMLDivElement {
    return this.coloredRange;
  }

  setColoredRange(
    viewSettings:ISettings,
    thumbFrom:HTMLElement,
    thumbTo:HTMLElement,
    thumbWidthInPercentage:number,
  ): void {
    if (viewSettings.isRange) {
      if (viewSettings.isVertical) {
        const height = `${(Number.parseFloat(thumbTo.style.top)
            - Number.parseFloat(thumbFrom.style.top) + thumbWidthInPercentage * 0.5)}%`;
        this.coloredRange.style.top = thumbFrom.style.top;
        this.coloredRange.style.left = '0%';
        this.coloredRange.style.width = '100%';
        this.coloredRange.style.height = height;
      } else {
        const width = `${(Number.parseFloat(thumbTo.style.left)
          - Number.parseFloat(thumbFrom.style.left) + thumbWidthInPercentage * 0.5)}%`;
        this.coloredRange.style.left = thumbFrom.style.left;
        this.coloredRange.style.top = '0%';
        this.coloredRange.style.height = '100%';
        this.coloredRange.style.width = width;
      }
    } else if (!viewSettings.isRange) {
      if (viewSettings.isVertical) {
        const height = `${(Number.parseFloat(thumbFrom.style.top)
          + thumbWidthInPercentage * 0.5)}%`;
        this.coloredRange.style.top = '0%';
        this.coloredRange.style.width = '100%';
        this.coloredRange.style.height = height;
      } else {
        const width = `${(Number.parseFloat(thumbFrom.style.left)
          + thumbWidthInPercentage * 0.5)}%`;
        this.coloredRange.style.width = width;
        this.coloredRange.style.left = '0%';
        this.coloredRange.style.top = '0%';
        this.coloredRange.style.height = '100%';
      }
    }
  }
}
export default ColoredRange;
