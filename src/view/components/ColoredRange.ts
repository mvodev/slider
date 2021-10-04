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

  setColoredRange(viewSettings:ISettings,
    thumbFrom:HTMLDivElement,
    thumbTo:HTMLDivElement,
    thumbWidthInPercentage:number) :void {
    if (viewSettings.isRange) {
      if (viewSettings.isVertical) {
        this.getColoredRange().style.top = thumbFrom.style.top;
        this.getColoredRange().style.left = '0%';
        this.getColoredRange().style.width = '100%';
        this.getColoredRange().style.height = `${(Number.parseInt(thumbTo.style.top, 10) - Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage)}%`;
      } else {
        this.getColoredRange().style.left = thumbFrom.style.left;
        this.getColoredRange().style.top = '0%';
        this.getColoredRange().style.height = '100%';
        this.getColoredRange().style.width = `${(Number.parseInt(thumbTo.style.left, 10) - Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage)}%`;
      }
    } else if (!viewSettings.isRange) {
      if (viewSettings.isVertical) {
        this.getColoredRange().style.top = '0%';
        this.getColoredRange().style.width = '100%';
        this.getColoredRange().style.height = `${(Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage / 2)}%`;
      } else {
        this.getColoredRange().style.width = `${(Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage / 2)}%`;
        this.getColoredRange().style.left = '0%';
        this.getColoredRange().style.top = '0%';
        this.getColoredRange().style.height = '100%';
      }
    }
  }
}
export default ColoredRange;
