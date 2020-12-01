import { ISettings } from '../model/ISettings';
import { Model } from '../model/Model';
import { View } from '../view/View';
export class Controller {

  private view: View;
  private model: Model;
  private callback: Function;
  private result: ISettings;
  private isUpdated: boolean;

  constructor(view: View, model: Model) {
    this.view = view;
    this.model = model;
    this.isUpdated = false;
    this.result = {
      min: 0,
      max: 0,
      from: 0,
    };
  }
  initialize() {
    this.view.render();
    if (this.model.showThumbLabel) {
      this.setThumbToValue('thumbFrom');
      if (this.model.isRange()) {
        this.setThumbToValue('thumbTo');
      }
    }
    this.view.refreshView();
  }
  private isUpdate() {
    return this.isUpdated;
  }
  setIsUpdate(value: boolean) {
    this.isUpdated = value;
  }
  bindEvents() {
    this.view.getThumbFrom().onmousedown = this.mouseFromHandler.bind(this);
    this.view.getRangeLabel().onmousedown = this.mouseRangeHandler.bind(this);
    if (this.model.isRange()) {
      this.view.getThumbTo().onmousedown = this.mouseToHandler.bind(this);
    }
  }
  start() {
    this.initialize();
    this.bindEvents();
    this.view.refreshView();
  }
  update(newSettings: ISettings) {
    this.model.updateSettings(newSettings);
    if (this.model.showThumbLabel) {
      this.setThumbToValue('thumbFrom');
      if (this.model.isRange()) {
        this.setThumbToValue('thumbTo');
      }
    }
    this.setIsUpdate(true);
    this.view.refreshView();
  }
  isVerticalSlider(): boolean | undefined {
    return this.model.isVertical();
  }
  isRangeSlider(): boolean | undefined {
    return this.model.isRange();
  }
  withThumbLabel(): boolean | undefined {
    return this.model.showThumbLabel();
  }
  setThumbToValue(type: string) {
    if (type === 'thumbFrom') {
      if (this.isVerticalSlider()) {
        this.view.getThumbFrom().style.top = this.getPosInPercentFromValue(this.model.getFrom()) + '%';
        this.model.setFromInPx(this.getPosInPxFromValue(this.model.getFrom()));
        this.refreshView();
      }
      else {
        this.view.getThumbFrom().style.left = this.getPosInPercentFromValue(this.model.getFrom()) + '%';
        this.model.setFromInPx(this.getPosInPxFromValue(this.model.getFrom()));
        this.refreshView();
      }
    }
    else {
      if (this.isVerticalSlider()) {
        this.view.getThumbTo().style.top = this.getPosInPercentFromValue(this.model.getTo()) + '%';
        this.model.setToInPx(this.getPosInPxFromValue(this.model.getTo()));
        this.view.refreshView();
      }
      else {
        this.view.getThumbTo().style.left = this.getPosInPercentFromValue(this.model.getTo()) + '%';
        this.model.setToInPx(this.getPosInPxFromValue(this.model.getTo()));
        this.view.refreshView();
      }
    }
  }
  mouseFromHandler(e: MouseEvent) {
    e.preventDefault();
    if (this.isVerticalSlider()) {
      let shiftY = e.clientY - this.view.getThumbFrom().getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbFrom();
      let that = this;

      function onMouseMove(event: MouseEvent) {
        let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
        if (newTop < 0) {
          newTop = 0;
        }
        let bottom = that.view.getSliderLengthInPx();
        if (that.isRangeSlider()) {
          bottom = that.model.getToInPx();
        }
        if (newTop > bottom) {
          newTop = bottom;
        }
        that.model.setFromInPx(newTop);
        that.setValueToThumb();
        that.view.refreshView();
        that.callOnChange();
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
    else {
      let shiftX = e.clientX - this.view.getThumbFrom().getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbFrom();
      let that = this;

      function onMouseMove(e: MouseEvent) {
        let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = that.view.getSliderLengthInPx();
        if (that.isRangeSlider()) {
          rightEdge = that.model.getToInPx();
        }
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        that.model.setFromInPx(newLeft);
        that.setValueToThumb();
        that.view.refreshView();
        that.callOnChange();
      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }

  mouseToHandler(e: MouseEvent) {
    e.preventDefault();
    if (this.isVerticalSlider()) {
      let shiftY = e.clientY - this.view.getThumbTo().getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();

      let thumb = this.view.getThumbTo();
      let that = this;

      function onMouseMove(event: MouseEvent) {
        let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;
        if (newTop < that.model.getFromInPx()) {
          newTop = that.model.getFromInPx() + 1;
        }
        let bottom = sliderRange.offsetHeight - thumb.offsetHeight;

        if (newTop > bottom) {
          newTop = bottom;
        }
        that.model.setToInPx(newTop);
        that.setValueToThumb();
        that.refreshView();
        that.callOnChange();
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
    else {
      let shiftX = e.clientX - this.view.getThumbTo().getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbTo();
      let that = this;

      function onMouseMove(e: MouseEvent) {
        let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;
        if (newLeft < that.model.getFromInPx()) {
          newLeft = that.model.getFromInPx() + 1;
        }
        let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        that.model.setToInPx(newLeft);
        that.setValueToThumb();
        that.refreshView();
        that.callOnChange();
      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }
  mouseRangeHandler(e: MouseEvent) {
    if (this.isVerticalSlider()) {
      if (this.model.isRange()) {
        let shiftY = e.clientY - this.view.getRange().getBoundingClientRect().top;
        if (shiftY < this.model.getFromInPx()) {
          this.model.setFromInPx(shiftY);
          this.setValueToThumb();
          this.refreshView();
        }
        else if (shiftY > this.model.getToInPx()) {
          this.model.setToInPx(shiftY);
          this.setValueToThumb();
          this.refreshView();
        }
        else if (shiftY >= this.model.getFromInPx() && shiftY <= this.model.getToInPx()) {
          let pivot = (this.model.getToInPx() - this.model.getFromInPx());
          if (shiftY < pivot) {
            this.model.setFromInPx(shiftY);
            this.setValueToThumb();
            this.refreshView();
          }
          else if (shiftY >= pivot) {
            this.model.setToInPx(shiftY);
            this.setValueToThumb();
            this.refreshView();
          }
        }
      }
      else {
        let shiftY = e.clientY - this.view.getRange().getBoundingClientRect().top;
        this.model.setFromInPx(shiftY);
        this.setValueToThumb();
        this.refreshView();
      }
    } else {
      let shiftX = e.clientX - this.view.getRange().getBoundingClientRect().left;
      if (this.model.isRange()) {
        if (shiftX < this.model.getFromInPx()) {
          this.model.setFromInPx(shiftX);
          this.setValueToThumb();
          this.refreshView();
        }
        else if (shiftX > this.model.getToInPx()) {
          this.model.setToInPx(shiftX);
          this.setValueToThumb();
          this.refreshView();
        }
        else if (shiftX >= this.model.getFromInPx() && shiftX <= this.model.getToInPx()) {
          let pivot = (this.model.getToInPx() - this.model.getFromInPx());
          if (shiftX < pivot) {
            this.model.setFromInPx(shiftX);
            this.setValueToThumb();
            this.refreshView();
          }
          else if (shiftX >= pivot) {
            this.model.setToInPx(shiftX);
            this.setValueToThumb();
            this.refreshView();
          }
        }
      }
      else {
        this.model.setFromInPx(shiftX);
        this.setValueToThumb();
        this.refreshView();
      }

    }
  }
  setValueToThumb() {
    if (this.withThumbLabel()) {
      if (this.isVerticalSlider()) {
        this.model.setFrom(this.getValueFromPosInPx(this.model.getFromInPx()));
        if (this.isUpdate()) {
          this.model.setFromInPx(this.getPosInPxFromValue(this.model.getFrom()));
        }
        if (this.isRangeSlider()) {
          this.model.setTo(this.getValueFromPosInPx(this.model.getToInPx()));
          if (this.isUpdate()) {
            this.model.setToInPx(this.getPosInPxFromValue(this.model.getTo()));
          }
        }
        this.callOnChange();
      }
      else {
        this.model.setFrom(this.getValueFromPosInPx(this.model.getFromInPx()));
        if (this.isUpdate()) {
          this.model.setFromInPx(this.getPosInPxFromValue(this.model.getFrom()));
        }
        if (this.isRangeSlider()) {
          this.model.setTo(this.getValueFromPosInPx(this.model.getToInPx()));
          if (this.isUpdate()) {
            this.model.setToInPx(this.getPosInPxFromValue(this.model.getTo()));
          }
        }
        this.callOnChange();
      }
    }
  }
  getPosInPercentFromValue(value: number): number {

    let res = (100 / Math.abs(this.model.getMax() - this.model.getMin())) * (Math.abs(value - this.model.getMin()));
    return res;
  }
  getPosInPxFromValue(value: number): number {
    return (this.view.getSliderLengthInPx() / Math.abs(this.model.getMax() - this.model.getMin())) * (Math.abs(value - this.model.getMin()));
  }
  getValueFromPosInPx(valueInPx: number): number {
    return +(Math.floor(valueInPx /
      (
        this.view.getSliderLengthInPx()
        /
        (
          (Math.abs(this.model.getMax() - this.model.getMin())) / this.model.getStep()
        )

      )) * this.model.getStep()
      + this.model.getMin()).toFixed(this.numDigitsAfterDecimal(this.model.getStep()));
  }
  refreshView() {
    this.view.refreshView();
  }
  numDigitsAfterDecimal(value: number) {
    let afterDecimalStr = value.toString().split('.')[1] || ''
    return afterDecimalStr.length
  }
  callOnChange() {
    this.result.from = this.model.getFrom();
    if (this.model.isRange) {
      this.result.to = this.model.getTo();
    }
    if (this.model.getOnChangeCallback()) {
      this.model.getOnChangeCallback().call(this, this.result);
    }
  }
}
