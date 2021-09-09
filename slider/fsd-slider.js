/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./fsd-slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./error-message/ErrorMessage.ts":
/*!***************************************!*\
  !*** ./error-message/ErrorMessage.ts ***!
  \***************************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
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



/***/ }),

/***/ "./fsd-slider.js":
/*!***********************!*\
  !*** ./fsd-slider.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_fsd_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/fsd-slider.scss */ "./styles/fsd-slider.scss");
/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/View */ "./view/View.ts");
/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Model */ "./model/Model.ts");
/* harmony import */ var _presenter_Presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/Presenter */ "./presenter/Presenter.ts");
/* eslint-disable no-undef */




(function ($) {
  var FsdSlider = function (root, settings,callback) {
    // eslint-disable-next-line no-undef
    let model = new _model_Model__WEBPACK_IMPORTED_MODULE_2__["Model"](settings);
    let view = new _view_View__WEBPACK_IMPORTED_MODULE_1__["View"](root);
    this.presenter = new _presenter_Presenter__WEBPACK_IMPORTED_MODULE_3__["Presenter"](view, model);
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

/***/ }),

/***/ "./model/DefaultSettings.ts":
/*!**********************************!*\
  !*** ./model/DefaultSettings.ts ***!
  \**********************************/
/*! exports provided: defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
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


/***/ }),

/***/ "./model/Model.ts":
/*!************************!*\
  !*** ./model/Model.ts ***!
  \************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./utils/Utils.ts");
/* harmony import */ var _DefaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultSettings */ "./model/DefaultSettings.ts");
/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ "./error-message/ErrorMessage.ts");





class Model extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__["EventObservable"] {
  constructor(settings) {
    super();
    this.settings = Object.assign({}, _DefaultSettings__WEBPACK_IMPORTED_MODULE_2__["defaultSettings"]);
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
    const newMin = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToNumber(settings.min);
    const newMax = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToNumber(settings.max);
    const newFrom = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToNumber(settings.from);
    const newTo = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToNumber(settings.to);
    const newStep = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToNumber(settings.step);
    const newIsVertical = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToBoolean(settings.isVertical);
    const newHideThumbLabel = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToBoolean(settings.hideThumbLabel);
    this.settings.isRange = settings.isRange ? _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].convertFromInputToBoolean(settings.isRange) : this.settings.isRange;
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
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('unacceptable value,min value in settings more than max value', 'validate settings method of Model');
      } else if (newMin > this.settings.from) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('unacceptable value,min value in settings more than from value', 'validate settings method of Model');
      } else {
        this.settings.min = newMin;
      }
    }
  }

  validateMaxOrError(newMax) {
    if (newMax) {
      if (newMax <= this.settings.min) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('unacceptable value,max value in settings lower than min value', 'validate settings method of Model');
      } else if (newMax <= this.settings.to && this.settings.isRange) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('unacceptable value,max value in settings lower than to value', 'validate settings method of Model');
      } else if (newMax <= this.settings.from) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('unacceptable value,max value in settings lower than from value', 'validate settings method of Model');
      } else {
        this.settings.max = newMax;
      }
    }
  }

  validateFromOrError(newFrom) {
    if (newFrom) {
      const max = this.settings.isRange ? this.settings.to : this.settings.max;

      if (newFrom <= this.settings.min + this.settings.step || newFrom >= max + this.settings.step) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('from is invalid', 'validate settings method of Model');
        this.settings.from = this.settings.min;
      } else {
        this.settings.from = newFrom;
      }
    }
  }

  validateToOrError(newTo) {
    if (newTo) {
      if (newTo > this.settings.max) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('to must be lower than max', 'validate settings method of Model');
      } else if (newTo <= this.settings.min) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('to must be lower than max', 'validate settings method of Model');
      } else if (this.settings.isRange) {
        if (newTo <= this.settings.from) {
          new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('to must be lower than max', 'validate settings method of Model');
        } else {
          this.settings.to = newTo;
        }
      }
    }
  }

  validateStepOrError(newStep) {
    if (newStep) {
      if (newStep < 0) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('step must be positive', 'validate settings method of Model');
      } else if (newStep > Math.abs(this.settings.max - this.settings.min)) {
        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"]('step must be lower than difference between max and min', 'validate settings method of Model');
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
    const res = Math.round(+(diapason * valueInPercent / (100 - thumbWidthInPercent) + this.getMin()).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].numDigitsAfterDecimal(this.getStep())) * del) / del;
    if (res < this.getMin()) return this.getMin();
    if (res > this.getMax()) return this.getMax();
    return res;
  }

}



/***/ }),

/***/ "./model/defaultSettings.ts":
/*!**********************************!*\
  !*** ./model/defaultSettings.ts ***!
  \**********************************/
/*! exports provided: defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
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


/***/ }),

/***/ "./observers/EventObservable.ts":
/*!**************************************!*\
  !*** ./observers/EventObservable.ts ***!
  \**************************************/
/*! exports provided: EventObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventObservable", function() { return EventObservable; });
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



/***/ }),

/***/ "./presenter/Presenter.ts":
/*!********************************!*\
  !*** ./presenter/Presenter.ts ***!
  \********************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");


class Presenter extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__["EventObservable"] {
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



/***/ }),

/***/ "./styles/fsd-slider.scss":
/*!********************************!*\
  !*** ./styles/fsd-slider.scss ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./utils/ClassNaming.ts":
/*!******************************!*\
  !*** ./utils/ClassNaming.ts ***!
  \******************************/
/*! exports provided: ClassNaming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNaming", function() { return ClassNaming; });
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


/***/ }),

/***/ "./utils/Constants.ts":
/*!****************************!*\
  !*** ./utils/Constants.ts ***!
  \****************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
// eslint-disable-next-line @typescript-eslint/no-namespace
var Constants;

(function (Constants) {
  Constants.NUMBER_OF_LABELS = 8;
  Constants.THUMB_FROM = 'thumbFrom';
  Constants.THUMB_TO = 'thumbTo';
})(Constants || (Constants = {}));

/***/ }),

/***/ "./utils/Utils.ts":
/*!************************!*\
  !*** ./utils/Utils.ts ***!
  \************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
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



/***/ }),

/***/ "./view/View.ts":
/*!**********************!*\
  !*** ./view/View.ts ***!
  \**********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider */ "./view/components/Slider.ts");
/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/EventObservable */ "./observers/EventObservable.ts");
/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/defaultSettings */ "./model/defaultSettings.ts");




class View extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__["EventObservable"] {
  constructor(root) {
    super();
    this.viewSettings = Object.assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__["defaultSettings"]);
    this.rootElem = root;
    this.slider = new _components_Slider__WEBPACK_IMPORTED_MODULE_0__["Slider"](this.rootElem);
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



/***/ }),

/***/ "./view/components/ColoredRange.ts":
/*!*****************************************!*\
  !*** ./view/components/ColoredRange.ts ***!
  \*****************************************/
/*! exports provided: ColoredRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredRange", function() { return ColoredRange; });
/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");


class ColoredRange {
  constructor() {
    this.coloredRange = document.createElement('div');
    this.coloredRange.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].COLORED_RANGE);
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



/***/ }),

/***/ "./view/components/Range.ts":
/*!**********************************!*\
  !*** ./view/components/Range.ts ***!
  \**********************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");
/* harmony import */ var _ColoredRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColoredRange */ "./view/components/ColoredRange.ts");
/* harmony import */ var _Thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumb */ "./view/components/Thumb.ts");




class Range {
  constructor(settings) {
    const div = document.createElement('div');
    div.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].RANGE);
    this.range = div;
    this.viewSettings = settings;
    this.coloredRange = new _ColoredRange__WEBPACK_IMPORTED_MODULE_1__["ColoredRange"]();
    this.thumbTo = new _Thumb__WEBPACK_IMPORTED_MODULE_2__["Thumb"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].THUMB_TO);
    this.thumbFrom = new _Thumb__WEBPACK_IMPORTED_MODULE_2__["Thumb"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].THUMB_FROM);
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
    this.range.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].COLORED_RANGE_IS_VERTICAL);
    this.thumbFrom.setVertical();

    if (this.viewSettings.isRange) {
      this.thumbTo.setVertical();
    }
  }

  setHorizontal() {
    this.range.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].COLORED_RANGE_IS_VERTICAL);
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



/***/ }),

/***/ "./view/components/RangeLabel.ts":
/*!***************************************!*\
  !*** ./view/components/RangeLabel.ts ***!
  \***************************************/
/*! exports provided: RangeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLabel", function() { return RangeLabel; });
/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/defaultSettings */ "./model/defaultSettings.ts");
/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Constants */ "./utils/Constants.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Utils */ "./utils/Utils.ts");





class RangeLabel {
  constructor(viewSettings) {
    this.labels = [];
    this.viewSettings = Object.assign(_model_defaultSettings__WEBPACK_IMPORTED_MODULE_0__["defaultSettings"], viewSettings);
    this.initComponents();
  }

  render(settings) {
    this.viewSettings = Object.assign(this.viewSettings, settings);
    this.setMinRange(this.viewSettings.min);
    this.setMaxRange(this.viewSettings.max);
    const diapason = Math.abs(this.viewSettings.max - this.viewSettings.min);
    const step = diapason / (_utils_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].NUMBER_OF_LABELS + 1);
    let initialValue = this.viewSettings.min;

    for (let i = 0; i < this.labels.length; i++) {
      initialValue += step;
      this.labels[i].innerText = Number(Math.round(initialValue * 100) / 100).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].numDigitsAfterDecimal(this.viewSettings.step));
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
    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__["ClassNaming"].RANGE_LABEL);
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__["ClassNaming"].RANGE_LABEL_SCALE);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__["ClassNaming"].RANGE_LABEL_SCALE);
    this.rangeLabelContainer.appendChild(this.minLabel);

    for (let i = 0; i < _utils_Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].NUMBER_OF_LABELS; i++) {
      const mark = document.createElement('span');
      mark.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__["ClassNaming"].RANGE_LABEL_SCALE);
      this.labels.push(mark);
      this.rangeLabelContainer.appendChild(mark);
    }

    this.rangeLabelContainer.appendChild(this.maxLabel);
  }

  setVertical() {
    this.getRangeLabel().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__["ClassNaming"].RANGE_LABEL_IS_VERTICAL);
  }

  setHorizontal() {
    this.getRangeLabel().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__["ClassNaming"].RANGE_LABEL_IS_VERTICAL);
  }

}



/***/ }),

/***/ "./view/components/Slider.ts":
/*!***********************************!*\
  !*** ./view/components/Slider.ts ***!
  \***********************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range */ "./view/components/Range.ts");
/* harmony import */ var _RangeLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeLabel */ "./view/components/RangeLabel.ts");
/* harmony import */ var _model_DefaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/DefaultSettings */ "./model/DefaultSettings.ts");
/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../observers/EventObservable */ "./observers/EventObservable.ts");
/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Constants */ "./utils/Constants.ts");







class Slider extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__["EventObservable"] {
  constructor(rootElem) {
    super();
    this.settings = Object.assign({}, _model_DefaultSettings__WEBPACK_IMPORTED_MODULE_2__["defaultSettings"]);
    this.rootElem = rootElem;
    this.resPercentage = 0;
    this.stepInPx = 0;
    this.sliderLengthInPx = 0;
    this.initSliderComponents();
  }

  render(settings) {
    this.settings = Object.assign(this.settings, JSON.parse(settings));
    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__["ClassNaming"].ROOT);
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

    this.bindEvents();
    this.stepInPx = this.getSliderLengthInPx() / Math.abs((this.settings.max - this.settings.min) / this.settings.step);
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
    this.range = new _Range__WEBPACK_IMPORTED_MODULE_0__["Range"](this.settings);
    this.rangeLabel = new _RangeLabel__WEBPACK_IMPORTED_MODULE_1__["RangeLabel"](this.settings);
    this.container = document.createElement('div');
  }

  bindEvents() {
    this.handleRangeBinded = this.handleRange.bind(this, 'range');
    this.handleRangeLabelBinded = this.handleRange.bind(this, 'rangeLabel');
    this.getRangeLabel().addEventListener('mousedown', this.handleRangeLabelBinded);
    this.getRange().addEventListener('mousedown', this.handleRangeBinded);
  }

  bindExtraListeners() {
    this.moveHandlerBinded = this.moveHandler.bind(this);
    this.removeHandlerBinded = this.removeHandler.bind(this);
    this.getRange().addEventListener('mousemove', this.moveHandlerBinded);
    this.getRange().addEventListener('mouseup', this.removeHandlerBinded);
  }

  handleRange(type, e) {
    if (e instanceof MouseEvent) {
      let clickedPos;
      const pos = this.getElemsPos();
      let fromPos = pos.fromPos;
      const toPos = pos.toPos;
      const bottom = pos.bottom;

      if (this.settings.isVertical) {
        clickedPos = e.clientY - this.getRange().getBoundingClientRect().top;
      } else {
        clickedPos = e.clientX - this.getRange().getBoundingClientRect().left;
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

      if (type === 'range') {
        this.bindExtraListeners();
      }
    }
  }

  moveHandler(e) {
    let newPos;
    const pos = this.getElemsPos();
    const fromPos = pos.fromPos;
    const toPos = pos.toPos;
    const bottom = pos.bottom;
    let thumbType = '';

    if (e instanceof MouseEvent) {
      if (this.settings.isVertical) {
        newPos = e.clientY - this.getRange().getBoundingClientRect().top;
      } else {
        newPos = e.clientX - this.getRange().getBoundingClientRect().left;
      }

      if (!this.settings.isRange) {
        if (newPos < 0) {
          newPos = 0;
        }

        if (newPos > bottom) {
          newPos = bottom;
        }

        thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_FROM;
        this.dispatchEvent(newPos, thumbType);
      } else {
        if (newPos < fromPos) thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_FROM;
        if (newPos > toPos) thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_TO;

        if (newPos >= fromPos && newPos <= toPos) {
          const pivot = (toPos - fromPos) / 2;
          if (newPos < pivot + fromPos) thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_FROM;else if (newPos >= pivot + fromPos) thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_TO;
        }

        if (thumbType === _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_FROM) {
          if (newPos < 0) newPos = 0;
          if (newPos > toPos) newPos = toPos;
        }

        if (thumbType === _utils_Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].THUMB_TO) {
          if (newPos < fromPos) newPos = fromPos;
          if (newPos > bottom) newPos = bottom;
        }

        if (Math.abs(newPos % this.stepInPx) <= 0.2 * this.stepInPx) {
          this.dispatchEvent(newPos, thumbType);
        }
      }
    }
  }

  removeHandler() {
    this.getRange().removeEventListener('mousemove', this.moveHandlerBinded);
    this.getRange().removeEventListener('mouseup', this.removeHandlerBinded);
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

  getElemsPos() {
    let fromPos, toPos;
    const bottom = this.sliderLengthInPx - this.getThumbWidthInPx();

    if (this.settings.isVertical) {
      fromPos = this.getThumbFrom().getBoundingClientRect().top - this.getRange().getBoundingClientRect().top;
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().top - this.getRange().getBoundingClientRect().top : bottom;
    } else {
      fromPos = this.getThumbFrom().getBoundingClientRect().left - this.getRange().getBoundingClientRect().left;
      toPos = this.settings.isRange ? this.getThumbTo().getBoundingClientRect().left - this.getRange().getBoundingClientRect().left : bottom;
    }

    return {
      fromPos,
      toPos,
      bottom
    };
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
    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__["ClassNaming"].SLIDER_IS_VERTICAL);
    this.range.setVertical();
    this.rangeLabel.setVertical();
  }

  setHorizontal() {
    this.container.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__["ClassNaming"].SLIDER_IS_VERTICAL);
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



/***/ }),

/***/ "./view/components/Thumb.ts":
/*!**********************************!*\
  !*** ./view/components/Thumb.ts ***!
  \**********************************/
/*! exports provided: Thumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumb", function() { return Thumb; });
/* harmony import */ var _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbLabel */ "./view/components/ThumbLabel.ts");


class Thumb {
  constructor(className) {
    this.thumb = document.createElement('div');
    this.thumb.classList.add(className);
    this.thumbLabel = new _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__["ThumbLabel"]();
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



/***/ }),

/***/ "./view/components/ThumbLabel.ts":
/*!***************************************!*\
  !*** ./view/components/ThumbLabel.ts ***!
  \***************************************/
/*! exports provided: ThumbLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbLabel", function() { return ThumbLabel; });
/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");


class ThumbLabel {
  constructor() {
    const div = document.createElement('div');
    const divValue = document.createElement('div');
    this.thumbLabelContainer = div;
    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].THUMB_LABEL);
    this.thumbLabelValue = divValue;
    this.thumbLabelValue.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].THUMB_VALUE);
    this.thumbLabelContainer.appendChild(this.thumbLabelValue);
  }

  getThumbLabelContainer() {
    return this.thumbLabelContainer;
  }

  setValueToLabel(value) {
    this.thumbLabelValue.innerText = '' + value;
  }

  hideLabel() {
    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].HIDE_ELEMENT);
  }

  showLabel() {
    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].HIDE_ELEMENT);
  }

  setVertical() {
    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].THUMB_LABEL_IS_VERTICAL);
  }

  setHorizontal() {
    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__["ClassNaming"].THUMB_LABEL_IS_VERTICAL);
  }

}



/***/ })

/******/ });
//# sourceMappingURL=fsd-slider.js.map