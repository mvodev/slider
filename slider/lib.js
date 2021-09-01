(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fsd-slider", [], factory);
	else if(typeof exports === 'object')
		exports["fsd-slider"] = factory();
	else
		root["fsd-slider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"lib": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpfsd_slider"] = window["webpackJsonpfsd_slider"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./fsd-slider.js","vendors~lib"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
    console.error(this.message + ', ' + this.whoCalled + ', ' + this.timestamp);
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



(function ($) {
  var FsdSlider = function (root, settings,callback) {
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
  hideThumbLabel: false,
  labels: []
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

const Constants_1 = __webpack_require__(/*! ../utils/Constants */ "./utils/Constants.ts");

class Model extends EventObservable_1.EventObservable {
  constructor(settings) {
    super();
    this.settings = Object.assign({}, DefaultSettings_1.defaultSettings);
    this.validateSettings(settings);
    this.settings.labels = this.calculateArrayLabels();
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
    this.settings.labels = this.calculateArrayLabels();
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

  calculateArrayLabels() {
    const result = [];
    let del = 1;

    if (this.getStep() != 0) {
      del = 1.0 / this.getStep();
    }

    const step = Math.round(+(Math.abs(this.getMax() - this.getMin()) / Constants_1.Constants.NUMBER_OF_LABELS).toFixed(Utils_1.Utils.numDigitsAfterDecimal(this.getStep())) * del) / del;
    let initial = this.getMin();

    for (let i = 0; i < Constants_1.Constants.NUMBER_OF_LABELS - 1; i++) {
      initial += step;
      result.push(initial);
    }

    return result;
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
  hideThumbLabel: false,
  labels: []
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
  }

  handleEvent(msg, settings) {
    this.notifyObservers(msg, settings, this.getThumbWidthInPercentage());
  }

  render(s) {
    this.slider.addObserver(this);
    this.slider.render(JSON.stringify(s));

    if (this.viewSettings.hideThumbLabel) {
      this.slider.getThumbLabelFrom().hideLabel();

      if (this.viewSettings.isRange) {
        this.slider.getThumbLabelTo().hideLabel();
      }
    }

    if (this.viewSettings.isVertical) {
      this.slider.setVertical();
    } else {
      this.slider.setHorizontal();
    }
  }

  refreshView(msg, settings) {
    if (msg === 0
    /* INIT */
    ) {
        this.updateViewSettings(settings);
        this.render(this.viewSettings);
        this.setColoredRange();
      }

    if (msg === 0
    /* INIT */
    || msg === 1
    /* UPDATE */
    ) {
        this.updateViewSettings(settings);
        this.render(this.viewSettings);

        if (!settings.hideThumbLabel) {
          this.slider.getThumbLabelFrom().showLabel();
          this.setThumbToValue(settings, 'thumbFrom');

          if (settings.isRange) {
            this.setThumbToValue(settings, 'thumbTo');
            this.slider.getThumbLabelTo().showLabel();
          }
        } else {
          this.slider.getThumbLabelFrom().hideLabel();
          this.setThumbToValue(settings, 'thumbFrom');

          if (settings.isRange) {
            this.slider.getThumbLabelTo().hideLabel();
            this.setThumbToValue(settings, 'thumbTo');
          }
        }

        this.slider.setMinRange(settings.min);
        this.slider.setMaxRange(settings.max);
        this.slider.setNumberLabels(settings.labels);
        this.slider.setValueToLabelThumbFrom(settings.from);

        if (settings.isRange) {
          this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);

          if (settings.isVertical) {
            this.getThumbTo().style.top = Math.abs((settings.to !== undefined ? settings.to : settings.from) - settings.min) / Math.abs(settings.max - settings.min) * (100 - this.getThumbWidthInPercentage()) + '%';
            this.getThumbFrom().style.top = Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min) * 100 + '%';
          } else {
            this.getThumbTo().style.left = Math.abs((settings.to !== undefined ? settings.to : settings.from) - settings.min) / Math.abs(settings.max - settings.min) * (100 - this.getThumbWidthInPercentage()) + '%';
            this.getThumbFrom().style.left = Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min) * (100 - this.getThumbWidthInPercentage()) + '%';
          }
        } else {
          if (settings.isVertical) {
            this.getThumbFrom().style.top = Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min) * (100 - this.getThumbWidthInPercentage()) + '%';
          } else {
            this.getThumbFrom().style.left = Math.abs(settings.from - settings.min) / Math.abs(settings.max - settings.min) * (100 - this.getThumbWidthInPercentage()) + '%';
          }
        }

        this.setColoredRange();
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

  setColoredRange() {
    this.slider.setColoredRange();
  }

  convertFromValueToPercent(s, value) {
    return (100 - this.getThumbWidthInPercentage()) / Math.abs(s.max - s.min) * Math.abs(value - s.min) + '%';
  }

  setThumbToValue(s, type) {
    if (type === 'thumbFrom') {
      if (s.isVertical) {
        this.getThumbFrom().style.top = this.convertFromValueToPercent(s, s.from);
        this.getThumbFrom().style.left = '-5px';
      } else {
        this.getThumbFrom().style.left = this.convertFromValueToPercent(s, s.from);
        this.getThumbFrom().style.top = '-5px';
      }
    } else {
      if (s.isVertical) {
        console.log('this.convertFromValueToPercent(s,s.to !== undefined ? s.to : s.from)  ' + this.convertFromValueToPercent(s, s.to !== undefined ? s.to : s.from));
        this.getThumbTo().style.top = this.convertFromValueToPercent(s, s.to !== undefined ? s.to : s.from);
        this.getThumbTo().style.left = '-5px';
      } else {
        this.getThumbTo().style.left = this.convertFromValueToPercent(s, s.to !== undefined ? s.to : s.from);
        this.getThumbTo().style.top = '-5px';
      }
    }
  }

  getSlider() {
    return this.slider;
  }

  getThumbWidthInPercentage() {
    return this.slider.getThumbWidthInPercentage();
  }

  getThumbFrom() {
    return this.slider.getThumbFrom();
  }

  getThumbTo() {
    return this.slider.getThumbTo();
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

class Range {
  constructor() {
    const div = document.createElement('div');
    div.classList.add(ClassNaming_1.ClassNaming.RANGE);
    this.range = div;
  }

  getRange() {
    return this.range;
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

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

class RangeLabel {
  constructor() {
    this.initComponents();
  }

  render(settings) {
    this.rangeLabelContainer.appendChild(this.minLabel);

    if (this.rangeLabels.length === 0) {
      for (let i = 0; i < settings.labels.length; i++) {
        const marking = document.createElement('span');
        marking.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_SCALE);
        marking.innerText = settings.labels[i] + '';
        this.rangeLabelContainer.appendChild(marking);
        this.rangeLabels.push(marking);
      }
    }

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

  getRangeLabels() {
    return this.rangeLabels;
  }

  setRangeLabels(value) {
    this.rangeLabels.forEach(function (elem, index) {
      elem.innerText = value[index] + '';
    });
  }

  initComponents() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL);
    this.rangeLabels = [];
    this.minLabel = document.createElement('span');
    this.minLabel.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_SCALE);
    this.maxLabel = document.createElement('span');
    this.maxLabel.classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_SCALE);
  }

  hideRangeLabels() {
    this.rangeLabelContainer.classList.add(ClassNaming_1.ClassNaming.HIDE_ELEMENT);
  }

  showRangeLabels() {
    this.rangeLabelContainer.classList.remove(ClassNaming_1.ClassNaming.HIDE_ELEMENT);
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

const Thumb_1 = __webpack_require__(/*! ./Thumb */ "./view/modules/Thumb.ts");

const ThumbLabel_1 = __webpack_require__(/*! ./ThumbLabel */ "./view/modules/ThumbLabel.ts");

const RangeLabel_1 = __webpack_require__(/*! ./RangeLabel */ "./view/modules/RangeLabel.ts");

const ColoredRange_1 = __webpack_require__(/*! ./ColoredRange */ "./view/modules/ColoredRange.ts");

const DefaultSettings_1 = __webpack_require__(/*! ../../model/DefaultSettings */ "./model/DefaultSettings.ts");

const EventObservable_1 = __webpack_require__(/*! ../../observers/EventObservable */ "./observers/EventObservable.ts");

const ClassNaming_1 = __webpack_require__(/*! ../../utils/ClassNaming */ "./utils/ClassNaming.ts");

class Slider extends EventObservable_1.EventObservable {
  constructor(rootElem) {
    super();
    this.viewSettings = Object.assign({}, DefaultSettings_1.defaultSettings);
    this.rootElem = rootElem;
    this.resPercentage = 0;
    this.initSliderComponents();
  }

  render(settings) {
    this.viewSettings = Object.assign(this.viewSettings, JSON.parse(settings));
    this.container.classList.add(ClassNaming_1.ClassNaming.ROOT);
    this.container.appendChild(this.range.getRange());
    this.range.getRange().appendChild(this.coloredRange.getColoredRange());
    this.range.getRange().appendChild(this.thumbFrom.getThumb());
    this.thumbFrom.getThumb().appendChild(this.thumbLabelFrom.getThumbLabelContainer());

    if (this.viewSettings.isRange) {
      this.thumbTo.getThumb().appendChild(this.thumbLabelTo.getThumbLabelContainer());
      this.range.getRange().appendChild(this.thumbTo.getThumb());
    }

    this.rangeLabel.render(JSON.parse(settings));
    this.container.appendChild(this.rangeLabel.getRangeLabel());
    this.rootElem.appendChild(this.container);
    this.bindEvents();
  }

  initSliderComponents() {
    this.thumbTo = new Thumb_1.Thumb(ClassNaming_1.ClassNaming.THUMB_TO);
    this.thumbLabelTo = new ThumbLabel_1.ThumbLabel();
    this.thumbFrom = new Thumb_1.Thumb(ClassNaming_1.ClassNaming.THUMB_FROM);
    this.thumbLabelFrom = new ThumbLabel_1.ThumbLabel();
    this.range = new Range_1.Range();
    this.coloredRange = new ColoredRange_1.ColoredRange();
    this.rangeLabel = new RangeLabel_1.RangeLabel();
    this.container = document.createElement('div');
  }

  bindEvents() {
    this.getRangeLabel().addEventListener('mousedown', this.handleRange.bind(this));
    this.getThumbFrom().addEventListener('mousedown', this.handleThumb.bind(this, "thumbFrom"));

    if (this.viewSettings.isRange) {
      this.getThumbTo().addEventListener('mousedown', this.handleThumb.bind(this, "thumbTo"));
    }
  }

  setVertical() {
    this.container.classList.add(ClassNaming_1.ClassNaming.SLIDER_IS_VERTICAL);
    this.range.getRange().classList.add(ClassNaming_1.ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.add(ClassNaming_1.ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.rangeLabel.getRangeLabel().classList.add(ClassNaming_1.ClassNaming.RANGE_LABEL_IS_VERTICAL);
    this.thumbLabelFrom.getThumbLabelContainer().classList.add(ClassNaming_1.ClassNaming.THUMB_LABEL_IS_VERTICAL);

    if (this.viewSettings.isRange) {
      this.thumbLabelTo.getThumbLabelContainer().classList.add(ClassNaming_1.ClassNaming.THUMB_LABEL_IS_VERTICAL);
    }
  }

  setHorizontal() {
    this.container.classList.remove(ClassNaming_1.ClassNaming.SLIDER_IS_VERTICAL);
    this.range.getRange().classList.remove(ClassNaming_1.ClassNaming.RANGE_IS_VERTICAL);
    this.coloredRange.getColoredRange().classList.remove(ClassNaming_1.ClassNaming.COLORED_RANGE_IS_VERTICAL);
    this.rangeLabel.getRangeLabel().classList.remove(ClassNaming_1.ClassNaming.RANGE_LABEL_IS_VERTICAL);
    this.thumbLabelFrom.getThumbLabelContainer().classList.remove(ClassNaming_1.ClassNaming.THUMB_LABEL_IS_VERTICAL);

    if (this.viewSettings.isRange) {
      this.thumbLabelTo.getThumbLabelContainer().classList.remove(ClassNaming_1.ClassNaming.THUMB_LABEL_IS_VERTICAL);
    }
  }

  setColoredRange() {
    this.coloredRange.setColoredRange(this.viewSettings, this.getThumbFrom(), this.getThumbTo(), this.getThumbWidthInPercentage());
  }

  getThumbWidthInPx() {
    return this.getThumbFrom().offsetWidth;
  }

  setNumberLabels(value) {
    this.rangeLabel.setRangeLabels(value);
  }

  handleThumb(thumbType, e) {
    e.preventDefault();
    let targetElem = this.getThumbFrom();

    if (thumbType === "thumbTo") {
      targetElem = this.getThumbTo();
    }

    let shift;

    if (this.viewSettings.isVertical) {
      shift = e.clientY - targetElem.getBoundingClientRect().top;
    } else {
      shift = e.clientX - targetElem.getBoundingClientRect().left;
    }

    if (this.viewSettings.isVertical) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp); // eslint-disable-next-line @typescript-eslint/no-this-alias

      const that = this; // eslint-disable-next-line no-inner-declarations

      function onMouseMove(event) {
        let newPos = event.clientY - shift - that.getRange().getBoundingClientRect().top;

        if (thumbType === "thumbTo") {
          const fromPos = that.getThumbFrom().getBoundingClientRect().top - that.getRange().getBoundingClientRect().top;

          if (newPos < fromPos) {
            newPos = fromPos;
          }
        } else {
          if (newPos < 0) {
            newPos = 0;
          }
        }

        let bottom = that.getSliderLengthInPx() - that.getThumbWidthInPx();

        if (that.viewSettings.isRange) {
          const toPos = that.getThumbTo().getBoundingClientRect().top - that.getRange().getBoundingClientRect().top;

          if (thumbType === "thumbFrom") {
            bottom = toPos;
          }
        }

        if (newPos > bottom) {
          newPos = bottom;
        }

        that.dispatchEvent(newPos, thumbType);
      } // eslint-disable-next-line no-inner-declarations


      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    } else {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp); //eslint-disable-next-line @typescript-eslint/no-this-alias

      const that = this; //eslint-disable-next-line no-inner-declarations

      function onMouseMove(e) {
        let newPos = e.clientX - shift - that.getRange().getBoundingClientRect().left;

        if (thumbType === "thumbTo") {
          const fromPos = that.getThumbFrom().getBoundingClientRect().left - that.getRange().getBoundingClientRect().left;

          if (newPos <= fromPos) {
            newPos = fromPos;
          }
        } else {
          if (newPos < 0) {
            newPos = 0;
          }
        }

        let rightEdge = that.getSliderLengthInPx() - that.getThumbWidthInPx();

        if (that.viewSettings.isRange) {
          const toPos = that.getThumbTo().getBoundingClientRect().left - that.getRange().getBoundingClientRect().left;

          if (thumbType === "thumbFrom") {
            rightEdge = toPos;
          }
        }

        if (newPos >= rightEdge) {
          newPos = rightEdge;
        }

        that.dispatchEvent(newPos, thumbType);
      } // eslint-disable-next-line no-inner-declarations


      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }

    this.setColoredRange();
  }

  handleRange(e) {
    let shift, fromPos;

    if (this.viewSettings.isVertical) {
      shift = e.clientY - this.getRange().getBoundingClientRect().top;
      fromPos = this.getThumbFrom().getBoundingClientRect().top - (this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2);
    } else {
      shift = e.clientX - this.getRange().getBoundingClientRect().left;
      fromPos = this.getThumbFrom().getBoundingClientRect().left - (this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2);
    }

    if (this.viewSettings.isVertical) {
      if (this.viewSettings.isRange) {
        const toPos = this.getThumbTo().getBoundingClientRect().top - this.getRange().getBoundingClientRect().top;

        if (shift < fromPos) {
          this.dispatchEvent(shift, "thumbFrom");
        } else if (shift > toPos) {
          this.dispatchEvent(shift, "thumbTo");
        } else if (shift >= fromPos && shift <= toPos) {
          const pivot = (toPos - fromPos) / 2;

          if (shift < pivot + fromPos) {
            this.dispatchEvent(shift, "thumbFrom");
          } else if (shift >= pivot + fromPos) {
            this.dispatchEvent(shift, "thumbTo");
          }
        }
      } else {
        if (shift < fromPos) {
          this.dispatchEvent(shift, "thumbFrom");
        } else {
          //vertical mode single thumb 
          this.dispatchEvent(shift, "thumbFrom");
        }
      }
    } else {
      if (this.viewSettings.isRange) {
        const toPos = this.getThumbTo().getBoundingClientRect().left - this.getRange().getBoundingClientRect().left;

        if (shift < fromPos) {
          this.dispatchEvent(shift, "thumbFrom");
        } else if (shift > toPos) {
          this.dispatchEvent(shift, "thumbTo");
        } else if (shift >= fromPos && shift <= toPos) {
          const pivot = (toPos - fromPos) / 2;

          if (shift < pivot + fromPos) {
            this.dispatchEvent(shift, "thumbFrom");
          } else if (shift >= pivot + fromPos) {
            this.dispatchEvent(shift, "thumbTo");
          }
        }
      } else {
        //horizontal mode single thumb
        this.dispatchEvent(shift, "thumbFrom");
      }
    }

    this.setColoredRange();
  }

  convertFromPxToPercent(valueInPX) {
    return valueInPX / this.getSliderLengthInPx() * 100;
  }

  getThumbWidthInPercentage() {
    if (this.viewSettings.isVertical) {
      return this.getThumbFrom().offsetHeight / this.getSliderLengthInPx() * 100;
    } else {
      return this.getThumbFrom().offsetWidth / this.getSliderLengthInPx() * 100;
    }
  }

  getSliderLengthInPx() {
    if (this.viewSettings.isVertical) {
      return this.getRange().offsetHeight;
    } else {
      return this.getRange().offsetWidth;
    }
  }

  dispatchEvent(shift, type) {
    this.resPercentage = this.convertFromPxToPercent(shift);

    if (type === "thumbFrom") {
      this.thumbFrom.setThumbPosition(this.resPercentage, this.viewSettings.isVertical);
      this.notifyObservers(4
      /* SET_FROM */
      , JSON.stringify({
        from: this.resPercentage
      }), 0);
    } else {
      this.thumbTo.setThumbPosition(this.resPercentage, this.viewSettings.isVertical);
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

const EventObservable_1 = __webpack_require__(/*! ../../observers/EventObservable */ "./observers/EventObservable.ts");

class Thumb extends EventObservable_1.EventObservable {
  constructor(className) {
    super();
    this.thumb = document.createElement('div');
    this.thumb.classList.add(className);
  }

  getThumb() {
    return this.thumb;
  }

  setThumbPosition(shift, isVertical) {
    if (isVertical) {
      this.getThumb().style.top = shift + '%';
    } else {
      this.getThumb().style.left = shift + '%';
    }
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
    this.thumbLabelContainer.style.display = 'none';
  }

  showLabel() {
    this.thumbLabelContainer.style.display = 'block';
  }

}

exports.ThumbLabel = ThumbLabel;

/***/ })

/******/ });
});
//# sourceMappingURL=lib.js.map