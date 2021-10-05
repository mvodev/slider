/******/ (function(modules) { // webpackBootstrap
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
/******/ 		"main": 0
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./error-message/ErrorMessage.ts":
/*!***************************************!*\
  !*** ./error-message/ErrorMessage.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ErrorMessage =\n/** @class */\nfunction () {\n  function ErrorMessage(message) {\n    this.message = message;\n    this.showMessage();\n  }\n\n  ErrorMessage.prototype.showMessage = function () {\n    // eslint-disable-next-line no-console\n    console.error(\"message: \" + this.message);\n  };\n\n  return ErrorMessage;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\n\n//# sourceURL=webpack:///./error-message/ErrorMessage.ts?");

/***/ }),

/***/ "./fsd-slider.js":
/*!***********************!*\
  !*** ./fsd-slider.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _styles_fsd_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/fsd-slider.scss */ \"./styles/fsd-slider.scss\");\n/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/View */ \"./view/View.ts\");\n/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Model */ \"./model/Model.ts\");\n/* harmony import */ var _presenter_Presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/Presenter */ \"./presenter/Presenter.ts\");\n\r\n\r\n\r\n\r\n\r\n(function ($) {\r\n  const FsdSlider = function (root, settings, callback) {\r\n    const model = new _model_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"](settings);\r\n    const view = new _view_View__WEBPACK_IMPORTED_MODULE_1__[\"default\"](root);\r\n    this.presenter = new _presenter_Presenter__WEBPACK_IMPORTED_MODULE_3__[\"default\"](view, model);\r\n    model.addObserver(this.presenter);\r\n    view.addObserver(this.presenter);\r\n    this.presenter.addObserver(callback);\r\n    this.presenter.initialize();\r\n  };\r\n  FsdSlider.prototype = {\r\n    update(newSettings) {\r\n      this.presenter.update(newSettings);\r\n    },\r\n  };\r\n  $.fn.fsdSlider = function (settings, callback) {\r\n    return this.each(function () {\r\n      if (!$.data(this, 'fsd-slider')) {\r\n        $.data(this, 'fsd-slider', new FsdSlider(this, settings, callback));\r\n      }\r\n    });\r\n  };\r\n}(jQuery));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./fsd-slider.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _fsd_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fsd-slider.js */ \"./fsd-slider.js\");\n\r\n\r\n\r\nfunction setValuesToControlPanel(s, slider) {\r\n  $(`.js-control-panel__min-${slider}`).val(s.min);\r\n  $(`.js-control-panel__max-${slider}`).val(s.max);\r\n  $(`.js-control-panel__from-${slider}`).val(s.from);\r\n  $(`.js-control-panel__step-${slider}`).val(s.step);\r\n  if (s.isRange) {\r\n    $(`.js-control-panel__to-${slider}`).val(s.to);\r\n  } else {\r\n    $(`.js-control-panel__to-${slider}`).val('');\r\n  }\r\n  if (s.isRange) {\r\n    $(`.js-control-panel__values-${slider}`).val(`${s.from} - ${s.to}`);\r\n  } else {\r\n    $(`.js-control-panel__values-${slider}`).val(s.from);\r\n  }\r\n}\r\n\r\nconst $sl1 = $('.slider1');\r\nconst sl1Settings = {\r\n  min: 5000,\r\n  max: 25000,\r\n  from: 8000,\r\n  step: 1000,\r\n  to: 18000,\r\n  isVertical: false,\r\n  hideThumbLabel: false,\r\n  isRange: true,\r\n};\r\n\r\n$sl1.fsdSlider(sl1Settings, {\r\n  handleEvent: (message, result) => {\r\n    const s = JSON.parse(result);\r\n    setValuesToControlPanel(s, 'slider1');\r\n  },\r\n});\r\n\r\nconst $sl2 = $('.slider2');\r\nconst sl2Settings = {\r\n  min: 5,\r\n  max: 10,\r\n  from: 7,\r\n  step: 0.2,\r\n  isVertical: true,\r\n  hideThumbLabel: false,\r\n  isRange: false,\r\n};\r\n\r\n$sl2.fsdSlider(sl2Settings, {\r\n  handleEvent: (message, result) => {\r\n    const s = JSON.parse(result);\r\n    setValuesToControlPanel(s, 'slider2');\r\n  },\r\n});\r\n\r\nconst $sl3 = $('.slider3');\r\nconst sl3Settings = {\r\n  min: -15,\r\n  max: 100,\r\n  from: -5,\r\n  step: 5,\r\n  to: 20,\r\n  isVertical: false,\r\n  hideThumbLabel: false,\r\n  isRange: true,\r\n};\r\n\r\n$sl3.fsdSlider(sl3Settings, {\r\n  handleEvent: (message, result) => {\r\n    const s = JSON.parse(result);\r\n    setValuesToControlPanel(s, 'slider3');\r\n  },\r\n});\r\n\r\nconst sl1Instance = $sl1.data('fsdSlider');\r\nconst sl2Instance = $sl2.data('fsdSlider');\r\nconst sl3Instance = $sl3.data('fsdSlider');\r\n\r\nfunction collectData(sliderNumber) {\r\n  const result = {\r\n    min: $(`.js-control-panel__min-${sliderNumber}`).val(),\r\n    max: $(`.js-control-panel__max-${sliderNumber}`).val(),\r\n    from: $(`.js-control-panel__from-${sliderNumber}`).val(),\r\n    to: $(`.js-control-panel__to-${sliderNumber}`).val(),\r\n    step: $(`.js-control-panel__step-${sliderNumber}`).val(),\r\n    hideThumbLabel: $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).is(':checked'),\r\n    isVertical: $(`.js-control-panel__is-vertical-${sliderNumber}`).is(':checked'),\r\n    isRange: $(`.js-control-panel__is-range-${sliderNumber}`).is(':checked'),\r\n  };\r\n  return result;\r\n}\r\n\r\nfunction inputHandler() {\r\n  if ($(this).parent().parent().hasClass('js-control-panel__form_slider1')) {\r\n    sl1Instance.update(collectData('slider1'));\r\n  } else if ($(this).parent().parent().hasClass('js-control-panel__form_slider2')) {\r\n    sl2Instance.update(collectData('slider2'));\r\n  } else if ($(this).parent().parent().hasClass('js-control-panel__form_slider3')) {\r\n    sl3Instance.update(collectData('slider3'));\r\n  }\r\n}\r\n\r\n$('input').on('change', inputHandler);\r\n\r\nfunction setSettingsToInputs(sliderNumber, sliderSettings) {\r\n  if (sliderSettings.isVertical) {\r\n    $(`.js-control-panel__is-vertical-${sliderNumber}`).prop('checked', true);\r\n  } else {\r\n    $(`.js-control-panel__is-vertical-${sliderNumber}`).prop('checked', false);\r\n  }\r\n  if (sliderSettings.isRange) {\r\n    $(`.js-control-panel__is-range-${sliderNumber}`).prop('checked', true);\r\n  } else {\r\n    $(`.js-control-panel__is-range-${sliderNumber}`).prop('checked', false);\r\n  }\r\n  if (sliderSettings.hideThumbLabel) {\r\n    $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).prop('checked', true);\r\n  } else {\r\n    $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).prop('checked', false);\r\n  }\r\n}\r\n\r\nsetSettingsToInputs('slider1', sl1Settings);\r\nsetSettingsToInputs('slider2', sl2Settings);\r\nsetSettingsToInputs('slider3', sl3Settings);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./index.scss?");

/***/ }),

/***/ "./model/Model.ts":
/*!************************!*\
  !*** ./model/Model.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ \"./utils/Utils.ts\");\n/* harmony import */ var _defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\nvar __extends = undefined && undefined.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\nvar Model =\n/** @class */\nfunction (_super) {\n  __extends(Model, _super);\n\n  function Model(settings) {\n    var _this = _super.call(this) || this;\n\n    _this.settings = __assign({}, _defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    _this.setSettings(settings);\n\n    return _this;\n  }\n\n  Model.prototype.setSettings = function (settings) {\n    this.settings = __assign({}, settings);\n  };\n\n  Model.prototype.getSettings = function () {\n    return JSON.stringify(this.settings);\n  };\n\n  Model.prototype.updateSettings = function (settings) {\n    this.validateSettings(settings);\n    this.notifyObservers(1\n    /* UPDATE */\n    , this.getSettings(), 0);\n  };\n\n  Model.prototype.getMin = function () {\n    return this.settings.min;\n  };\n\n  Model.prototype.getMax = function () {\n    return this.settings.max;\n  };\n\n  Model.prototype.setFrom = function (valueInPercent, thumbWidthInPercent) {\n    var from = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);\n\n    if (from > this.settings.max) {\n      this.settings.from = this.settings.max;\n    } else if (from < this.settings.min) {\n      this.settings.from = this.settings.min;\n    } else this.settings.from = from;\n  };\n\n  Model.prototype.getFrom = function () {\n    return this.settings.from;\n  };\n\n  Model.prototype.setTo = function (valueInPercent, thumbWidthInPercent) {\n    var to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);\n\n    if (to >= this.settings.max) {\n      this.settings.to = this.settings.max;\n    } else if (to <= this.settings.from) {\n      this.settings.to = this.settings.from;\n    } else this.settings.to = to;\n  };\n\n  Model.prototype.getTo = function () {\n    return this.settings.to;\n  };\n\n  Model.prototype.getStep = function () {\n    return this.settings.step ? this.settings.step : 1;\n  };\n\n  Model.prototype.getIsRange = function () {\n    return this.settings.isRange;\n  };\n\n  Model.prototype.getIsVertical = function () {\n    return this.settings.isVertical;\n  };\n\n  Model.prototype.getHideThumbLabel = function () {\n    return this.settings.hideThumbLabel;\n  };\n\n  Model.prototype.validateSettings = function (settings) {\n    var newMin = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.min);\n    var newMax = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.max);\n    var newFrom = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.from);\n    var newTo = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.to);\n    var newStep = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.step);\n    var newIsVertical = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToBoolean(settings.isVertical);\n    var newHideThumbLabel = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToBoolean(settings.hideThumbLabel);\n    var newRange = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToBoolean(settings.isRange);\n\n    if (newMin !== undefined && newMax !== undefined) {\n      if (Math.abs(newMax - newMin) < this.settings.step) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable values,difference between min and max more than step');\n      }\n    }\n\n    if (newMin !== undefined) {\n      if (newMin > this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,min value more than from value');\n      } else {\n        this.settings.min = newMin;\n      }\n    }\n\n    if (newMax !== undefined) {\n      if (this.settings.isRange && newMax < this.settings.to) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,min value more than to value');\n      } else if (!this.settings.isRange && newMax < this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,min value more than from value');\n      } else {\n        this.settings.max = newMax;\n      }\n    }\n\n    if (newFrom !== undefined && !this.settings.isRange) {\n      if (newFrom > this.settings.max) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from more than max');\n      } else if (newFrom < this.settings.min) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from less than min');\n      } else this.settings.from = newFrom;\n    }\n\n    if (newFrom !== undefined && this.settings.isRange) {\n      if (newFrom > this.settings.to) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from more than to');\n      } else if (newFrom < this.settings.min) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from less than min');\n      } else this.settings.from = newFrom;\n    }\n\n    if (newTo !== undefined && this.settings.isRange) {\n      if (newTo < this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,to less than from');\n      } else if (newTo > this.settings.max) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,to more than max');\n      } else this.settings.to = newTo;\n    }\n\n    if (newStep !== undefined) {\n      if (newStep < 0) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('step must be positive');\n      } else if (newStep === 0) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('step must not be zero');\n      } else if (newStep > Math.abs(this.settings.max - this.settings.min)) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('step must be more than difference between max and min');\n      } else {\n        // eslint-disable-next-line no-lonely-if\n        if (this.settings.step !== newStep) {\n          this.settings.step = newStep;\n          this.settings.from = +Math.round(this.settings.min + this.settings.step).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numDigitsAfterDecimal(this.settings.step));\n\n          if (this.settings.from + this.settings.step >= this.settings.max) {\n            this.settings.to = this.settings.max;\n          } else {\n            this.settings.to = +Math.round(this.settings.from + this.settings.step).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numDigitsAfterDecimal(this.settings.step));\n          }\n        }\n      }\n    }\n\n    this.settings.isVertical = newIsVertical;\n    this.settings.hideThumbLabel = newHideThumbLabel;\n\n    if (newRange !== undefined) {\n      if (!this.settings.isRange) {\n        this.settings.to = this.settings.from + this.settings.step > this.settings.max ? this.settings.max : +Math.round(this.settings.from + this.settings.step).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numDigitsAfterDecimal(this.settings.step));\n      }\n\n      this.settings.isRange = newRange;\n\n      if (this.settings.from >= this.settings.to) {\n        this.settings.from = this.settings.min;\n      }\n    }\n  };\n\n  Model.prototype.convertFromPercentToValue = function (valueInPercent, thumbWidthInPercent) {\n    if (valueInPercent <= 0) {\n      return this.getMin();\n    }\n\n    if (valueInPercent >= 100 - thumbWidthInPercent) {\n      return this.getMax();\n    }\n\n    var del = 1;\n\n    if (this.getStep() !== 0) {\n      del = 1.0 / this.getStep();\n    }\n\n    var diapason = Math.abs(this.getMax() - this.getMin());\n    var res = Math.round(+(diapason * valueInPercent / (100 - thumbWidthInPercent)).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numDigitsAfterDecimal(this.getStep())) * del) / del + this.getMin();\n    if (res < this.getMin()) return this.getMin();\n    if (res > this.getMax()) return this.getMax();\n    return res;\n  };\n\n  return Model;\n}(_observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n//# sourceURL=webpack:///./model/Model.ts?");

/***/ }),

/***/ "./model/defaultSettings.ts":
/*!**********************************!*\
  !*** ./model/defaultSettings.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar defaultSettings = {\n  min: 0,\n  max: 10,\n  from: 5,\n  step: 1,\n  to: 8,\n  isRange: false,\n  isVertical: false,\n  hideThumbLabel: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultSettings);\n\n//# sourceURL=webpack:///./model/defaultSettings.ts?");

/***/ }),

/***/ "./observers/EventObservable.ts":
/*!**************************************!*\
  !*** ./observers/EventObservable.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar EventObservable =\n/** @class */\nfunction () {\n  function EventObservable() {\n    this.observers = [];\n  }\n\n  EventObservable.prototype.addObserver = function (o) {\n    this.observers.push(o);\n  };\n\n  EventObservable.prototype.removeObserver = function (o) {\n    this.observers.filter(function (subscriber) {\n      return subscriber !== o;\n    });\n  };\n\n  EventObservable.prototype.notifyObservers = function (msg, settings, width) {\n    this.observers.forEach(function (elem) {\n      if (elem && 'handleEvent' in elem) {\n        elem.handleEvent(msg, settings, width);\n      }\n    });\n  };\n\n  return EventObservable;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventObservable);\n\n//# sourceURL=webpack:///./observers/EventObservable.ts?");

/***/ }),

/***/ "./presenter/Presenter.ts":
/*!********************************!*\
  !*** ./presenter/Presenter.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\nvar __extends = undefined && undefined.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\n\n\nvar Presenter =\n/** @class */\nfunction (_super) {\n  __extends(Presenter, _super);\n\n  function Presenter(view, model) {\n    var _this = _super.call(this) || this;\n\n    _this.view = view;\n    _this.model = model;\n    return _this;\n  }\n\n  Presenter.prototype.handleEvent = function (msg, s, thumbWidthInPercentage) {\n    if (msg === 1\n    /* UPDATE */\n    ) {\n        this.view.refreshView(1\n        /* UPDATE */\n        , JSON.parse(s));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      } else if (msg === 4\n    /* SET_FROM */\n    ) {\n        this.model.setFrom(JSON.parse(s).from, thumbWidthInPercentage);\n        this.view.refreshView(2\n        /* FROM_IS_SET */\n        , JSON.parse(this.model.getSettings()));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      } else if (msg === 5\n    /* SET_TO */\n    ) {\n        this.model.setTo(JSON.parse(s).to, thumbWidthInPercentage);\n        this.view.refreshView(3\n        /* TO_IS_SET */\n        , JSON.parse(this.model.getSettings()));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      }\n  };\n\n  Presenter.prototype.initialize = function () {\n    this.view.refreshView(0\n    /* INIT */\n    , JSON.parse(this.model.getSettings()));\n    this.notifyObservers(1\n    /* UPDATE */\n    , this.model.getSettings(), 0);\n  };\n\n  Presenter.prototype.update = function (newSettings) {\n    this.model.updateSettings(newSettings);\n  };\n\n  return Presenter;\n}(_observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Presenter);\n\n//# sourceURL=webpack:///./presenter/Presenter.ts?");

/***/ }),

/***/ "./styles/fsd-slider.scss":
/*!********************************!*\
  !*** ./styles/fsd-slider.scss ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/fsd-slider.scss?");

/***/ }),

/***/ "./utils/ClassNaming.ts":
/*!******************************!*\
  !*** ./utils/ClassNaming.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ClassNaming = {\n  ROOT: 'fsd-slider',\n  RANGE: 'fsd-slider__range',\n  RANGE_LABEL: 'fsd-slider__range-label',\n  RANGE_LABEL_SCALE: 'fsd-slider__range-label-scale',\n  COLORED_RANGE: 'fsd-slider__colored-range',\n  THUMB_TO: 'fsd-slider__thumb-to',\n  THUMB_FROM: 'fsd-slider__thumb-from',\n  THUMB_LABEL: 'fsd-slider__thumb-label',\n  THUMB_VALUE: 'fsd-slider__thumb-value',\n  SLIDER_IS_VERTICAL: 'fsd-slider_is_vertical',\n  RANGE_IS_VERTICAL: 'fsd-slider__range_is_vertical',\n  COLORED_RANGE_IS_VERTICAL: 'fsd-slider__colored-range_is_vertical',\n  RANGE_LABEL_IS_VERTICAL: 'fsd-slider__range-label_is_vertical',\n  THUMB_LABEL_IS_VERTICAL: 'fsd-slider__thumb-label_is_vertical',\n  HIDE_ELEMENT: 'fsd-slider_element_is_hidden'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassNaming);\n\n//# sourceURL=webpack:///./utils/ClassNaming.ts?");

/***/ }),

/***/ "./utils/Constants.ts":
/*!****************************!*\
  !*** ./utils/Constants.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Constants = {\n  NUMBER_OF_LABELS: 3,\n  THUMB_FROM: 'thumbFrom',\n  THUMB_TO: 'thumbTo'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n//# sourceURL=webpack:///./utils/Constants.ts?");

/***/ }),

/***/ "./utils/Utils.ts":
/*!************************!*\
  !*** ./utils/Utils.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Utils =\n/** @class */\nfunction () {\n  function Utils() {}\n\n  Utils.numDigitsAfterDecimal = function (value) {\n    if (value) {\n      return (value.toString().split('.')[1] || '').length;\n    }\n\n    return 0;\n  };\n\n  Utils.convertFromInputToNumber = function (value) {\n    var number = parseFloat(String(value));\n\n    if (Number.isNaN(number)) {\n      return undefined;\n    }\n\n    return number;\n  };\n\n  Utils.convertFromInputToBoolean = function (value) {\n    return Boolean(value);\n  };\n\n  Utils.roundWithStep = function (value, step, min) {\n    var del = 1;\n\n    if (step !== 0) {\n      del = 1.0 / step;\n    }\n\n    var result = Math.round(+(value - min).toFixed(Utils.numDigitsAfterDecimal(step)) * del) / del + min;\n    return result;\n  };\n\n  return Utils;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack:///./utils/Utils.ts?");

/***/ }),

/***/ "./view/View.ts":
/*!**********************!*\
  !*** ./view/View.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider */ \"./view/components/Slider.ts\");\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\nvar __extends = undefined && undefined.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\nvar View =\n/** @class */\nfunction (_super) {\n  __extends(View, _super);\n\n  function View(root) {\n    var _this = _super.call(this) || this;\n\n    _this.viewSettings = __assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    if (root) {\n      _this.rootElem = root;\n      _this.slider = new _components_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.rootElem);\n\n      _this.slider.addObserver(_this); // eslint-disable-next-line no-new\n\n    } else new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('root elem of Slider is null!');\n\n    return _this;\n  }\n\n  View.prototype.handleEvent = function (msg, settings) {\n    this.notifyObservers(msg, settings, this.getThumbWidthInPercentage());\n  };\n\n  View.prototype.render = function (s) {\n    this.slider.render(JSON.stringify(s));\n  };\n\n  View.prototype.refreshView = function (msg, settings) {\n    if (msg === 0\n    /* INIT */\n    || msg === 1\n    /* UPDATE */\n    ) {\n        this.updateViewSettings(settings);\n        this.render(this.viewSettings);\n      } else if (msg === 2\n    /* FROM_IS_SET */\n    ) {\n        this.slider.setValueToLabelThumbFrom(settings.from);\n      } else if (msg === 3\n    /* TO_IS_SET */\n    ) {\n        this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);\n      }\n  };\n\n  View.prototype.getSlider = function () {\n    return this.slider;\n  };\n\n  View.prototype.getThumbWidthInPercentage = function () {\n    return this.slider.getThumbWidthInPercentage();\n  };\n\n  View.prototype.updateViewSettings = function (s) {\n    this.viewSettings = Object.assign(this.viewSettings, s);\n  };\n\n  return View;\n}(_observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack:///./view/View.ts?");

/***/ }),

/***/ "./view/components/ColoredRange.ts":
/*!*****************************************!*\
  !*** ./view/components/ColoredRange.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nvar ColoredRange =\n/** @class */\nfunction () {\n  function ColoredRange() {\n    this.coloredRange = document.createElement('div');\n    this.coloredRange.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORED_RANGE);\n  }\n\n  ColoredRange.prototype.getColoredRange = function () {\n    return this.coloredRange;\n  };\n\n  ColoredRange.prototype.setColoredRange = function (viewSettings, thumbFrom, thumbTo, thumbWidthInPercentage) {\n    if (viewSettings.isRange) {\n      if (viewSettings.isVertical) {\n        this.getColoredRange().style.top = thumbFrom.style.top;\n        this.getColoredRange().style.left = '0%';\n        this.getColoredRange().style.width = '100%';\n        this.getColoredRange().style.height = Number.parseInt(thumbTo.style.top, 10) - Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage * 0.6 + \"%\";\n      } else {\n        this.getColoredRange().style.left = thumbFrom.style.left;\n        this.getColoredRange().style.top = '0%';\n        this.getColoredRange().style.height = '100%';\n        this.getColoredRange().style.width = Number.parseInt(thumbTo.style.left, 10) - Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage * 0.6 + \"%\";\n      }\n    } else if (!viewSettings.isRange) {\n      if (viewSettings.isVertical) {\n        this.getColoredRange().style.top = '0%';\n        this.getColoredRange().style.width = '100%';\n        this.getColoredRange().style.height = Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage / 2 + \"%\";\n      } else {\n        this.getColoredRange().style.width = Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage / 2 + \"%\";\n        this.getColoredRange().style.left = '0%';\n        this.getColoredRange().style.top = '0%';\n        this.getColoredRange().style.height = '100%';\n      }\n    }\n  };\n\n  return ColoredRange;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColoredRange);\n\n//# sourceURL=webpack:///./view/components/ColoredRange.ts?");

/***/ }),

/***/ "./view/components/Range.ts":
/*!**********************************!*\
  !*** ./view/components/Range.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n/* harmony import */ var _ColoredRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColoredRange */ \"./view/components/ColoredRange.ts\");\n/* harmony import */ var _Thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumb */ \"./view/components/Thumb.ts\");\n\n\n\n\nvar Range =\n/** @class */\nfunction () {\n  function Range(settings) {\n    var div = document.createElement('div');\n    div.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE);\n    this.range = div;\n    this.viewSettings = settings;\n    this.coloredRange = new _ColoredRange__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.thumbTo = new _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_TO);\n    this.thumbFrom = new _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_FROM);\n    this.getRange().appendChild(this.coloredRange.getColoredRange());\n    this.getRange().appendChild(this.thumbFrom.getThumb());\n  }\n\n  Range.prototype.getRange = function () {\n    return this.range;\n  };\n\n  Range.prototype.render = function (settings) {\n    Object.assign(this.viewSettings, JSON.parse(settings));\n\n    if (this.viewSettings.isRange) {\n      this.getRange().appendChild(this.thumbTo.getThumb());\n    } else if (!this.viewSettings.isRange) {\n      if (this.getRange().contains(this.thumbTo.getThumb())) {\n        this.getRange().removeChild(this.thumbTo.getThumb());\n      }\n    }\n  };\n\n  Range.prototype.setVertical = function () {\n    this.range.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_IS_VERTICAL);\n    this.coloredRange.getColoredRange().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORED_RANGE_IS_VERTICAL);\n    this.thumbFrom.setVertical();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.setVertical();\n    }\n  };\n\n  Range.prototype.setHorizontal = function () {\n    this.range.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_IS_VERTICAL);\n    this.coloredRange.getColoredRange().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORED_RANGE_IS_VERTICAL);\n    this.thumbFrom.setHorizontal();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.setHorizontal();\n    }\n  };\n\n  Range.prototype.setColoredRange = function (thumbWidthInPercentage) {\n    this.coloredRange.setColoredRange(this.viewSettings, this.thumbFrom.getThumb(), this.thumbTo.getThumb(), thumbWidthInPercentage);\n  };\n\n  Range.prototype.getThumbFrom = function () {\n    return this.thumbFrom.getThumb();\n  };\n\n  Range.prototype.getThumbTo = function () {\n    return this.thumbTo.getThumb();\n  };\n\n  Range.prototype.hideLabel = function () {\n    this.thumbFrom.hideLabel();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.hideLabel();\n    }\n  };\n\n  Range.prototype.showLabel = function () {\n    this.thumbFrom.showLabel();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.showLabel();\n    }\n  };\n\n  Range.prototype.setValueToLabelThumbFrom = function (value) {\n    this.thumbFrom.setValueToLabel(value);\n  };\n\n  Range.prototype.setValueToLabelThumbTo = function (value) {\n    this.thumbTo.setValueToLabel(value);\n  };\n\n  Range.prototype.setThumbPositionFrom = function (shift, isVertical) {\n    this.thumbFrom.setThumbPosition(shift, isVertical);\n  };\n\n  Range.prototype.setThumbPositionTo = function (shift, isVertical) {\n    this.thumbTo.setThumbPosition(shift, isVertical);\n  };\n\n  Range.prototype.getThumbWidthInPx = function () {\n    if (this.viewSettings.isVertical) {\n      return this.getThumbFrom().offsetHeight;\n    }\n\n    return this.getThumbFrom().offsetWidth;\n  };\n\n  return Range;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\n\n//# sourceURL=webpack:///./view/components/Range.ts?");

/***/ }),

/***/ "./view/components/RangeLabel.ts":
/*!***************************************!*\
  !*** ./view/components/RangeLabel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\nvar RangeLabel =\n/** @class */\nfunction () {\n  function RangeLabel(settings) {\n    this.labels = [];\n    this.settings = __assign({}, settings);\n    this.initComponents();\n  }\n\n  RangeLabel.prototype.render = function (settings) {\n    this.settings = Object.assign(this.settings, settings);\n    this.setMinRange(this.settings.min);\n    this.setMaxRange(this.settings.max);\n  };\n\n  RangeLabel.prototype.getRangeLabel = function () {\n    return this.rangeLabelContainer;\n  };\n\n  RangeLabel.prototype.setMinRange = function (value) {\n    this.minLabel.innerText = \"\" + value;\n  };\n\n  RangeLabel.prototype.setMaxRange = function (value) {\n    this.maxLabel.innerText = \"\" + value;\n  };\n\n  RangeLabel.prototype.initComponents = function () {\n    this.rangeLabelContainer = document.createElement('div');\n    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL);\n    this.minLabel = document.createElement('span');\n    this.minLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_SCALE);\n    this.maxLabel = document.createElement('span');\n    this.maxLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_SCALE);\n    this.rangeLabelContainer.appendChild(this.minLabel);\n    this.labels.push(this.minLabel);\n    var pivotMark = document.createElement('span');\n    pivotMark.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_SCALE);\n    this.labels.push(pivotMark);\n    this.rangeLabelContainer.appendChild(pivotMark);\n    this.rangeLabelContainer.appendChild(this.maxLabel);\n    this.labels.push(this.maxLabel);\n  };\n\n  RangeLabel.prototype.setVertical = function () {\n    this.getRangeLabel().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_IS_VERTICAL);\n  };\n\n  RangeLabel.prototype.setHorizontal = function () {\n    this.getRangeLabel().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_IS_VERTICAL);\n  };\n\n  RangeLabel.prototype.getLabels = function () {\n    return this.labels;\n  };\n\n  RangeLabel.prototype.hideLabels = function () {\n    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  };\n\n  RangeLabel.prototype.showLabels = function () {\n    this.rangeLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  };\n\n  return RangeLabel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RangeLabel);\n\n//# sourceURL=webpack:///./view/components/RangeLabel.ts?");

/***/ }),

/***/ "./view/components/Slider.ts":
/*!***********************************!*\
  !*** ./view/components/Slider.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range */ \"./view/components/Range.ts\");\n/* harmony import */ var _RangeLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeLabel */ \"./view/components/RangeLabel.ts\");\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Constants */ \"./utils/Constants.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Utils */ \"./utils/Utils.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\nvar __extends = undefined && undefined.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n/* eslint-disable no-new */\n\n\n\n\n\n\n\n\n\n\n\nvar Slider =\n/** @class */\nfunction (_super) {\n  __extends(Slider, _super);\n\n  function Slider(rootElem) {\n    var _this = _super.call(this) || this;\n\n    _this.settings = __assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    if (rootElem) {\n      _this.rootElem = rootElem;\n    } else {\n      new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('root elem of Slider is null!');\n    }\n\n    _this.fromInPx = 0;\n    _this.toInPx = 0;\n\n    _this.initSliderComponents();\n\n    return _this;\n  }\n\n  Slider.prototype.render = function (settings) {\n    this.settings = Object.assign(this.settings, JSON.parse(settings));\n    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ROOT);\n    this.container.appendChild(this.range.getRange());\n    this.range.render(settings);\n    this.rangeLabel.render(JSON.parse(settings));\n    this.container.appendChild(this.rangeLabel.getRangeLabel());\n    this.rootElem.appendChild(this.container);\n\n    if (this.settings.hideThumbLabel) {\n      this.range.hideLabel();\n    } else {\n      this.range.showLabel();\n    }\n\n    if (this.settings.isVertical) {\n      this.setVertical();\n    } else {\n      this.setHorizontal();\n    }\n\n    this.bindEvents();\n    this.range.setValueToLabelThumbFrom(this.settings.from);\n    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from), this.settings.isVertical);\n\n    if (this.settings.isRange) {\n      this.range.setValueToLabelThumbTo(this.settings.to);\n      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);\n    }\n\n    this.setLabelsPosition();\n    this.setColoredRange();\n    this.calculateThumbPos();\n  };\n\n  Slider.prototype.calculateThumbPos = function () {\n    this.fromInPx = this.convertFromValueToPx(this.settings.from);\n\n    if (this.settings.isRange) {\n      this.toInPx = this.convertFromValueToPx(this.settings.to);\n    } else this.toInPx = this.getSliderLengthInPx();\n  };\n\n  Slider.prototype.initSliderComponents = function () {\n    this.range = new _Range__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.settings);\n    this.rangeLabel = new _RangeLabel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.settings);\n    this.container = document.createElement('div');\n  };\n\n  Slider.prototype.setLabelsPosition = function () {\n    var diapason = Math.abs(this.settings.max - this.settings.min);\n    var pivot = diapason / 2 + this.settings.min;\n    var pivotRounded = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__[\"default\"].roundWithStep(pivot, this.settings.step, this.settings.min);\n\n    if (!this.settings.isVertical) {\n      //  set min value label\n      this.getLabels()[0].setAttribute('value', this.settings.min.toString());\n      this.getLabels()[0].style.left = this.getThumbWidthInPercentage() / 2 - this.getLabels()[0].offsetWidth * 100 / this.getSliderLengthInPx() / 2 + \"%\";\n      this.getLabels()[0].style.top = ''; // set max value label\n\n      this.getLabels()[2].setAttribute('value', this.settings.max.toString());\n      this.getLabels()[2].style.left = 100 - (this.getLabels()[2].offsetWidth / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx() * 100 + \"%\";\n      this.getLabels()[2].style.top = ''; // set average value label\n\n      this.getLabels()[1].setAttribute('value', pivotRounded.toString());\n      this.getLabels()[1].innerText = pivotRounded.toString();\n      this.getLabels()[1].style.left = this.convertFromValueToPercent(pivotRounded) + this.getThumbWidthInPercentage() / 2 - this.getLabels()[1].offsetWidth * 100 / this.getSliderLengthInPx() / 2 + \"%\";\n      this.getLabels()[1].style.top = '';\n    } else {\n      // set min value label\n      this.getLabels()[0].setAttribute('value', this.settings.min.toString());\n      this.getLabels()[0].style.top = this.getThumbWidthInPercentage() / 2 - this.getLabels()[0].offsetHeight * 100 / this.getSliderLengthInPx() / 2 + \"%\";\n      this.getLabels()[0].style.left = ''; // set max value label\n\n      this.getLabels()[2].setAttribute('value', this.settings.max.toString());\n      this.getLabels()[2].style.top = 100 - (this.getLabels()[2].offsetHeight / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx() * 100 + \"%\";\n      this.getLabels()[2].style.left = ''; // set average value label\n\n      this.getLabels()[1].setAttribute('value', pivotRounded.toString());\n      this.getLabels()[1].innerText = pivotRounded.toString();\n      this.getLabels()[1].style.top = this.convertFromValueToPercent(pivotRounded) + this.getThumbWidthInPercentage() / 2 - this.getLabels()[1].offsetHeight * 100 / this.getSliderLengthInPx() / 2 + \"%\";\n      this.getLabels()[1].style.left = '';\n    }\n  };\n\n  Slider.prototype.bindEvents = function () {\n    var _this = this;\n\n    this.handleRangeBinded = this.handleRange.bind(this, 'range');\n    this.initResizeObserver();\n    this.handleRangeLabelBinded = this.handleRangeLabel.bind(this);\n    this.getRange().addEventListener('mousedown', this.handleRangeBinded);\n    this.rangeLabel.getLabels().forEach(function (elem) {\n      return elem.addEventListener('click', _this.handleRangeLabelBinded);\n    });\n  };\n\n  Slider.prototype.initResizeObserver = function () {\n    var _this = this;\n\n    var resizeObserver = new ResizeObserver(function () {\n      _this.range.setValueToLabelThumbFrom(_this.settings.from);\n\n      _this.range.setThumbPositionFrom(_this.convertFromValueToPercent(_this.settings.from), _this.settings.isVertical);\n\n      if (_this.settings.isRange) {\n        _this.range.setValueToLabelThumbTo(_this.settings.to);\n\n        _this.range.setThumbPositionTo(_this.convertFromValueToPercent(_this.settings.to), _this.settings.isVertical);\n      }\n\n      _this.setColoredRange();\n\n      _this.setLabelsPosition();\n\n      _this.calculateThumbPos();\n    });\n    resizeObserver.observe(this.rootElem);\n  };\n\n  Slider.prototype.bindExtraListeners = function (thumbType) {\n    this.handleThumbMoveBinded = this.handleThumbMove.bind(this, thumbType);\n    this.removeHandlerBinded = this.removeHandler.bind(this);\n    document.addEventListener('mousemove', this.handleThumbMoveBinded);\n    document.addEventListener('mouseup', this.removeHandlerBinded);\n  };\n\n  Slider.prototype.unbindEvents = function () {\n    this.removeHandler();\n    this.getRangeLabel().removeEventListener('mousedown', this.handleRangeLabelBinded);\n    this.getRange().removeEventListener('mousedown', this.handleRangeBinded);\n  };\n\n  Slider.prototype.handleRangeLabel = function (e) {\n    if (e.target instanceof Element) {\n      if (e.target.getAttribute('value')) {\n        var targetValue = Number(e.target.getAttribute('value'));\n        var roundedValue = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__[\"default\"].roundWithStep(targetValue, this.settings.step, this.settings.min);\n\n        if (!this.settings.isRange) {\n          if (targetValue === this.settings.max) {\n            this.dispatchEvent(this.convertFromValueToPx(targetValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          } else {\n            this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        } else if (this.settings.isRange) {\n          if (targetValue >= this.settings.to) {\n            if (targetValue === this.settings.max) {\n              this.dispatchEvent(this.convertFromValueToPx(targetValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            } else {\n              this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            }\n          } else if (targetValue <= this.settings.from) {\n            this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          } else {\n            var pivot = Math.abs(this.settings.to - this.settings.from) / 2;\n\n            if (targetValue <= pivot + this.settings.from) {\n              this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            } else if (targetValue > pivot + this.settings.from) {\n              if (roundedValue <= this.settings.max) {\n                this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n              }\n            }\n          }\n        }\n      }\n    }\n\n    this.setColoredRange();\n  };\n\n  Slider.prototype.handleRange = function (type, e) {\n    if (e instanceof MouseEvent) {\n      var clickedPos = void 0;\n      var thumbType = '';\n      var bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();\n\n      if (this.settings.isVertical) {\n        clickedPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2;\n      } else {\n        clickedPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;\n      }\n\n      if (clickedPos > bottom) clickedPos = bottom;\n      if (clickedPos < 0) clickedPos = 0;\n\n      if (this.settings.isRange) {\n        if (clickedPos < this.fromInPx) {\n          thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM;\n\n          if (Math.abs(clickedPos - this.getStepInPx()) <= this.fromInPx) {\n            this.fromInPx -= this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        } else if (clickedPos > this.toInPx) {\n          thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO;\n\n          if (clickedPos + this.getStepInPx() > this.toInPx) {\n            if (clickedPos >= bottom) {\n              this.dispatchEvent(clickedPos, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            } else {\n              this.toInPx += this.roundPos(this.toInPx, clickedPos);\n              this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            }\n          }\n        } else if (clickedPos >= this.fromInPx && clickedPos <= this.toInPx) {\n          var pivot = (this.toInPx - this.fromInPx) / 2;\n\n          if (clickedPos <= pivot + this.fromInPx) {\n            thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM;\n            this.fromInPx += this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          } else if (clickedPos > pivot + this.fromInPx) {\n            thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO;\n            this.toInPx -= this.roundPos(this.toInPx, clickedPos);\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n          }\n        }\n      } else {\n        thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM;\n\n        if (clickedPos + this.getThumbWidthInPx() / 2 < this.fromInPx) {\n          if (Math.abs(clickedPos - this.getStepInPx()) < this.fromInPx) {\n            this.fromInPx -= this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        } else if (clickedPos + this.getThumbWidthInPx() / 2 > this.fromInPx) {\n          if (Math.abs(clickedPos + this.getStepInPx()) > this.fromInPx && Math.floor(this.fromInPx + Math.round(Math.abs(this.fromInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx()) <= bottom) {\n            this.fromInPx += this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        }\n      }\n\n      if (type === 'range') {\n        this.bindExtraListeners(thumbType);\n      }\n    }\n  };\n\n  Slider.prototype.handleThumbMove = function (thumbType, e) {\n    var newPos;\n    var bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();\n\n    if (e instanceof MouseEvent) {\n      if (this.settings.isVertical) {\n        newPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2;\n      } else {\n        newPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;\n      }\n\n      if (newPos < 0) {\n        newPos = 0;\n      }\n\n      if (newPos >= bottom) {\n        newPos = bottom;\n      }\n\n      if (thumbType === _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM) {\n        if (this.settings.isRange) {\n          if (newPos < this.fromInPx) {\n            if (Math.abs(newPos - this.getStepInPx()) <= this.fromInPx) {\n              this.fromInPx -= this.roundPos(this.fromInPx, newPos);\n              this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            }\n          } else if (newPos <= this.toInPx && newPos > this.fromInPx) {\n            if (Math.abs(newPos + this.getStepInPx()) > this.fromInPx && Math.abs(newPos + this.getStepInPx()) <= this.toInPx) {\n              this.fromInPx += this.roundPos(this.fromInPx, newPos);\n              this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            }\n          }\n        } else if (!this.settings.isRange) {\n          if (newPos < this.fromInPx) {\n            if (Math.abs(newPos - this.getStepInPx()) < this.fromInPx) {\n              this.fromInPx -= this.roundPos(this.fromInPx, newPos);\n              this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            }\n          } else {\n            var valueRoundedInPx = this.roundPos(this.fromInPx, newPos);\n\n            if (Math.abs(newPos + this.getStepInPx()) > this.fromInPx) {\n              if (newPos >= bottom) {\n                this.dispatchEvent(newPos, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n              } else {\n                this.fromInPx += valueRoundedInPx;\n                this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n              }\n            }\n          }\n        }\n      } else if (thumbType === _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO) {\n        if (newPos > this.toInPx) {\n          var valueRoundedInPx = this.roundPos(this.toInPx, newPos);\n\n          if (newPos + this.getStepInPx() > this.toInPx) {\n            if (newPos >= bottom) {\n              this.dispatchEvent(newPos, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            } else {\n              this.toInPx += valueRoundedInPx;\n              this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            }\n          }\n        } else if (newPos < this.toInPx && newPos > this.fromInPx) {\n          if (Math.abs(newPos - this.getStepInPx()) >= this.fromInPx) {\n            this.toInPx -= this.roundPos(this.toInPx, newPos);\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n          }\n        }\n      }\n    }\n  };\n\n  Slider.prototype.roundPos = function (thumbInPx, newPos) {\n    return Math.round(Math.abs(thumbInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n  };\n\n  Slider.prototype.removeHandler = function () {\n    document.removeEventListener('mousemove', this.handleThumbMoveBinded);\n    document.removeEventListener('mouseup', this.removeHandlerBinded);\n  };\n\n  Slider.prototype.convertFromPxToPercent = function (valueInPX) {\n    if (valueInPX < 0) {\n      return 0;\n    }\n\n    var res = valueInPX / this.getSliderLengthInPx() * 100;\n\n    if (res > 100 - this.getThumbWidthInPercentage()) {\n      return 100 - this.getThumbWidthInPercentage();\n    }\n\n    return +res.toFixed(20);\n  };\n\n  Slider.prototype.convertFromValueToPx = function (value) {\n    return Math.abs(value - this.settings.min) / Math.abs(this.settings.max - this.settings.min) * (this.getSliderLengthInPx() - this.getThumbWidthInPx());\n  };\n\n  Slider.prototype.convertFromValueToPercent = function (value) {\n    var res = (100 - this.getThumbWidthInPercentage()) / Math.abs(this.settings.max - this.settings.min) * Math.abs(value - this.settings.min);\n\n    if (res > 100 - this.getThumbWidthInPercentage()) {\n      return 100 - this.getThumbWidthInPercentage();\n    }\n\n    return res;\n  };\n\n  Slider.prototype.getThumbWidthInPercentage = function () {\n    if (this.settings.isVertical) {\n      return this.getThumbFrom().offsetHeight / this.getSliderLengthInPx() * 100;\n    }\n\n    return this.getThumbFrom().offsetWidth / this.getSliderLengthInPx() * 100;\n  };\n\n  Slider.prototype.getSliderLengthInPx = function () {\n    if (this.settings.isVertical) {\n      return this.getRange().offsetHeight;\n    }\n\n    return this.getRange().offsetWidth;\n  };\n\n  Slider.prototype.dispatchEvent = function (shift, type) {\n    var valueInPercentage = this.convertFromPxToPercent(shift);\n\n    if (type === 'thumbFrom') {\n      this.range.setThumbPositionFrom(valueInPercentage, this.settings.isVertical);\n      this.notifyObservers(4\n      /* SET_FROM */\n      , JSON.stringify({\n        from: valueInPercentage\n      }), 0);\n    } else {\n      this.range.setThumbPositionTo(valueInPercentage, this.settings.isVertical);\n      this.notifyObservers(5\n      /* SET_TO */\n      , JSON.stringify({\n        to: valueInPercentage\n      }), 0);\n    }\n\n    this.setColoredRange();\n  };\n\n  Slider.prototype.getRange = function () {\n    return this.range.getRange();\n  };\n\n  Slider.prototype.setValueToLabelThumbFrom = function (value) {\n    this.range.setValueToLabelThumbFrom(value);\n    this.settings.from = value;\n  };\n\n  Slider.prototype.setValueToLabelThumbTo = function (value) {\n    this.range.setValueToLabelThumbTo(value);\n    this.settings.to = value;\n  };\n\n  Slider.prototype.getRangeLabel = function () {\n    return this.rangeLabel.getRangeLabel();\n  };\n\n  Slider.prototype.getThumbFrom = function () {\n    return this.range.getThumbFrom();\n  };\n\n  Slider.prototype.setVertical = function () {\n    this.unbindEvents();\n    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SLIDER_IS_VERTICAL);\n    this.range.setVertical();\n    this.rangeLabel.setVertical();\n  };\n\n  Slider.prototype.setHorizontal = function () {\n    this.unbindEvents();\n    this.container.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SLIDER_IS_VERTICAL);\n    this.range.setHorizontal();\n    this.rangeLabel.setHorizontal();\n  };\n\n  Slider.prototype.setColoredRange = function () {\n    this.range.setColoredRange(this.getThumbWidthInPercentage());\n  };\n\n  Slider.prototype.getThumbWidthInPx = function () {\n    return this.range.getThumbWidthInPx();\n  };\n\n  Slider.prototype.getThumbLabelFrom = function () {\n    return this.range.getThumbFrom();\n  };\n\n  Slider.prototype.getThumbLabelTo = function () {\n    return this.range.getThumbTo();\n  };\n\n  Slider.prototype.getStepInPx = function () {\n    return (this.getSliderLengthInPx() - this.getThumbWidthInPx()) / Math.abs((this.settings.max - this.settings.min) / this.settings.step);\n  };\n\n  Slider.prototype.getLabels = function () {\n    return this.rangeLabel.getLabels();\n  };\n\n  return Slider;\n}(_observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./view/components/Slider.ts?");

/***/ }),

/***/ "./view/components/Thumb.ts":
/*!**********************************!*\
  !*** ./view/components/Thumb.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbLabel */ \"./view/components/ThumbLabel.ts\");\n\n\nvar Thumb =\n/** @class */\nfunction () {\n  function Thumb(className) {\n    this.thumb = document.createElement('div');\n    this.thumb.classList.add(className);\n    this.thumbLabel = new _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.thumbLabelHTML = this.thumbLabel.getThumbLabelContainer();\n    this.thumb.appendChild(this.thumbLabelHTML);\n  }\n\n  Thumb.prototype.getThumb = function () {\n    return this.thumb;\n  };\n\n  Thumb.prototype.setThumbPosition = function (shift, isVertical) {\n    if (isVertical) {\n      this.getThumb().style.top = shift + \"%\";\n      this.getThumb().style.left = '-25%';\n    } else {\n      this.getThumb().style.left = shift + \"%\";\n      this.getThumb().style.top = '-25%';\n    }\n  };\n\n  Thumb.prototype.setVertical = function () {\n    this.thumbLabel.setVertical();\n  };\n\n  Thumb.prototype.setHorizontal = function () {\n    this.thumbLabel.setHorizontal();\n  };\n\n  Thumb.prototype.hideLabel = function () {\n    this.thumbLabel.hideLabel();\n  };\n\n  Thumb.prototype.showLabel = function () {\n    this.thumbLabel.showLabel();\n  };\n\n  Thumb.prototype.setValueToLabel = function (value) {\n    this.thumbLabel.setValueToLabel(value);\n  };\n\n  return Thumb;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumb);\n\n//# sourceURL=webpack:///./view/components/Thumb.ts?");

/***/ }),

/***/ "./view/components/ThumbLabel.ts":
/*!***************************************!*\
  !*** ./view/components/ThumbLabel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nvar ThumbLabel =\n/** @class */\nfunction () {\n  function ThumbLabel() {\n    var div = document.createElement('div');\n    var divValue = document.createElement('div');\n    this.thumbLabelContainer = div;\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_LABEL);\n    this.thumbLabelValue = divValue;\n    this.thumbLabelValue.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_VALUE);\n    this.thumbLabelContainer.appendChild(this.thumbLabelValue);\n  }\n\n  ThumbLabel.prototype.getThumbLabelContainer = function () {\n    return this.thumbLabelContainer;\n  };\n\n  ThumbLabel.prototype.setValueToLabel = function (value) {\n    this.thumbLabelValue.innerText = \"\" + value;\n  };\n\n  ThumbLabel.prototype.hideLabel = function () {\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  };\n\n  ThumbLabel.prototype.showLabel = function () {\n    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  };\n\n  ThumbLabel.prototype.setVertical = function () {\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_LABEL_IS_VERTICAL);\n  };\n\n  ThumbLabel.prototype.setHorizontal = function () {\n    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_LABEL_IS_VERTICAL);\n  };\n\n  return ThumbLabel;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThumbLabel);\n\n//# sourceURL=webpack:///./view/components/ThumbLabel.ts?");

/***/ })

/******/ });