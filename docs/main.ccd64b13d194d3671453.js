/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./model/Model.ts":
/*!************************!*\
  !*** ./model/Model.ts ***!
  \************************/
/*! namespace exports */
/*! export Model [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => /* binding */ Model
/* harmony export */ });
/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./utils/Utils.ts");
;

class Model extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__.EventObservable {
  constructor(settings) {
    super();
    this.defaultSettings = {
      min: 0,
      max: 10,
      from: 5,
      isRange: false,
      isVertical: false,
      hideThumbLabel: false,
      onStart: undefined,
      onChange: undefined,
      onUpdate: undefined
    };
    this.settings = Object.assign(this.defaultSettings, settings);
    this.validateSettings(this.settings);
  }

  getSettings() {
    return Object.assign({}, this.settings);
  }

  updateSettings(settings) {
    this.settings = Object.assign(this.settings, settings);
    this.validateSettings(this.settings);
    this.notifyObservers(1
    /* UPDATE */
    , JSON.stringify(this.settings));
  }

  getMin() {
    return this.settings.min;
  }

  getMax() {
    return this.settings.max;
  }

  showThumbLabel() {
    return !this.settings.hideThumbLabel;
  }

  setFrom(valueInPercent) {
    this.settings.from = this.convertFromPercentToValue(valueInPercent);
  }

  getFrom() {
    return this.settings.from;
  }

  setTo(valueInPercent) {
    this.settings.to = this.convertFromPercentToValue(valueInPercent);
    ;
  }

  getTo() {
    return this.settings.to;
  }

  isRange() {
    return this.settings.isRange;
  }

  isVertical() {
    return this.settings.isVertical;
  }

  getStep() {
    return this.settings.step ? this.settings.step : 1;
  }

  getOnStart() {
    return this.settings.onStart;
  }

  getOnChange() {
    return this.settings.onChange;
  }

  getOnUpdate() {
    return this.settings.onUpdate;
  }

  validateSettings(settings) {
    if (settings.min >= settings.max) {
      console.error('unacceptable value,min value in settings more than max value');
      this.settings.min = settings.max - 10;
    }

    if (!settings.to && settings.isRange) {
      this.settings.to = settings.max;
      console.error('unacceptable value,`to` value must be established');
    }

    if (settings.from < settings.min) {
      console.error('unacceptable value,from must be more than min');
      this.settings.from = settings.min;
    }

    if (settings.from > settings.max) {
      console.error('unacceptable value,from must be lower than max');
      this.settings.from = settings.min;
    }

    if (settings.to < settings.min && settings.isRange) {
      this.settings.to = settings.max;
      console.error('unacceptable value,`to` value must be between min and max');
    }

    if (this.getStep() < 0) {
      console.error('unacceptable value,`step` value must be positive number');
      this.settings.step = this.settings.step * -1;
    }

    if (this.getStep() > Math.abs(this.getMax() - this.getMin())) {
      console.error('unacceptable value,`step` value must be lower than difference between max and min');
      this.settings.step = +(Math.abs(this.getMax() - this.getMin()) / 2).toFixed(1);
    }

    if (settings.isRange && settings.to > settings.max) {
      console.error('unacceptable value,to must be lower than max');
      this.settings.to = settings.max;
    }

    if (settings.isRange && settings.from >= settings.to) {
      console.error('unacceptable value,from must be lower than to');
      this.settings.to = this.settings.from + this.settings.step ? this.settings.step : 0;
    }

    if (settings.onChange && typeof settings.onChange != 'function') {
      console.error('unacceptable value,callback onChange must be function');
      this.settings.onChange = undefined;
    }

    if (settings.onUpdate && typeof settings.onUpdate != 'function') {
      console.error('unacceptable value,callback onUpdate must be function');
      this.settings.onUpdate = undefined;
    }
  }

  convertFromPercentToValue(valueInPercent) {
    console.log('inside convertFromPercentToValue ' + valueInPercent);

    if (valueInPercent <= 0) {
      return this.getMin();
    }

    if (valueInPercent >= 100) {
      return this.getMax();
    }

    let del = 1.0 / this.getStep();
    return Math.round(+(Math.abs(this.getMax() - this.getMin()) * valueInPercent / 100 + this.getMin()).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.numDigitsAfterDecimal(this.getStep())) * del) / del;
  }

}

/***/ }),

/***/ "./observers/EventObservable.ts":
/*!**************************************!*\
  !*** ./observers/EventObservable.ts ***!
  \**************************************/
/*! namespace exports */
/*! export EventObservable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventObservable": () => /* binding */ EventObservable
/* harmony export */ });
class EventObservable {
  constructor() {
    this.observers = [];
  }

  addObserver(o) {
    this.observers.push(o);
  }

  removeObserver(o) {
    this.observers.filter(subscriber => subscriber !== o);
  }

  notifyObservers(msg, settings) {
    this.observers.forEach(elem => elem.handleEvent(msg, settings));
  }

}

/***/ }),

/***/ "./presenter/presenter.ts":
/*!********************************!*\
  !*** ./presenter/presenter.ts ***!
  \********************************/
/*! namespace exports */
/*! export Presenter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Presenter": () => /* binding */ Presenter
/* harmony export */ });
class Presenter {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.isUpdated = false;
  }

  handleEvent(msg, s) {
    if (msg === 0
    /* INIT */
    ) {
        this.initialize();

        if (this.model.getOnStart()) {
          this.model.getOnStart().call(JSON.parse(s));
        }
      } else if (msg === 1
    /* UPDATE */
    ) {
        this.view.refreshView(1
        /* UPDATE */
        , JSON.parse(s));

        if (this.model.getOnUpdate()) {
          this.model.getOnUpdate().call(JSON.parse(s));
        }
      } else if (msg === 4
    /* SET_FROM */
    ) {
        this.model.setFrom(JSON.parse(s).from);
        this.view.refreshView(2
        /* FROM_IS_SET */
        , {
          from: this.model.getFrom(),
          to: 0,
          min: 0,
          max: 0
        });

        if (this.model.getOnChange()) {
          this.model.getOnChange().call(this, JSON.stringify(this.model.getSettings()));
        }
      } else if (msg === 5
    /* SET_TO */
    ) {
        this.model.setTo(JSON.parse(s).to);
        this.view.refreshView(3
        /* TO_IS_SET */
        , {
          to: this.model.getTo(),
          from: 0,
          min: 0,
          max: 0
        });

        if (this.model.getOnChange()) {
          this.model.getOnChange().call(this, JSON.stringify(this.model.getSettings()));
        }
      }
  }

  initialize() {
    this.view.render();
    this.view.refreshView(0
    /* INIT */
    , this.model.getSettings());
  }

  update(newSettings) {
    this.model.updateSettings(newSettings);
  }

  isVerticalSlider() {
    return this.model.isVertical();
  }

  isRangeSlider() {
    return this.model.isRange();
  }

  withThumbLabel() {
    return this.model.showThumbLabel();
  }

}

/***/ }),

/***/ "./utils/Utils.ts":
/*!************************!*\
  !*** ./utils/Utils.ts ***!
  \************************/
/*! namespace exports */
/*! export Utils [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => /* binding */ Utils
/* harmony export */ });
class Utils {
  static numDigitsAfterDecimal(value) {
    if (value) {
      let afterDecimalStr = value.toString().split('.')[1] || '';
      return afterDecimalStr.length;
    } else return 0;
  }

}

/***/ }),

/***/ "./view/View.ts":
/*!**********************!*\
  !*** ./view/View.ts ***!
  \**********************/
/*! namespace exports */
/*! export View [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => /* binding */ View
/* harmony export */ });
/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Slider */ "./view/modules/Slider.ts");
/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");
;

class View extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__.EventObservable {
  constructor(settings, root) {
    super();
    this.numberOfMarking = 10;
    this.settings = settings;
    this.rootElem = root;
    this.slider = new _modules_Slider__WEBPACK_IMPORTED_MODULE_0__.Slider(this.rootElem, this.settings, this.numberOfMarking);

    if (this.settings.isVertical) {
      this.thumbInPercentage = Math.abs(this.getThumbFrom().offsetHeight / this.slider.getRange().offsetHeight) * 100;
    } else {
      this.thumbInPercentage = Math.abs(this.getThumbFrom().offsetWidth / this.slider.getRange().offsetWidth) * 100;
    }

    this.resPercentage = 0;
  }

  render() {
    this.slider.render();

    if (this.settings.hideThumbLabel) {
      this.slider.getThumbLabelFrom().hideLabel();
    }

    if (this.settings.isVertical) {
      this.slider.setVertical();
    }

    this.bindEvents();
  }

  bindEvents() {
    this.getThumbFrom().onmousedown = this.mouseFromHandler.bind(this);
    this.getRangeLabel().onmousedown = this.mouseRangeHandler.bind(this);

    if (this.settings.isRange) {
      this.getThumbTo().onmousedown = this.mouseToHandler.bind(this);
    }
  }

  getRangeLabel() {
    return this.slider.getRangeLabel();
  }

  getSliderLengthInPx() {
    if (this.settings.isVertical) {
      return this.getRange().offsetHeight + this.getThumbFrom().offsetHeight;
    } else {
      return this.getRange().offsetWidth + this.getThumbFrom().offsetWidth;
    }
  }

  getThumbLengthInPx() {
    if (this.settings.isVertical) {
      return this.getThumbFrom().offsetHeight;
    } else {
      return this.getThumbFrom().offsetWidth;
    }
  }

  getThumbLengthInPercentage() {
    if (this.settings.isVertical) {
      return +(this.getThumbFrom().offsetHeight / this.getSliderLengthInPx() * 100).toFixed(1);
    } else {
      return +(this.getThumbFrom().offsetWidth / this.getSliderLengthInPx() * 100).toFixed(1);
    }
  }

  getRange() {
    return this.slider.getRange();
  }

  getThumbFrom() {
    return this.slider.getThumbFrom();
  }

  setValueToThumbLabelTo(value) {
    this.slider.setValueToLabelThumbTo(value);
  }

  getThumbTo() {
    return this.slider.getThumbTo();
  }

  refreshView(msg, s) {
    if (msg === 0
    /* INIT */
    || msg === 1
    /* UPDATE */
    ) {
        if (!this.settings.hideThumbLabel) {
          this.setThumbToValue('thumbFrom');

          if (this.settings.isRange) {
            this.setThumbToValue('thumbTo');
          }
        }

        this.slider.setMinRange(s.min);
        this.slider.setMaxRange(s.max);
        this.slider.setValueToLabelThumbFrom(s.from);

        if (s.isRange) {
          this.slider.setValueToLabelThumbTo(s.to);

          if (s.isVertical) {
            this.getThumbTo().style.top = Math.abs(s.to - s.min) / Math.abs(s.max - s.min) * 100 - this.getThumbLengthInPercentage() + '%';
            this.getThumbFrom().style.top = Math.abs(s.from - s.min) / Math.abs(s.max - s.min) * 100 + '%';
          } else {
            this.getThumbTo().style.left = Math.abs(s.to - s.min) / Math.abs(s.max - s.min) * 100 - this.getThumbLengthInPercentage() + '%';
            this.getThumbFrom().style.left = Math.abs(s.from - s.min) / Math.abs(s.max - s.min) * 100 + '%';
          }

          this.setColoredRange();
        } else {
          if (s.isVertical) {
            this.getThumbFrom().style.top = Math.abs(s.from - s.min) / Math.abs(s.max - s.min) * 100 + '%';
          } else {
            this.getThumbFrom().style.left = Math.abs(s.from - s.min) / Math.abs(s.max - s.min) * 100 + '%';
          }

          this.setColoredRange();
        }
      } else if (msg === 2
    /* FROM_IS_SET */
    ) {
        this.slider.setValueToLabelThumbFrom(s.from);
        this.setColoredRange();
      } else if (msg === 3
    /* TO_IS_SET */
    ) {
        this.slider.setValueToLabelThumbTo(s.to);
        this.setColoredRange();
      }
  }

  setColoredRange() {
    if (this.settings.isRange) {
      if (this.settings.isVertical) {
        this.slider.getColoredRange().style.top = this.getThumbFrom().getBoundingClientRect().top - 2 * this.getThumbLengthInPx() + 'px';
        this.slider.getColoredRange().style.height = this.getThumbTo().getBoundingClientRect().top - this.getThumbFrom().getBoundingClientRect().top + this.getThumbLengthInPx() / 2 + 'px';
      } else {
        this.slider.getColoredRange().style.left = this.getThumbFrom().getBoundingClientRect().left - 1.2 * this.getThumbLengthInPx() + 'px';
        this.slider.getColoredRange().style.width = this.getThumbTo().getBoundingClientRect().left - this.getThumbFrom().getBoundingClientRect().left - this.getThumbLengthInPx() / 2 + 'px';
      }
    } else {
      if (this.settings.isVertical) {
        this.slider.getColoredRange().style.height = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbLengthInPx() / 2) + 'px';
      } else {
        this.slider.getColoredRange().style.width = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbLengthInPx() / 2) + 'px';
      }
    }
  }

  mouseFromHandler(e) {
    e.preventDefault();

    if (this.settings.isVertical) {
      let shiftY = e.clientY - this.getThumbFrom().getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let that = this;

      function onMouseMove(event) {
        let newTop = event.clientY - shiftY - this.getRange().getBoundingClientRect().top;

        if (newTop < -that.getThumbLengthInPx() / 2) {
          newTop = -that.getThumbLengthInPx() / 2;
        }

        let bottom = that.getSliderLengthInPx() - that.getThumbLengthInPx() / 2;

        if (that.settings.isRange) {
          let toPos = that.getThumbTo().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top - that.getThumbLengthInPx() / 4);
          bottom = toPos;
        }

        if (newTop > bottom) {
          newTop = bottom;
        }

        that.resPercentage = that.convertFromPxToPercent(newTop);
        that.getThumbFrom().style.top = that.resPercentage + '%';
        that.notifyObservers(4
        /* SET_FROM */
        , JSON.stringify({
          from: that.resPercentage,
          min: that.settings.min,
          max: that.settings.max
        }));
        that.setColoredRange();
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    } else {
      let shiftX = e.clientX - this.getThumbFrom().getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let that = this;

      function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - that.getRange().getBoundingClientRect().left;

        if (newLeft < -that.getThumbFrom().offsetWidth / 2) {
          newLeft = -that.getThumbFrom().offsetWidth / 2;
        }

        let rightEdge = that.getSliderLengthInPx() - that.getThumbFrom().offsetWidth / 2;

        if (that.settings.isRange) {
          let toPos = that.getThumbTo().getBoundingClientRect().left - (that.getRange().getBoundingClientRect().left - that.getThumbLengthInPx() / 4);
          rightEdge = toPos;
        }

        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        that.resPercentage = that.convertFromPxToPercent(newLeft);
        that.getThumbFrom().style.left = that.resPercentage + '%';
        that.notifyObservers(4
        /* SET_FROM */
        , JSON.stringify({
          from: that.resPercentage,
          min: that.settings.min,
          max: that.settings.max
        }));
        that.setColoredRange();
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }

  mouseToHandler(e) {
    e.preventDefault();

    if (this.settings.isVertical) {
      let shiftY = e.clientY - this.getThumbTo().getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let that = this;

      function onMouseMove(event) {
        let newTop = event.clientY - shiftY - this.getRange().getBoundingClientRect().top;
        let fromPos = that.getThumbFrom().getBoundingClientRect().top - (that.getRange().getBoundingClientRect().top - that.getThumbLengthInPx() / 2);

        if (newTop < fromPos) {
          newTop = fromPos;
        }

        let bottom = that.getSliderLengthInPx() - that.getThumbFrom().offsetWidth;

        if (newTop > bottom) {
          newTop = bottom;
        }

        that.resPercentage = that.convertFromPxToPercent(newTop);
        that.getThumbTo().style.top = that.resPercentage + '%';
        that.notifyObservers(5
        /* SET_TO */
        , JSON.stringify({
          from: 0,
          to: that.resPercentage,
          min: that.settings.min,
          max: that.settings.max
        }));
        that.setColoredRange();
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    } else {
      let shiftX = e.clientX - this.getThumbTo().getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let that = this;

      function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - that.getRange().getBoundingClientRect().left;
        let fromPos = that.getThumbFrom().getBoundingClientRect().left - (that.getRange().getBoundingClientRect().left - that.getThumbLengthInPx() / 2);

        if (newLeft < fromPos) {
          newLeft = fromPos;
        }

        let rightEdge = that.getSliderLengthInPx() - that.getThumbFrom().offsetWidth;

        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        that.resPercentage = that.convertFromPxToPercent(newLeft);
        that.getThumbTo().style.left = that.resPercentage + '%';
        that.notifyObservers(5
        /* SET_TO */
        , JSON.stringify({
          from: 0,
          to: that.resPercentage,
          min: that.settings.min,
          max: that.settings.max
        }));
        that.setColoredRange();
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }

  mouseRangeHandler(e) {
    if (this.settings.isVertical) {
      //vertical mode
      let shiftY = e.clientY - this.getRange().getBoundingClientRect().top;
      let fromPos = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbLengthInPx() / 2);

      if (this.settings.isRange) {
        let toPos = this.getThumbTo().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbLengthInPx() / 2);

        if (shiftY < fromPos) {
          this.resPercentage = this.convertFromPxToPercent(shiftY);
          this.getThumbFrom().style.top = this.resPercentage + '%';
          this.notifyObservers(4
          /* SET_FROM */
          , JSON.stringify({
            from: this.resPercentage,
            to: 0,
            min: this.settings.min,
            max: this.settings.max
          }));
          this.setColoredRange();
        } else if (shiftY > toPos) {
          this.resPercentage = this.convertFromPxToPercent(shiftY);
          this.getThumbTo().style.top = this.resPercentage + '%';
          this.notifyObservers(5
          /* SET_TO */
          , JSON.stringify({
            to: this.resPercentage,
            from: 0,
            min: this.settings.min,
            max: this.settings.max
          }));
          this.setColoredRange();
        } else if (shiftY >= fromPos && shiftY <= toPos) {
          let pivot = toPos - fromPos;

          if (shiftY < pivot) {
            this.resPercentage = this.convertFromPxToPercent(shiftY);
            this.getThumbFrom().style.top = this.resPercentage + '%';
            this.notifyObservers(4
            /* SET_FROM */
            , JSON.stringify({
              from: this.resPercentage,
              to: 0,
              min: this.settings.min,
              max: this.settings.max
            }));
            this.setColoredRange();
          } else if (shiftY >= pivot) {
            this.resPercentage = this.convertFromPxToPercent(shiftY);
            this.getThumbTo().style.top = this.resPercentage + '%';
            this.notifyObservers(5
            /* SET_TO */
            , JSON.stringify({
              to: this.resPercentage,
              from: 0,
              min: this.settings.min,
              max: this.settings.max
            }));
            this.setColoredRange();
          }
        }
      } else {
        if (shiftY < fromPos) {
          this.resPercentage = this.convertFromPxToPercent(shiftY);
          this.getThumbFrom().style.top = this.resPercentage + '%';
          this.notifyObservers(4
          /* SET_FROM */
          , JSON.stringify({
            from: this.resPercentage,
            to: 0,
            min: this.settings.min,
            max: this.settings.max
          }));
          this.setColoredRange();
        } else {
          //vertical mode single thumb 
          this.resPercentage = this.convertFromPxToPercent(shiftY);
          this.getThumbFrom().style.top = this.resPercentage + '%';
          this.notifyObservers(4
          /* SET_FROM */
          , JSON.stringify({
            from: this.resPercentage,
            to: 0,
            min: this.settings.min,
            max: this.settings.max
          }));
          this.setColoredRange();
        }
      }
    } else {
      //horizontal mode
      let shiftX = e.clientX - this.getRange().getBoundingClientRect().left;
      let fromPos = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbLengthInPx() / 2);

      if (this.settings.isRange) {
        let toPos = this.getThumbTo().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbLengthInPx() / 2);

        if (shiftX < fromPos) {
          this.resPercentage = this.convertFromPxToPercent(shiftX);
          this.getThumbFrom().style.left = this.resPercentage + '%';
          this.notifyObservers(4
          /* SET_FROM */
          , JSON.stringify({
            from: this.resPercentage,
            to: 0,
            min: this.settings.min,
            max: this.settings.max
          }));
          this.setColoredRange();
        } else if (shiftX > toPos) {
          this.resPercentage = this.convertFromPxToPercent(shiftX);
          this.getThumbTo().style.left = this.resPercentage + '%';
          this.notifyObservers(5
          /* SET_TO */
          , JSON.stringify({
            to: this.resPercentage,
            from: 0,
            min: this.settings.min,
            max: this.settings.max
          }));
          this.setColoredRange();
        } else if (shiftX >= fromPos && shiftX <= toPos) {
          let pivot = toPos - fromPos;

          if (shiftX < pivot) {
            this.resPercentage = this.convertFromPxToPercent(shiftX);
            this.getThumbFrom().style.left = this.resPercentage + '%';
            this.notifyObservers(4
            /* SET_FROM */
            , JSON.stringify({
              from: this.resPercentage,
              to: 0,
              min: this.settings.min,
              max: this.settings.max
            }));
            this.setColoredRange();
          } else if (shiftX >= pivot) {
            this.resPercentage = this.convertFromPxToPercent(shiftX);
            this.getThumbTo().style.left = this.resPercentage + '%';
            this.notifyObservers(5
            /* SET_TO */
            , JSON.stringify({
              to: this.resPercentage,
              from: 0,
              min: this.settings.min,
              max: this.settings.max
            }));
            this.setColoredRange();
          }
        }
      } else {
        //horizontal mode single thumb
        this.resPercentage = this.convertFromPxToPercent(shiftX);
        this.getThumbFrom().style.left = this.resPercentage + '%';
        this.notifyObservers(4
        /* SET_FROM */
        , JSON.stringify({
          from: this.resPercentage,
          to: 0,
          min: this.settings.min,
          max: this.settings.max
        }));
        this.setColoredRange();
      }
    }
  }

  convertFromPxToPercent(valueInPX) {
    return valueInPX / this.getSliderLengthInPx() * 100;
  }

  convertFromValueToPercent(value) {
    return 100 / Math.abs(this.settings.max - this.settings.min) * Math.abs(value - this.settings.min);
  }

  setThumbToValue(type) {
    if (type === 'thumbFrom') {
      if (this.settings.isVertical) {
        this.getThumbFrom().style.top = this.convertFromValueToPercent(this.settings.from) + '%';
      } else {
        this.getThumbFrom().style.left = this.convertFromValueToPercent(this.settings.from) + '%';
      }

      this.setColoredRange();
    } else {
      if (this.settings.isVertical) {
        this.getThumbTo().style.top = this.convertFromValueToPercent(this.settings.to) + '%';
      } else {
        this.getThumbTo().style.left = this.convertFromValueToPercent(this.settings.to) + '%';
      }

      this.setColoredRange();
    }
  }

}

/***/ }),

/***/ "./view/modules/Slider.ts":
/*!********************************!*\
  !*** ./view/modules/Slider.ts ***!
  \********************************/
/*! namespace exports */
/*! export Slider [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slider": () => /* binding */ Slider
/* harmony export */ });
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./range */ "./view/modules/range.ts");
/* harmony import */ var _thumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumb */ "./view/modules/thumb.ts");
/* harmony import */ var _thumbLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thumbLabel */ "./view/modules/thumbLabel.ts");
/* harmony import */ var _rangeLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rangeLabel */ "./view/modules/rangeLabel.ts");
/* harmony import */ var _coloredRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coloredRange */ "./view/modules/coloredRange.ts");
;




class Slider {
  constructor(rootElem, s, numberOfMarking) {
    this.settings = s;
    this.rootElem = rootElem;
    this.numberOfMarking = numberOfMarking;
    this.numberOfMarking = this.numberOfMarking;
    this.thumbTo = new _thumb__WEBPACK_IMPORTED_MODULE_1__.Thumb('fsd-slider__thumb-to');
    this.thumbLabelTo = new _thumbLabel__WEBPACK_IMPORTED_MODULE_2__.ThumbLabel(this.thumbTo.getThumb());
    this.thumbFrom = new _thumb__WEBPACK_IMPORTED_MODULE_1__.Thumb('fsd-slider__thumb-from');
    this.thumbLabelFrom = new _thumbLabel__WEBPACK_IMPORTED_MODULE_2__.ThumbLabel(this.thumbFrom.getThumb());
    this.range = new _range__WEBPACK_IMPORTED_MODULE_0__.Range();
    this.coloredRange = new _coloredRange__WEBPACK_IMPORTED_MODULE_4__.ColoredRange();
    this.rangeLabel = new _rangeLabel__WEBPACK_IMPORTED_MODULE_3__.RangeLabel(this.numberOfMarking, this.settings.isVertical);
    this.container = document.createElement('div');
  }

  render() {
    this.container.classList.add('fsd-slider');
    this.container.appendChild(this.range.getRange());
    this.range.getRange().appendChild(this.coloredRange.getColoredRange());
    this.range.getRange().appendChild(this.thumbFrom.getThumb());
    this.thumbFrom.getThumb().appendChild(this.thumbLabelFrom.getThumbLabelContainer());

    if (this.settings.isRange) {
      this.thumbTo.getThumb().appendChild(this.thumbLabelTo?.getThumbLabelContainer());
      this.range.getRange().appendChild(this.thumbTo.getThumb());
    }

    this.container.appendChild(this.rangeLabel.getRangeLabel());
    this.rootElem.appendChild(this.container);
  }

  getRange() {
    return this.range.getRange();
  }

  getThumbFrom() {
    return this.thumbFrom.getThumb();
  }

  getThumbTo() {
    return this.thumbTo.getThumb();
  }

  getThumbLabelFrom() {
    return this.thumbLabelFrom;
  }

  getThumbLabelTo() {
    return this.thumbLabelTo;
  }

  getColoredRange() {
    return this.coloredRange.getColoredRange();
  }

  setMaxRange(value) {
    this.rangeLabel.setMaxRange(value);
  }

  setMinRange(value) {
    this.rangeLabel.setMinRange(value);
  }

  setValueToLabelThumbFrom(value) {
    this.thumbLabelFrom.setValueToLabel(value);
  }

  setValueToLabelThumbTo(value) {
    this.thumbLabelTo.setValueToLabel(value);
  }

  getRangeLabel() {
    return this.rangeLabel.getRangeLabel();
  }

  setVertical() {
    this.container.classList.add('fsd-slider_is_vertical');
    this.range.getRange().classList.add('fsd-slider__range_is_vertical');
    this.coloredRange.getColoredRange().classList.add('fsd-slider__colored-range_is_vertical');
    this.rangeLabel.getRangeLabel().classList.add('fsd-slider__range-label_is_vertical');
    this.thumbLabelFrom.getThumbLabelContainer().classList.add('fsd-slider__thumb-label_is_vertical');

    if (this.settings.isRange) {
      this.thumbLabelTo.getThumbLabelContainer().classList.add('fsd-slider__thumb-label_is_vertical');
    }
  }

}

/***/ }),

/***/ "./view/modules/coloredRange.ts":
/*!**************************************!*\
  !*** ./view/modules/coloredRange.ts ***!
  \**************************************/
/*! namespace exports */
/*! export ColoredRange [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColoredRange": () => /* binding */ ColoredRange
/* harmony export */ });
class ColoredRange {
  constructor() {
    this.coloredRange = document.createElement('div');
    this.coloredRange.classList.add('fsd-slider__colored-range');
  }

  getColoredRange() {
    return this.coloredRange;
  }

}

/***/ }),

/***/ "./view/modules/range.ts":
/*!*******************************!*\
  !*** ./view/modules/range.ts ***!
  \*******************************/
/*! namespace exports */
/*! export Range [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => /* binding */ Range
/* harmony export */ });
class Range {
  constructor() {
    let div = document.createElement('div');
    div.classList.add('fsd-slider__range');
    this.range = div;
  }

  getRange() {
    return this.range;
  }

}

/***/ }),

/***/ "./view/modules/rangeLabel.ts":
/*!************************************!*\
  !*** ./view/modules/rangeLabel.ts ***!
  \************************************/
/*! namespace exports */
/*! export RangeLabel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeLabel": () => /* binding */ RangeLabel
/* harmony export */ });
class RangeLabel {
  constructor(numberOfMarking, isVertical) {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add('fsd-slider__range-label');
    this.minLabel = document.createElement('span');
    this.rangeLabelContainer.appendChild(this.minLabel);

    for (let i = 0; i < numberOfMarking; i++) {
      let marking = document.createElement('span');

      if (isVertical) {
        marking.innerText = '-';
      } else marking.innerText = '|';

      this.rangeLabelContainer.appendChild(marking);
    }

    this.maxLabel = document.createElement('span');
    this.rangeLabelContainer.appendChild(this.maxLabel);
  }

  getRangeLabel() {
    return this.rangeLabelContainer;
  }

  setMinRange(value) {
    this.minLabel.innerText = '' + value;
  }

  setMaxRange(value) {
    this.maxLabel.innerText = '' + value;
  }

}

/***/ }),

/***/ "./view/modules/thumb.ts":
/*!*******************************!*\
  !*** ./view/modules/thumb.ts ***!
  \*******************************/
/*! namespace exports */
/*! export Thumb [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thumb": () => /* binding */ Thumb
/* harmony export */ });
class Thumb {
  constructor(className) {
    this.thumb = document.createElement('div');
    this.thumb.classList.add(className);
  }

  getThumb() {
    return this.thumb;
  }

}

/***/ }),

/***/ "./view/modules/thumbLabel.ts":
/*!************************************!*\
  !*** ./view/modules/thumbLabel.ts ***!
  \************************************/
/*! namespace exports */
/*! export ThumbLabel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbLabel": () => /* binding */ ThumbLabel
/* harmony export */ });
class ThumbLabel {
  constructor(thumbRootElen) {
    let div = document.createElement('div');
    let divValue = document.createElement('div');
    this.thumbLabelContainer = div;
    this.thumbLabelContainer.classList.add('fsd-slider__thumb-label');
    this.thumbLabelValue = divValue;
    this.thumbLabelValue.classList.add('fsd-slider__thumb-label-value');
    this.thumbLabelContainer.appendChild(this.thumbLabelValue);
  }

  getThumbLabelContainer() {
    return this.thumbLabelContainer;
  }

  setValueToLabel(value) {
    this.thumbLabelValue.innerText = '' + value;
  }

  hideLabel() {
    this.thumbLabelContainer.style.display = 'none';
  }

  showLabel() {
    this.thumbLabelContainer.style.display = 'block';
  }

}

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./fsdSlider.js":
/*!**********************!*\
  !*** ./fsdSlider.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/View */ "./view/View.ts");
/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Model */ "./model/Model.ts");
/* harmony import */ var _presenter_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/presenter */ "./presenter/presenter.ts");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
;


(function ($) {
 var FsdSlider = function (root, settings) {
  let model = new _model_Model__WEBPACK_IMPORTED_MODULE_1__.Model(settings);
  let view = new _view_View__WEBPACK_IMPORTED_MODULE_0__.View(settings, root);
  this.presenter = new _presenter_presenter__WEBPACK_IMPORTED_MODULE_2__.Presenter(view, model);
  model.addObserver(this.presenter);
  view.addObserver(this.presenter);
  this.presenter.initialize();
 };
 FsdSlider.prototype = {
  update: function (newSettings) {
   this.presenter.update(newSettings);
  },
 };
 $.fn.fsdSlider = function (settings) {
  return this.each(function () {
   if (!$.data(this, "fsdSlider")) {
    $.data(this, "fsdSlider", new FsdSlider(this, settings));
   }
  });
 };
})(jQuery);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var _fsdSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fsdSlider */ "./fsdSlider.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
;

var $sl1 = $('.slider');
$sl1.fsdSlider({
 min: -15,
 max: -10,
 from: -14,
 step: 0.2,
 to: -11,
 isVertical: false,
 hideThumbLabel: false,
 isRange: true,
 onChange: callback,
 onStart: callback,
});
var sl1_instance = $sl1.data("fsdSlider");
sl1_instance.update({ min: 0, max: 22, from: -5, });
// var $sl2 = $('.slider2');
// $sl2.fsdSlider({
//  min: 5,
//  max: 50,
//  from: 7,
//  step: 0.5,
//  to: -11,
//  isVertical: false,
//  isRange: false,
//  hideThumbLabel: false,
//  onChange: callback2,
// });
// var sl2_instance = $sl2.data('fsdSlider');
// sl2_instance.update({ min: 0, max: 6, from: 3, step: 1, });
function callback(result) {
 var s = JSON.parse(result);
 $('.slider__input').val(s.from + ' '+s.to);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.js","vendors-node_modules_jquery_dist_jquery_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.ccd64b13d194d3671453.js.map