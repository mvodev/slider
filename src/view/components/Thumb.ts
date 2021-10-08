import ThumbLabel from './ThumbLabel';

class Thumb {
  private thumb: HTMLDivElement;

  private thumbLabel: ThumbLabel;

  private thumbLabelHTML: HTMLDivElement;

  constructor(className: string) {
    this.thumb = document.createElement('div');
    this.thumb.classList.add(className);
    this.thumbLabel = new ThumbLabel();
    this.thumbLabelHTML = this.thumbLabel.getThumbLabelContainer();
    this.thumb.appendChild(this.thumbLabelHTML);
  }

  getThumb(): HTMLDivElement {
    return this.thumb;
  }

  setThumbPosition(shift: number, isVertical: boolean|undefined): void {
    if (isVertical) {
      this.thumb.style.top = `${shift}%`;
      this.thumb.style.left = '-25%';
    } else {
      this.thumb.style.left = `${shift}%`;
      this.thumb.style.top = '-25%';
    }
  }

  setVertical(): void {
    this.thumbLabel.setVertical();
  }

  setHorizontal(): void {
    this.thumbLabel.setHorizontal();
  }

  hideLabel(): void {
    this.thumbLabel.hideLabel();
  }

  showLabel(): void {
    this.thumbLabel.showLabel();
  }

  setValueToLabel(value: number): void {
    this.thumbLabel.setValueToLabel(value);
  }
}
export default Thumb;
