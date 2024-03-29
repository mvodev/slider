import Messages from '../utils/messages';
import CONSTANTS from '../utils/constants';
import { roundWithStep } from '../utils/Utils';
import CLASS_NAMING from '../utils/classNaming';
import ISettings from '../model/ISettings';
import EventObservable from '../observers/EventObservable';
import Range from './components/Range';
import RangeLabel from './components/RangeLabel';

class Slider extends EventObservable {
  private range!: Range;

  private rangeLabel!: RangeLabel;

  private rootElem!: HTMLDivElement;

  private container!: HTMLDivElement;

  private settings: ISettings;

  private handleThumbMoveBinded!: EventListenerOrEventListenerObject;

  private removeHandlerBinded!: EventListenerOrEventListenerObject;

  private handleRangeClickBinded!: EventListenerOrEventListenerObject;

  private handleRangeLabelClickBinded!: EventListenerOrEventListenerObject;

  private fromInPx: number;

  private toInPx: number;

  private gapIsAllowedToChange: boolean;

  private thumbGap: number;

  constructor(rootElem: HTMLDivElement, defaultSettings:ISettings) {
    super();
    this.settings = { ...defaultSettings };
    if (rootElem) {
      this.rootElem = rootElem;
    } else {
      throw new Error('root elem of Slider is null!');
    }
    this.fromInPx = 0;
    this.toInPx = 0;
    this.gapIsAllowedToChange = true;
    this.thumbGap = 0;
    this.initSliderComponents();
  }

  refreshView(msg: Messages, settings: ISettings): void {
    const messageInitOrUpdate = (msg === Messages.INIT) || (msg === Messages.UPDATE);
    if (messageInitOrUpdate) {
      this.updateViewSettings(settings);
      this.render({ ...this.settings });
    } else if (msg === Messages.FROM_IS_SET) {
      this.setValueToLabelThumbFrom(settings.from);
    } else if (msg === Messages.TO_IS_SET) {
      this.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);
    }
  }

  destroy(): void {
    this.unbindEvents();
    this.container.remove();
  }

  getThumbLabelFrom(): HTMLElement {
    return this.range.getThumbLabelFromHTML();
  }

  getMinRangeHTML(): HTMLElement {
    return this.rangeLabel.getMinRangeHTML();
  }

  getRangeLabelHTML(): HTMLDivElement {
    return this.rangeLabel.getRangeLabelHTML();
  }

  getRangeHTML(): HTMLDivElement {
    return this.range.getRangeHTML();
  }

  getThumbWidthInPercentage(): number {
    if (this.settings.isVertical) {
      return ((this.getThumbFromHTML().offsetHeight / this.getSliderLengthInPx()) * 100);
    }
    return ((this.getThumbFromHTML().offsetWidth / this.getSliderLengthInPx()) * 100);
  }

  private setValueToLabelThumbFrom(value: number): void {
    this.range.setValueToLabelThumbFrom(value);
    this.settings.from = value;
  }

  private setValueToLabelThumbTo(value: number): void {
    this.range.setValueToLabelThumbTo(value);
    this.settings.to = value;
  }

  private getThumbFromHTML(): HTMLElement {
    return this.range.getThumbFromHTML();
  }

  private render(settings:ISettings): void {
    this.settings = Object.assign(this.settings, settings);
    this.container.classList.add(CLASS_NAMING.root);
    this.container.appendChild(this.range.getRangeHTML());
    this.range.render(settings);
    this.rangeLabel.render(settings);
    this.container.appendChild(this.rangeLabel.getRangeLabelHTML());
    this.rootElem.appendChild(this.container);
    if (this.settings.hideThumbLabel) {
      this.range.hideLabel();
    } else {
      this.range.showLabel();
    }
    if (this.settings.isVertical) {
      this.setVertical();
    } else {
      this.setHorizontal();
    }
    this.bindEvents();
    this.range.setValueToLabelThumbFrom(this.settings.from);
    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from),
      this.settings.isVertical);
    if (this.settings.isRange) {
      this.range.setValueToLabelThumbTo(this.settings.to);
      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to),
        this.settings.isVertical);
    }
    this.setLabelsPosition();
    this.setColoredRange();
    this.calculateThumbPos();
  }

  private updateViewSettings(s: ISettings) {
    this.settings = Object.assign(this.settings, s);
  }

  private calculateThumbPos(): void {
    const {
      from, to, step, min,
    } = this.settings;
    this.fromInPx = this.convertFromValueToPx(from);
    if (this.settings.isRange) {
      this.toInPx = this.convertFromValueToPx(roundWithStep(to, step, min));
    } else this.toInPx = this.getSliderLengthInPx();
  }

  private initSliderComponents(): void {
    this.range = new Range(this.settings);
    this.rangeLabel = new RangeLabel(this.settings);
    this.container = document.createElement('div');
  }

  private setLabelsPosition(): void {
    const diapason = Math.abs(this.settings.max - this.settings.min);
    const pivot = (diapason / 2) + this.settings.min;
    const pivotRounded = roundWithStep(pivot, this.settings.step, this.settings.min);
    const minLabel = this.getLabels()[0];
    const averageLabel = this.getLabels()[1];
    const maxLabel = this.getLabels()[2];
    minLabel.dataset.value = this.settings.min.toString();
    maxLabel.dataset.value = this.settings.max.toString();
    averageLabel.dataset.value = pivotRounded.toString();
    averageLabel.innerText = pivotRounded.toString();
    averageLabel.dataset.value = pivotRounded.toString();
    averageLabel.innerText = pivotRounded.toString();
    if (!this.settings.isVertical) {
      //  set min value label
      minLabel.style.left = `${(this.getThumbWidthInPercentage() / 2
        - ((minLabel.offsetWidth * 100) / (this.getSliderLengthInPx())) / 2)}%`;
      minLabel.style.top = '';
      // set max value label
      maxLabel.style.left = `${(100 - ((maxLabel.offsetWidth / 2
        + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx()) * 100)}%`;
      maxLabel.style.top = '';
      // set average value label
      averageLabel.style.left = `${(this.convertFromValueToPercent(pivotRounded)
        + this.getThumbWidthInPercentage() / 2
        - ((averageLabel.offsetWidth * 100) / (this.getSliderLengthInPx()) / 2))}%`;
      averageLabel.style.top = '';
    } else {
      // set min value label
      minLabel.style.top = `${(this.getThumbWidthInPercentage() / 2
        - (minLabel.offsetHeight * 100) / (this.getSliderLengthInPx()) / 2)}%`;
      minLabel.style.left = '';
      // set max value label
      maxLabel.style.top = `${(100 - ((maxLabel.offsetHeight / 2
        + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx()) * 100)}%`;
      maxLabel.style.left = '';
      // set average value label
      averageLabel.style.top = `${(this.convertFromValueToPercent(pivotRounded)
        + this.getThumbWidthInPercentage() / 2
        - ((this.getLabels()[1].offsetHeight * 100) / (this.getSliderLengthInPx()) / 2))}%`;
      averageLabel.style.left = '';
    }
  }

  private bindEvents(): void {
    this.handleRangeClickBinded = this.handleRangeClick.bind(this, 'range');
    this.initResizeObserver();
    this.handleRangeLabelClickBinded = this.handleRangeLabelClick.bind(this);
    this.getRangeHTML().addEventListener('pointerdown', this.handleRangeClickBinded);
    this.rangeLabel.getLabels().forEach((elem) => elem.addEventListener('click', this.handleRangeLabelClickBinded));
  }

  private initResizeObserver(): void {
    const resizeObserver = new ResizeObserver(() => {
      this.range.setValueToLabelThumbFrom(this.settings.from);
      this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from),
        this.settings.isVertical);
      if (this.settings.isRange) {
        this.range.setValueToLabelThumbTo(this.settings.to);
        this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to),
          this.settings.isVertical);
      }
      this.setColoredRange();
      this.setLabelsPosition();
      this.calculateThumbPos();
    });
    resizeObserver.observe(this.rootElem);
  }

  private bindExtraListeners(thumbType: string) {
    this.handleThumbMoveBinded = this.handleThumbMove.bind(this, thumbType);
    this.removeHandlerBinded = this.removeHandler.bind(this);
    document.addEventListener('pointermove', this.handleThumbMoveBinded);
    document.addEventListener('pointerup', this.removeHandlerBinded);
    document.addEventListener('pointercancel', this.removeHandlerBinded);
  }

  private unbindEvents() {
    this.removeHandler();
    this.getRangeLabelHTML().removeEventListener('pointerdown', this.handleRangeLabelClickBinded);
    this.getRangeHTML().removeEventListener('pointerdown', this.handleRangeClickBinded);
  }

  private removeHandler() {
    document.removeEventListener('pointermove', this.handleThumbMoveBinded);
    document.removeEventListener('pointerup', this.removeHandlerBinded);
    this.gapIsAllowedToChange = true;
  }

  private handleRangeLabelClick(e: Event) {
    const elemIsTarget = (e.target instanceof Element)
      && (e.target.getAttribute(CONSTANTS.dataAttrName));
    const {
      to, max, min, from, isRange, step,
    } = this.settings;
    if (elemIsTarget) {
      const targetValue = Number(e.target.getAttribute(CONSTANTS.dataAttrName));
      const roundedValue = roundWithStep(targetValue, step, min);
      if (!isRange) {
        if (targetValue === max) {
          this.dispatchEvent(this.convertFromValueToPx(targetValue), CONSTANTS.thumbFrom);
        } else {
          this.dispatchEvent(this.convertFromValueToPx(roundedValue), CONSTANTS.thumbFrom);
        }
      } else if (isRange) {
        if (targetValue >= to) {
          if (targetValue === max) {
            this.dispatchEvent(this.convertFromValueToPx(targetValue), CONSTANTS.thumbTo);
          } else {
            this.dispatchEvent(this.convertFromValueToPx(roundedValue), CONSTANTS.thumbTo);
          }
        } else if (targetValue <= from) {
          this.dispatchEvent(this.convertFromValueToPx(roundedValue), CONSTANTS.thumbFrom);
        } else {
          const pivot = Math.abs(to - from) / 2;
          if (targetValue <= (pivot + from)) {
            this.dispatchEvent(this.convertFromValueToPx(roundedValue), CONSTANTS.thumbFrom);
          } else if (targetValue > (pivot + from)) {
            if (roundedValue <= max) {
              this.dispatchEvent(this.convertFromValueToPx(roundedValue), CONSTANTS.thumbTo);
            }
          }
        }
      }
    }
    this.setColoredRange();
    this.calculateThumbPos();
  }

  private handleRangeClick(type: string, e: Event) {
    const {
      isRange, isVertical,
    } = this.settings;
    if (e instanceof MouseEvent) {
      let clickedPos: number;
      let thumbType = '';
      const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();
      if (isVertical) {
        clickedPos = e.clientY - this.getRangeHTML().getBoundingClientRect().top;
      } else {
        clickedPos = e.clientX - this.getRangeHTML().getBoundingClientRect().left;
      }
      if (clickedPos > bottom) clickedPos = bottom;
      if (clickedPos < 0) clickedPos = 0;
      if (isRange) {
        const clickedPosLessFrom = clickedPos < this.fromInPx;
        const clickedPosMoreThanTo = clickedPos > this.toInPx;
        const clickedPosBetweenFromAndTo = clickedPos >= this.fromInPx && clickedPos <= this.toInPx;
        if (clickedPosLessFrom) {
          thumbType = CONSTANTS.thumbFrom;
          if (Math.abs(clickedPos - this.getStepInPx()) <= this.fromInPx) {
            this.setFromInPx('-', clickedPos - this.getThumbWidthInPx() / 2);
          }
        } else if (clickedPosMoreThanTo) {
          thumbType = CONSTANTS.thumbTo;
          if ((clickedPos + this.getStepInPx()) > this.toInPx) {
            if (clickedPos >= bottom) {
              this.dispatchEvent(clickedPos, CONSTANTS.thumbTo);
            } else if (Math.abs(clickedPos - this.toInPx) > this.getThumbWidthInPx()) {
              this.setToInPx('+', clickedPos - this.getThumbWidthInPx() / 2);
            }
          }
        } else if (clickedPosBetweenFromAndTo) {
          const pivot = (this.toInPx - this.fromInPx) / 2;
          if ((clickedPos) <= (pivot + this.fromInPx)) {
            thumbType = CONSTANTS.thumbFrom;
            if (Math.abs(clickedPos - this.fromInPx) > this.getThumbWidthInPx()) {
              this.setFromInPx('+', clickedPos - this.getThumbWidthInPx() / 2);
            }
          } else if ((clickedPos) > (pivot + this.fromInPx)) {
            thumbType = CONSTANTS.thumbTo;
            this.setToInPx('-', clickedPos - this.getThumbWidthInPx() / 2);
          }
        }
      } else {
        thumbType = CONSTANTS.thumbFrom;
        if ((clickedPos + this.getThumbWidthInPx() / 2) < this.fromInPx) {
          this.setFromInPx('-', clickedPos - this.getThumbWidthInPx() / 2);
        } else if ((clickedPos + this.getThumbWidthInPx() / 2) > this.fromInPx
          && ((Math.abs(clickedPos - this.fromInPx) > this.getThumbWidthInPx()))) {
          this.setFromInPx('+', clickedPos - this.getThumbWidthInPx() / 2);
        }
      }
      if (type === 'range') {
        this.bindExtraListeners(thumbType);
      }
    }
  }

  private handleThumbMove(thumbType: string, e: Event) {
    let newPos: number;
    const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();
    if (e instanceof MouseEvent) {
      if (this.settings.isVertical) {
        if (this.gapIsAllowedToChange) {
          this.thumbGap = thumbType === CONSTANTS.thumbFrom
            ? e.clientY - this.getRangeHTML().getBoundingClientRect().top - this.fromInPx
            : e.clientY - this.getRangeHTML().getBoundingClientRect().top - this.toInPx;
          this.gapIsAllowedToChange = false;
        }
        newPos = e.clientY - this.getRangeHTML().getBoundingClientRect().top - this.thumbGap;
      } else {
        if (this.gapIsAllowedToChange) {
          this.thumbGap = thumbType === CONSTANTS.thumbFrom
            ? e.clientX - this.getRangeHTML().getBoundingClientRect().left - this.fromInPx
            : e.clientX - this.getRangeHTML().getBoundingClientRect().left - this.toInPx;
          this.gapIsAllowedToChange = false;
        }
        newPos = e.clientX - this.getRangeHTML().getBoundingClientRect().left - this.thumbGap;
      }
      if (newPos < 0) {
        newPos = 0;
      }
      if (newPos >= bottom) {
        newPos = bottom;
      }
      if (thumbType === CONSTANTS.thumbFrom) {
        if (newPos < this.fromInPx) {
          this.setFromInPx('-', newPos);
        } else {
          this.setFromInPx('+', newPos);
        }
      } else if (thumbType === CONSTANTS.thumbTo) {
        if (newPos > this.toInPx) {
          this.setToInPx('+', newPos);
        } else {
          this.setToInPx('-', newPos);
        }
      }
    }
  }

  private setFromInPx(type: string, newPos: number): void {
    let result = 0;
    const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();
    if (type === '+') {
      result = this.fromInPx + this.roundPos(this.fromInPx, newPos);
    } else {
      result = this.fromInPx - this.roundPos(this.fromInPx, newPos);
    }
    if (Math.abs(this.toInPx - result) < CONSTANTS.threshold) {
      result = this.toInPx - this.getStepInPx();
    }
    if (result < 0) {
      result = 0;
    }
    if ((result > this.toInPx) && this.settings.isRange) {
      result = this.toInPx - this.getStepInPx();
    }
    const isPossibleMoveToMax = result < bottom && newPos >= bottom && !this.settings.isRange;
    if (isPossibleMoveToMax) {
      this.dispatchEvent(newPos, CONSTANTS.thumbFrom);
    } else {
      this.fromInPx = result;
      this.dispatchEvent(this.fromInPx, CONSTANTS.thumbFrom);
    }
  }

  private setToInPx(type: string, newPos: number): void {
    let result;
    const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();
    if (type === '+') {
      result = this.toInPx + this.roundPos(this.toInPx, newPos);
    } else {
      result = this.toInPx - this.roundPos(this.toInPx, newPos);
    }
    if (Math.abs(this.fromInPx - result) < CONSTANTS.threshold) {
      result = this.fromInPx + this.getStepInPx();
    }
    if (result < this.fromInPx) {
      result = this.fromInPx + this.getStepInPx();
    }
    const isPossibleMoveToBottom = result < bottom && newPos >= bottom;
    if (isPossibleMoveToBottom) {
      this.dispatchEvent(newPos, CONSTANTS.thumbTo);
    } else {
      this.toInPx = result;
      this.dispatchEvent(this.toInPx, CONSTANTS.thumbTo);
    }
  }

  private roundPos(thumbInPx: number, newPos: number): number {
    if (newPos === 0) {
      return thumbInPx;
    }
    const result = (Math.round(Math.abs(thumbInPx - newPos) / this.getStepInPx())
      * this.getStepInPx());
    return +result.toFixed(20);
  }

  private convertFromPxToPercent(valueInPX: number): number {
    if (valueInPX < 0) {
      return 0;
    }
    const result = (valueInPX / (this.getSliderLengthInPx()
    - this.getThumbWidthInPx())) * (100 - this.getThumbWidthInPercentage());
    if (result > (100 - this.getThumbWidthInPercentage())) {
      return (100 - this.getThumbWidthInPercentage());
    }
    return +result.toFixed(20);
  }

  private convertFromValueToPx(value: number): number {
    const result = ((Math.abs(value - this.settings.min))
      / Math.abs(this.settings.max - this.settings.min))
      * (this.getSliderLengthInPx() - this.getThumbWidthInPx());
    if (result < 0) {
      return 0;
    }
    return +result.toFixed(20);
  }

  private convertFromValueToPercent(value: number): number {
    const result = (((100 - this.getThumbWidthInPercentage())
      / Math.abs(this.settings.max - this.settings.min))
      * (Math.abs(value - this.settings.min)));
    if (result > (100 - this.getThumbWidthInPercentage())) {
      return (100 - this.getThumbWidthInPercentage());
    }
    if (result < 0) {
      return 0;
    }
    return +result.toFixed(20);
  }

  private getSliderLengthInPx(): number {
    if (this.settings.isVertical) {
      return this.getRangeHTML().offsetHeight;
    }
    return this.getRangeHTML().offsetWidth;
  }

  private dispatchEvent(shiftInPx: number, eventType: string) {
    const valueInPercentage = this.convertFromPxToPercent(shiftInPx);
    const result = { ...this.settings };
    if (eventType === CONSTANTS.thumbFrom) {
      this.range.setThumbPositionFrom(valueInPercentage, this.settings.isVertical);
      result.from = ((100 / (100 - this.getThumbWidthInPercentage()))
          * valueInPercentage);
      this.notifyObservers(Messages.SET_FROM, result);
    } else {
      this.range.setThumbPositionTo(valueInPercentage, this.settings.isVertical);
      result.to = ((100 / (100 - this.getThumbWidthInPercentage()))
          * valueInPercentage);
      this.notifyObservers(Messages.SET_TO, result);
    }
    this.setColoredRange();
  }

  private setVertical(): void {
    this.unbindEvents();
    this.container.classList.add(CLASS_NAMING.sliderIsVertical);
    this.range.setVertical();
    this.rangeLabel.setVertical();
  }

  private setHorizontal(): void {
    this.unbindEvents();
    this.container.classList.remove(CLASS_NAMING.sliderIsVertical);
    this.range.setHorizontal();
    this.rangeLabel.setHorizontal();
  }

  private setColoredRange(): void {
    this.range.setColoredRange(this.getThumbWidthInPercentage());
  }

  private getThumbWidthInPx(): number {
    return this.range.getThumbWidthInPx();
  }

  private getStepInPx(): number {
    return +((this.getSliderLengthInPx() - this.getThumbWidthInPx())
    / (Math.abs((this.settings.max - this.settings.min) / this.settings.step))).toFixed(20);
  }

  private getLabels(): HTMLElement[] {
    return this.rangeLabel.getLabels();
  }
}
export default Slider;
