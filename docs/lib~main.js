(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lib~main"],{

/***/ "./error-message/ErrorMessage.ts":
/*!***************************************!*\
  !*** ./error-message/ErrorMessage.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;

class ErrorMessage {
  constructor(message, whoCalled) {
    this.message = message;
    this.whoCalled = whoCalled;
    this.timestamp = new Date().toDateString();
    this.showMessage();
  }

  showMessage() {
    console.error('message: ' + this.message + ', invoked by: ' + this.whoCalled + ', timestamp: ' + this.timestamp);
  }

}

exports.ErrorMessage = ErrorMessage;

/***/ }),

/***/ "./fsd-slider.js":
/*!***********************!*\
  !*** ./fsd-slider.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/View */ "./view/View.ts");
/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_view_View__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Model */ "./model/Model.ts");
/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _presenter_Presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/Presenter */ "./presenter/Presenter.ts");
/* harmony import */ var _presenter_Presenter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_presenter_Presenter__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable no-undef */



(function ($) {
  var FsdSlider = function (root, settings,callback) {
    // eslint-disable-next-line no-undef
    let model = new _model_Model__WEBPACK_IMPORTED_MODULE_1__["Model"](settings);
    let view = new _view_View__WEBPACK_IMPORTED_MODULE_0__["View"](root);
    this.presenter = new _presenter_Presenter__WEBPACK_IMPORTED_MODULE_2__["Presenter"](view, model);
    model.addObserver(this.presenter);
    view.addObserver(this.presenter);
    this.presenter.addObserver(callback);
    this.presenter.initialize();
  };
  FsdSlider.prototype = {
    update: function (newSettings) {
      this.presenter.update(newSettings);
    },
  };
  $.fn.fsdSlider = function (settings,callback) {
    return this.each(function () {
      if (!$.data(this, "fsd-slider")) {
        $.data(this, "fsd-slider", new FsdSlider(this, settings, callback));
      }
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./model/DefaultSettings.ts":
/*!**********************************!*\
  !*** ./model/DefaultSettings.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSettings = void 0;
const defaultSettings = {
  min: 0,
  max: 10,
  from: 5,
  step: 1,
  to: 8,
  isRange: false,
  isVertical: false,
  hideThumbLabel: false
};
exports.defaultSettings = defaultSettings;

/***/ }),

/***/ "./model/Model.ts":
/*!************************!*\
  !*** ./model/Model.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = void 0;

const EventObservable_1 = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");

const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./utils/Utils.ts");

const DefaultSettings_1 = __webpack_require__(/*! ./DefaultSettings */ "./model/DefaultSettings.ts");

const ErrorMessage_1 = __webpack_require__(/*! ../error-message/ErrorMessage */ "./error-message/ErrorMessage.ts");

class Model extends EventObservable_1.EventObservable {
  constructor(settings) {
    super();
    this.settings = Object.assign({}, DefaultSettings_1.defaultSettings);
    this.validateSettings(settings);
  }

  getSettings() {
    return JSON.stringify(this.settings);
  }

  updateSettings(settings) {
    this.validateSettings(settings);
    this.notifyObservers(1
    /* UPDATE */
    , this.getSettings(), 0);
  }

  getMin() {
    return this.settings.min;
  }

  getMax() {
    return this.settings.max;
  }

  setFrom(valueInPercent, thumbWidthInPercent) {
    this.settings.from = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);
  }

  getFrom() {
    return this.settings.from;
  }

  setTo(valueInPercent, thumbWidthInPercent) {
    this.settings.to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);
  }

  getTo() {
    return this.settings.to;
  }

  getStep() {
    return this.settings.step ? this.settings.step : 0;
  }

  validateSettings(settings) {
    const newMin = Utils_1.Utils.convertFromInputToNumber(settings.min);
    const newMax = Utils_1.Utils.convertFromInputToNumber(settings.max);
    const newFrom = Utils_1.Utils.convertFromInputToNumber(settings.from);
    const newTo = Utils_1.Utils.convertFromInputToNumber(settings.to);
    const newStep = Utils_1.Utils.convertFromInputToNumber(settings.step);
    const newIsVertical = Utils_1.Utils.convertFromInputToBoolean(settings.isVertical);
    const newHideThumbLabel = Utils_1.Utils.convertFromInputToBoolean(settings.hideThumbLabel);
    this.settings.isRange = settings.isRange ? Utils_1.Utils.convertFromInputToBoolean(settings.isRange) : this.settings.isRange;
    this.validateMinOrError(newMin);
    this.validateMaxOrError(newMax);
    this.validateFromOrError(newFrom);
    this.validateToOrError(newTo);
    this.validateStepOrError(newStep);
    this.validateIsVerticalOrError(newIsVertical);
    this.validateThumbLabelOrError(newHideThumbLabel);
  }

  validateMinOrError(newMin) {
    if (newMin) {
      if (newMin >= this.settings.max) {
        new ErrorMessage_1.ErrorMessage('unacceptable value,min value in settings more than max value', 'validate settings method of Model');
      } else if (newMin > this.settings.from) {
        new ErrorMessage_1.ErrorMessage('unacceptable value,min value in settings more than from value', 'validate settings method of Model');
      } else {
        this.settings.min = newMin;
      }
    }
  }

  validateMaxOrError(newMax) {
    if (newMax) {
      if (newMax <= this.settings.min) {
        new ErrorMessage_1.ErrorMessage('unacceptable value,max value in settings lower than min value', 'validate settings method of Model');
      } else if (newMax <= this.settings.to && this.settings.isRange) {
        new ErrorMessage_1.ErrorMessage('unacceptable value,max value in settings lower than to value', 'validate settings method of Model');
      } else if (newMax <= this.settings.from) {
        new ErrorMessage_1.ErrorMessage('unacceptable value,max value in settings lower than from value', 'validate settings method of Model');
      } else {
        this.settings.max = newMax;
      }
    }
  }

  validateFromOrError(newFrom) {
    if (newFrom) {
      const max = this.settings.isRange ? this.settings.to : this.settings.max;

      if (newFrom <= this.settings.min + this.settings.step || newFrom >= max + this.settings.step) {
        new ErrorMessage_1.ErrorMessage('from is invalid', 'validate settings method of Model');
        this.settings.from = this.settings.min;
      } else {
        this.settings.from = newFrom;
      }
    }
  }

  validateToOrError(newTo) {
    if (newTo) {
      if (newTo > this.settings.max) {
        new ErrorMessage_1.ErrorMessage('to must be lower than max', 'validate settings method of Model');
      } else if (newTo <= this.settings.min) {
        new ErrorMessage_1.ErrorMessage('to must be lower than max', 'validate settings method of Model');
      } else if (this.settings.isRange) {
        if (newTo <= this.settings.from) {
          new ErrorMessage_1.ErrorMessage('to must be lower than max', 'validate settings method of Model');
        } else {
          this.settings.to = newTo;
        }
      }
    }
  }

  validateStepOrError(newStep) {
    if (newStep) {
      if (newStep < 0) {
        new ErrorMessage_1.ErrorMessage('step must be positive', 'validate settings method of Model');
      } else if (newStep > Math.abs(this.settings.max - this.settings.min)) {
        new ErrorMessage_1.ErrorMessage('step must be lower than difference between max and min', 'validate settings method of Model');
      } else {
        this.settings.step = newStep;
      }
    }
  }

  validateIsVerticalOrError(newIsVertical) {
    if (newIsVertical !== undefined) {
      this.settings.isVertical = newIsVertical;
    }
  }

  validateThumbLabelOrError(newHideThumbLabel) {
    if (newHideThumbLabel !== undefined) {
      this.settings.hideThumbLabel = newHideThumbLabel;
    }
  }

  convertFromPercentToValue(valueInPercent, thumbWidthInPercent) {
    if (valueInPercent <= 0) {
      return this.getMin();
    }

    if (valueInPercent >= 100) {
      return this.getMax();
    }

    let del = 1;

    if (this.getStep() != 0) {
      del = 1.0 / this.getStep();
    }

    const diapason = Math.abs(this.getMax() - this.getMin());
    const res = Math.round(+(diapason * valueInPercent / (100 - thumbWidthInPercent) + this.getMin()).toFixed(Utils_1.Utils.numDigitsAfterDecimal(this.getStep())) * del) / del;
    if (res < this.getMin()) return this.getMin();
    if (res > this.getMax()) return this.getMax();
    return res;
  }

}

exports.Model = Model;

/***/ }),

/***/ "./model/defaultSettings.ts":
/*!**********************************!*\
  !*** ./model/defaultSettings.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSettings = void 0;
const defaultSettings = {
  min: 0,
  max: 10,
  from: 5,
  step: 1,
  to: 8,
  isRange: false,
  isVertical: false,
  hideThumbLabel: false
};
exports.defaultSettings = defaultSettings;

/***/ }),

/***/ "./observers/EventObservable.ts":
/*!**************************************!*\
  !*** ./observers/EventObservable.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventObservable = void 0;

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

  notifyObservers(msg, settings, width) {
    this.observers.forEach(elem => {
      if (elem && "handleEvent" in elem) {
        elem.handleEvent(msg, settings, width);
      }
    });
  }

}

exports.EventObservable = EventObservable;

/***/ }),

/***/ "./presenter/Presenter.ts":
/*!********************************!*\
  !*** ./presenter/Presenter.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presenter = void 0;

const EventObservable_1 = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");

class Presenter extends EventObservable_1.EventObservable {
  constructor(view, model) {
    super();
    this.view = view;
    this.model = model;
  }

  handleEvent(msg, s, thumbWidthInPercentage) {
    if (msg === 1
    /* UPDATE */
    ) {
        this.view.refreshView(1
        /* UPDATE */
        , JSON.parse(s));
        this.notifyObservers(1
        /* UPDATE */
        , this.model.getSettings(), thumbWidthInPercentage);
      } else if (msg === 4
    /* SET_FROM */
    ) {
        this.model.setFrom(JSON.parse(s).from, thumbWidthInPercentage);
        this.view.refreshView(2
        /* FROM_IS_SET */
        , JSON.parse(this.model.getSettings()));
        this.notifyObservers(1
        /* UPDATE */
        , this.model.getSettings(), thumbWidthInPercentage);
      } else if (msg === 5
    /* SET_TO */
    ) {
        this.model.setTo(JSON.parse(s).to, thumbWidthInPercentage);
        this.view.refreshView(3
        /* TO_IS_SET */
        , JSON.parse(this.model.getSettings()));
        this.notifyObservers(1
        /* UPDATE */
        , this.model.getSettings(), thumbWidthInPercentage);
      }
  }

  initialize() {
    this.view.refreshView(0
    /* INIT */
    , JSON.parse(this.model.getSettings()));
    this.notifyObservers(1
    /* UPDATE */
    , this.model.getSettings(), 0);
  }

  update(newSettings) {
    this.model.updateSettings(newSettings);
  }

}

exports.Presenter = Presenter;

/***/ }),

/***/ "./utils/ClassNaming.ts":
/*!******************************!*\
  !*** ./utils/ClassNaming.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassNaming = void 0;
const ClassNaming = {
  ROOT: 'fsd-slider',
  RANGE: 'fsd-slider__range',
  RANGE_LABEL: 'fsd-slider__range-label',
  RANGE_LABEL_SCALE: 'fsd-slider__range-label-scale',
  COLORED_RANGE: 'fsd-slider__colored-range',
  THUMB_TO: 'fsd-slider__thumb-to',
  THUMB_FROM: 'fsd-slider__thumb-from',
  THUMB_LABEL: 'fsd-slider__thumb-label',
  THUMB_VALUE: 'fsd-slider__thumb-value',
  SLIDER_IS_VERTICAL: 'fsd-slider_is_vertical',
  RANGE_IS_VERTICAL: 'fsd-slider__range_is_vertical',
  COLORED_RANGE_IS_VERTICAL: 'fsd-slider__colored-range_is_vertical',
  RANGE_LABEL_IS_VERTICAL: 'fsd-slider__range-label_is_vertical',
  THUMB_LABEL_IS_VERTICAL: 'fsd-slider__thumb-label_is_vertical',
  HIDE_ELEMENT: 'fsd-slider_element_is_hidden'
};
exports.ClassNaming = ClassNaming;

/***/ }),

/***/ "./utils/Constants.ts":
/*!****************************!*\
  !*** ./utils/Constants.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = void 0; // eslint-disable-next-line @typescript-eslint/no-namespace

var Constants;

(function (Constants) {
  Constants.NUMBER_OF_LABELS = 8;
})(Constants = exports.Constants || (exports.Constants = {}));

/***/ }),

/***/ "./utils/Utils.ts":
/*!************************!*\
  !*** ./utils/Utils.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

class Utils {
  static numDigitsAfterDecimal(value) {
    if (value) {
      return (value.toString().split('.')[1] || '').length;
    } else return 0;
  }

  static convertFromInputToNumber(value) {
    const number = parseFloat(String(value));

    if (isNaN(number)) {
      return undefined;
    }

    return number;
  }

  static convertFromInputToBoolean(value) {
    return Boolean(value);
  }

}

exports.Utils = Utils;

/***/ }),

/***/ "./view/View.ts":
/*!**********************!*\
  !*** ./view/View.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

const Slider_1 = __webpack_require__(/*! ./modules/Slider */ "./view/modules/Slider.ts");

const EventObservable_1 = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");

const defaultSettings_1 = __webpack_require__(/*! ../model/defaultSettings */ "./model/defaultSettings.ts");

class View extends EventObservable_1.EventObservable {
  constructor(root) {
    super();
    this.viewSettings = Object.assign({}, defaultSettings_1.defaultSettings);
    this.rootElem = root;
    this.slider = new Slider_1.Slider(this.rootElem);
    this.slider.addObserver(this);
  }

  handleEvent(msg, settings) {
    this.notifyObservers(msg, settings, this.getThumbWidthInPercentage());
  }

  render(s) {
    this.slider.render(JSON.stringify(s));
  }

  refreshView(msg, settings) {
    if (msg === 0
    /* INIT */
    || msg === 1
    /* UPDATE */
    ) {
        this.updateViewSettings(settings);
        this.render(this.viewSettings);
      } else if (msg === 2
    /* FROM_IS_SET */
    ) {
        this.slider.setValueToLabelThumbFrom(settings.from);
      } else if (msg === 3
    /* TO_IS_SET */
    ) {
        this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);
      }
  }

  getSlider() {
    return this.slider;
  }

  getThumbWidthInPercentage() {
    return this.slider.getThumbWidthInPercentage();
  }

  updateViewSettings(s) {
    this.viewSettings = Object.assign(this.viewSettings, s);
  }

}

exports.View = View;

/***/ }),

/***/ "./view/modules/ColoredRange.ts":
/*!**************************************!*\
  !*** ./view/modules/ColoredRange.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColoredRange = void 0;

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

class ColoredRange {
  constructor() {
    this.coloredRange = document.createElement('div');
    this.coloredRange.classList.add(ClassNaming_1.ClassNaming.COLORED_RANGE);
  }

  getColoredRange() {
    return this.coloredRange;
  }

  setColoredRange(viewSettings, thumbFrom, thumbTo, thumbLength) {
    if (viewSettings.isRange) {
      if (viewSettings.isVertical) {
        this.getColoredRange().style.top = thumbFrom.style.top;
        this.getColoredRange().style.left = 0 + '%';
        this.getColoredRange().style.width = 100 + '%';
        this.getColoredRange().style.height = Number.parseInt(thumbTo.style.top) - Number.parseInt(thumbFrom.style.top) + thumbLength / 2 + '%';
      } else {
        this.getColoredRange().style.left = thumbFrom.style.left;
        this.getColoredRange().style.top = 0 + '%';
        this.getColoredRange().style.height = 100 + '%';
        this.getColoredRange().style.width = Number.parseInt(thumbTo.style.left) - Number.parseInt(thumbFrom.style.left) + thumbLength / 2 + '%';
      }
    } else {
      if (viewSettings.isVertical) {
        this.getColoredRange().style.left = 0 + '%';
        this.getColoredRange().style.width = 100 + '%';
        this.getColoredRange().style.height = Number.parseInt(thumbFrom.style.top) + thumbLength / 2 + '%';
      } else {
        this.getColoredRange().style.width = Number.parseInt(thumbFrom.style.left) + thumbLength / 2 + '%';
        this.getColoredRange().style.top = 0 + '%';
        this.getColoredRange().style.height = 100 + '%';
      }
    }
  }

}

exports.ColoredRange = ColoredRange;

/***/ }),

/***/ "./view/modules/Range.ts":
/*!*******************************!*\
  !*** ./view/modules/Range.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = void 0;

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

const ColoredRange_1 = __webpack_require__(/*! ./ColoredRange */ "./view/modules/ColoredRange.ts");

const Thumb_1 = __webpack_require__(/*! ./Thumb */ "./view/modules/Thumb.ts");

class Range {
  constructor(settings) {
    const div = document.createElement('div');
    div.classList.add(ClassNaming_1.ClassNaming.RANGE);
    this.range = div;
    this.viewSettings = settings;
    this.coloredRange = new ColoredRange_1.ColoredRange();
    this.thumbTo = new Thumb_1.Thumb(ClassNaming_1.ClassNaming.THUMB_TO);
    this.thumbFrom = new Thumb_1.Thumb(ClassNaming_1.ClassNaming.THUMB_FROM);
    this.getRange().appendChild(this.coloredRange.getColoredRange());
  }

  getRange() {
    return this.range;
  }

  render(settings) {
    Object.assign(this.viewSettings, JSON.parse(settings));
    this.getRange().appendChild(this.thumbFrom.getThumb());

    if (this.viewSettings.isRange) {
      this.getRange().appendChild(this.thumbTo.getThumb());
    }
  }

  setVertical() {
    this.range.classList.add(ClassNaming_1.ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.add(ClassNaming_1.ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setVertical();

    if (this.viewSettings.isRange) {
      this.thumbTo.setVertical();
    }
  }

  setHorizontal() {
    this.range.classList.remove(ClassNaming_1.ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.remove(ClassNaming_1.ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setHorizontal();

    if (this.viewSettings.isRange) {
      this.thumbTo.setHorizontal();
    }
  }

  setColoredRange(widthThumb) {
    this.coloredRange.setColoredRange(this.viewSettings, this.thumbFrom.getThumb(), this.thumbTo.getThumb(), widthThumb);
  }

  getThumbFrom() {
    return this.thumbFrom.getThumb();
  }

  getThumbTo() {
    return this.thumbTo.getThumb();
  }

  hideLabel() {
    this.thumbFrom.hideLabel();

    if (this.viewSettings.isRange) {
      this.thumbTo.hideLabel();
    }
  }

  showLabel() {
    this.thumbFrom.showLabel();

    if (this.viewSettings.isRange) {
      this.thumbTo.showLabel();
    }
  }

  setValueToLabelThumbFrom(value) {
    this.thumbFrom.setValueToLabel(value);
  }

  setValueToLabelThumbTo(value) {
    this.thumbTo.setValueToLabel(value);
  }

  setThumbPositionFrom(shift, isVertical) {
    this.thumbFrom.setThumbPosition(shift, isVertical);
  }

  setThumbPositionTo(shift, isVertical) {
    this.thumbTo.setThumbPosition(shift, isVertical);
  }

}

exports.Range = Range;

/***/ }),

/***/ "./view/modules/RangeLabel.ts":
/*!************************************!*\
  !*** ./view/modules/RangeLabel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeLabel = void 0;

const defaultSettings_1 = __webpack_require__(/*! ../../model/defaultSettings */ "./model/defaultSettings.ts");

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

const Constants_1 = __webpack_require__(/*! ../../utils/Constants */ "./utils/Constants.ts");

const Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./utils/Utils.ts");

class RangeLabel {
  constructor(viewSettings) {
    this.labels = [];
    this.viewSettings = Object.assign(defaultSettings_1.defaultSettings, viewSettings);
    this.initComponents();
  }

  render(settings) {
    this.viewSettings = Object.assign(this.viewSettings, settings);
    this.setMinRange(this.viewSettings.min);
    this.setMaxRange(this.viewSettings.max);
    const diapason = Math.abs(this.viewSettings.max - this.viewSettings.min);
    const step = diapason / (Constants_1.Constants.NUMBER_OF_LABELS + 1);
    let initialValue = this.viewSettings.min;

    for (let i = 0; i < this.labels.length; i++) {
      initialValue += step;
      this.labels[i].innerText = Number(Math.round(initialValue * 100) / 100).toFixed(Utils_1.Utils.numDigitsAfterDecimal(this.viewSettings.step));
    }
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

  initComponents() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL);
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_SCALE);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_SCALE);
    this.rangeLabelContainer.appendChild(this.minLabel);

    for (let i = 0; i < Constants_1.Constants.NUMBER_OF_LABELS; i++) {
      const mark = document.createElement('span');
      mark.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_SCALE);
      this.labels.push(mark);
      this.rangeLabelContainer.appendChild(mark);
    }

    this.rangeLabelContainer.appendChild(this.maxLabel);
  }

  setVertical() {
    this.getRangeLabel().classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_IS_VERTICAL);
  }

  setHorizontal() {
    this.getRangeLabel().classList.remove(ClassNaming_1.ClassNaming.RANGE_LABEL_IS_VERTICAL);
  }

}

exports.RangeLabel = RangeLabel;

/***/ }),

/***/ "./view/modules/Slider.ts":
/*!********************************!*\
  !*** ./view/modules/Slider.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

const Range_1 = __webpack_require__(/*! ./Range */ "./view/modules/Range.ts");

const RangeLabel_1 = __webpack_require__(/*! ./RangeLabel */ "./view/modules/RangeLabel.ts");

const DefaultSettings_1 = __webpack_require__(/*! ../../model/DefaultSettings */ "./model/DefaultSettings.ts");

const EventObservable_1 = __webpack_require__(/*! ../../observers/EventObservable */ "./observers/EventObservable.ts");

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

class Slider extends EventObservable_1.EventObservable {
  constructor(rootElem) {
    super();
    this.settings = Object.assign({}, DefaultSettings_1.defaultSettings);
    this.rootElem = rootElem;
    this.resPercentage = 0; //this.stepInPx = 0;

    this.sliderLengthInPx = 0;
    this.initSliderComponents();
  }

  render(settings) {
    this.settings = Object.assign(this.settings, JSON.parse(settings));
    this.container.classList.add(ClassNaming_1.ClassNaming.ROOT);
    this.container.appendChild(this.range.getRange());
    this.range.render(settings);
    this.rangeLabel.render(JSON.parse(settings));
    this.container.appendChild(this.rangeLabel.getRangeLabel());
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

    this.bindEvents(); //this.stepInPx = this.getSliderLengthInPx() / (Math.abs((this.settings.max - this.settings.min) / this.settings.step));

    this.sliderLengthInPx = this.getSliderLengthInPx();
    this.range.setValueToLabelThumbFrom(this.settings.from);
    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from), this.settings.isVertical);

    if (this.settings.isRange) {
      this.range.setValueToLabelThumbTo(this.settings.to);
      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);
    }

    this.setColoredRange();
  }

  convertFromValueToPercent(value) {
    return (100 - this.getThumbWidthInPercentage()) / Math.abs(this.settings.max - this.settings.min) * Math.abs(value - this.settings.min);
  }

  initSliderComponents() {
    this.range = new Range_1.Range(this.settings);
    this.rangeLabel = new RangeLabel_1.RangeLabel(this.settings);
    this.container = document.createElement('div');
  }

  bindEvents() {
    this.getRangeLabel().addEventListener('mousedown', this.handleRange.bind(this));
    this.getRange().addEventListener('mousedown', this.handleRange.bind(this));
  }

  handleRange(e) {
    let clickedPos, fromPos;
    let toPos;
    const bottom = this.sliderLengthInPx - this.getThumbWidthInPx();

    if (this.settings.isVertical) {
      clickedPos = e.clientY - this.getRange().getBoundingClientRect().top;
      fromPos = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2);
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2) : bottom;
    } else {
      clickedPos = e.clientX - this.getRange().getBoundingClientRect().left;
      fromPos = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2);
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2) : bottom;
    }

    if (clickedPos > bottom) {
      clickedPos = bottom;
    }

    if (this.settings.isRange) {
      if (fromPos > toPos) {
        fromPos = toPos;
        this.dispatchEvent(clickedPos, 'thumbTo');
      }
    }

    if (!this.settings.isRange) {
      this.dispatchEvent(clickedPos, 'thumbFrom');
    } else {
      if (clickedPos > toPos) {
        this.dispatchEvent(clickedPos, 'thumbTo');
      }

      if (clickedPos < fromPos) {
        this.dispatchEvent(clickedPos, 'thumbFrom');
      } else if (clickedPos > fromPos && clickedPos < toPos) {
        const pivot = (toPos - fromPos) / 2;

        if (clickedPos < pivot + fromPos && clickedPos < toPos) {
          this.dispatchEvent(clickedPos, 'thumbFrom');
        } else if (clickedPos > pivot + fromPos && clickedPos < toPos) {
          this.dispatchEvent(clickedPos, 'thumbTo');
        }
      }
    }
  }

  convertFromPxToPercent(valueInPX) {
    return valueInPX / this.sliderLengthInPx * 100;
  }

  getThumbWidthInPercentage() {
    if (this.settings.isVertical) {
      return this.getThumbFrom().offsetHeight / this.sliderLengthInPx * 100;
    } else {
      return this.getThumbFrom().offsetWidth / this.sliderLengthInPx * 100;
    }
  }

  getSliderLengthInPx() {
    if (this.settings.isVertical) {
      return this.getRange().offsetHeight;
    } else {
      return this.getRange().offsetWidth;
    }
  }

  dispatchEvent(shift, type) {
    this.resPercentage = this.convertFromPxToPercent(shift);

    if (type === "thumbFrom") {
      this.range.setThumbPositionFrom(this.resPercentage, this.settings.isVertical);
      this.notifyObservers(4
      /* SET_FROM */
      , JSON.stringify({
        from: this.resPercentage
      }), 0);
    } else {
      this.range.setThumbPositionTo(this.resPercentage, this.settings.isVertical);
      this.notifyObservers(5
      /* SET_TO */
      , JSON.stringify({
        to: this.resPercentage
      }), 0);
    }

    this.setColoredRange();
  }

  getRange() {
    return this.range.getRange();
  }

  setValueToLabelThumbFrom(value) {
    this.range.setValueToLabelThumbFrom(value);
  }

  setValueToLabelThumbTo(value) {
    this.range.setValueToLabelThumbTo(value);
  }

  getRangeLabel() {
    return this.rangeLabel.getRangeLabel();
  }

  getThumbFrom() {
    return this.range.getThumbFrom();
  }

  getThumbTo() {
    return this.range.getThumbTo();
  }

  setVertical() {
    this.container.classList.add(ClassNaming_1.ClassNaming.SLIDER_IS_VERTICAL);
    this.range.setVertical();
    this.rangeLabel.setVertical();
  }

  setHorizontal() {
    this.container.classList.remove(ClassNaming_1.ClassNaming.SLIDER_IS_VERTICAL);
    this.range.setHorizontal();
    this.rangeLabel.setHorizontal();
  }

  setColoredRange() {
    this.range.setColoredRange(this.getThumbWidthInPercentage());
  }

  getThumbWidthInPx() {
    return this.getThumbFrom().offsetWidth;
  }

}

exports.Slider = Slider;

/***/ }),

/***/ "./view/modules/Thumb.ts":
/*!*******************************!*\
  !*** ./view/modules/Thumb.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thumb = void 0;

const ThumbLabel_1 = __webpack_require__(/*! ./ThumbLabel */ "./view/modules/ThumbLabel.ts");

class Thumb {
  constructor(className) {
    this.thumb = document.createElement('div');
    this.thumb.classList.add(className);
    this.thumbLabel = new ThumbLabel_1.ThumbLabel();
    this.thumbLabelHTML = this.thumbLabel.getThumbLabelContainer();
    this.thumb.appendChild(this.thumbLabelHTML);
  }

  getThumb() {
    return this.thumb;
  }

  setThumbPosition(shift, isVertical) {
    if (isVertical) {
      this.getThumb().style.top = shift + '%';
      this.getThumb().style.left = '-25%';
    } else {
      this.getThumb().style.left = shift + '%';
      this.getThumb().style.top = '-25%';
    }
  }

  setVertical() {
    this.thumbLabel.setVertical();
  }

  setHorizontal() {
    this.thumbLabel.setHorizontal();
  }

  hideLabel() {
    this.thumbLabel.hideLabel();
  }

  showLabel() {
    this.thumbLabel.showLabel();
  }

  setValueToLabel(value) {
    this.thumbLabel.setValueToLabel(value);
  }

}

exports.Thumb = Thumb;

/***/ }),

/***/ "./view/modules/ThumbLabel.ts":
/*!************************************!*\
  !*** ./view/modules/ThumbLabel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbLabel = void 0;

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

class ThumbLabel {
  constructor() {
    const div = document.createElement('div');
    const divValue = document.createElement('div');
    this.thumbLabelContainer = div;
    this.thumbLabelContainer.classList.add(ClassNaming_1.ClassNaming.THUMB_LABEL);
    this.thumbLabelValue = divValue;
    this.thumbLabelValue.classList.add(ClassNaming_1.ClassNaming.THUMB_VALUE);
    this.thumbLabelContainer.appendChild(this.thumbLabelValue);
  }

  getThumbLabelContainer() {
    return this.thumbLabelContainer;
  }

  setValueToLabel(value) {
    this.thumbLabelValue.innerText = '' + value;
  }

  hideLabel() {
    this.thumbLabelContainer.classList.add(ClassNaming_1.ClassNaming.HIDE_ELEMENT);
  }

  showLabel() {
    this.thumbLabelContainer.classList.remove(ClassNaming_1.ClassNaming.HIDE_ELEMENT);
  }

  setVertical() {
    this.thumbLabelContainer.classList.add(ClassNaming_1.ClassNaming.THUMB_LABEL_IS_VERTICAL);
  }

  setHorizontal() {
    this.thumbLabelContainer.classList.remove(ClassNaming_1.ClassNaming.THUMB_LABEL_IS_VERTICAL);
  }

}

exports.ThumbLabel = ThumbLabel;

/***/ })

}]);
//# sourceMappingURL=lib~main.js.map