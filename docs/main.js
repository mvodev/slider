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
eval("__webpack_require__.r(__webpack_exports__);\nclass ErrorMessage {\n  constructor(message) {\n    this.message = message;\n    this.showMessage();\n  }\n\n  showMessage() {\n    // eslint-disable-next-line no-console\n    console.error(`message: ${this.message}`);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorMessage);\n\n//# sourceURL=webpack:///./error-message/ErrorMessage.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _fsd_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fsd-slider.js */ \"./fsd-slider.js\");\n\r\n\r\n\r\nfunction setValuesToControlPanel(s, slider) {\r\n  $(`.js-control-panel__min-${slider}`).val(s.min);\r\n  $(`.js-control-panel__max-${slider}`).val(s.max);\r\n  $(`.js-control-panel__from-${slider}`).val(s.from);\r\n  $(`.js-control-panel__step-${slider}`).val(s.step);\r\n  if (s.isRange) {\r\n    $(`.js-control-panel__to-${slider}`).val(s.to);\r\n  } else {\r\n    $(`.js-control-panel__to-${slider}`).val('');\r\n  }\r\n  if (s.isRange) {\r\n    $(`.js-control-panel__values-${slider}`).val(`${s.from} - ${s.to}`);\r\n  } else {\r\n    $(`.js-control-panel__values-${slider}`).val(s.from);\r\n  }\r\n}\r\n\r\nconst $sl1 = $('.slider1');\r\nconst sl1Settings = {\r\n  min: 5000,\r\n  max: 25000,\r\n  from: 8000,\r\n  step: 1000,\r\n  to: 18000,\r\n  isVertical: false,\r\n  hideThumbLabel: false,\r\n  isRange: true,\r\n};\r\n\r\n$sl1.fsdSlider(sl1Settings, {\r\n  handleEvent: (message, result) => {\r\n    const s = JSON.parse(result);\r\n    setValuesToControlPanel(s, 'slider1');\r\n  },\r\n});\r\n\r\nconst $sl2 = $('.slider2');\r\nconst sl2Settings = {\r\n  min: 5,\r\n  max: 10,\r\n  from: 7,\r\n  step: 0.2,\r\n  isVertical: true,\r\n  hideThumbLabel: false,\r\n  isRange: false,\r\n};\r\n\r\n$sl2.fsdSlider(sl2Settings, {\r\n  handleEvent: (message, result) => {\r\n    const s = JSON.parse(result);\r\n    setValuesToControlPanel(s, 'slider2');\r\n  },\r\n});\r\n\r\nconst $sl3 = $('.slider3');\r\nconst sl3Settings = {\r\n  min: -15,\r\n  max: 100,\r\n  from: -5,\r\n  step: 5,\r\n  to: 20,\r\n  isVertical: false,\r\n  hideThumbLabel: false,\r\n  isRange: true,\r\n};\r\n\r\n$sl3.fsdSlider(sl3Settings, {\r\n  handleEvent: (message, result) => {\r\n    const s = JSON.parse(result);\r\n    setValuesToControlPanel(s, 'slider3');\r\n  },\r\n});\r\n\r\nconst sl1Instance = $sl1.data('fsdSlider');\r\nconst sl2Instance = $sl2.data('fsdSlider');\r\nconst sl3Instance = $sl3.data('fsdSlider');\r\n\r\nfunction collectData(sliderNumber) {\r\n  const result = {\r\n    min: $(`.js-control-panel__min-${sliderNumber}`).val(),\r\n    max: $(`.js-control-panel__max-${sliderNumber}`).val(),\r\n    from: $(`.js-control-panel__from-${sliderNumber}`).val(),\r\n    to: $(`.js-control-panel__to-${sliderNumber}`).val(),\r\n    step: $(`.js-control-panel__step-${sliderNumber}`).val(),\r\n    hideThumbLabel: $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).is(':checked'),\r\n    isVertical: $(`.js-control-panel__is-vertical-${sliderNumber}`).is(':checked'),\r\n    isRange: $(`.js-control-panel__is-range-${sliderNumber}`).is(':checked'),\r\n  };\r\n  return result;\r\n}\r\n\r\nfunction inputHandler() {\r\n  if ($(this).parent().parent().hasClass('js-control-panel__form_slider1')) {\r\n    sl1Instance.update(collectData('slider1'));\r\n  } else if ($(this).parent().parent().hasClass('js-control-panel__form_slider2')) {\r\n    sl2Instance.update(collectData('slider2'));\r\n  } else if ($(this).parent().parent().hasClass('js-control-panel__form_slider3')) {\r\n    sl3Instance.update(collectData('slider3'));\r\n  }\r\n}\r\n\r\n$('input').on('change', inputHandler);\r\n\r\nfunction setSettingsToInputs() {\r\n  if (sl1Settings.isVertical) {\r\n    $('.js-control-panel__is-vertical-slider1').prop('checked', true);\r\n  }\r\n  if (sl1Settings.isRange) {\r\n    $('.js-control-panel__is-range-slider1').prop('checked', true);\r\n  }\r\n  if (sl1Settings.hideThumbLabel) {\r\n    $('.js-control-panel__hide-thumb-label-slider1').prop('checked', true);\r\n  }\r\n  if (sl2Settings.isVertical) {\r\n    $('.js-control-panel__is-vertical-slider2').prop('checked', true);\r\n  }\r\n  if (sl2Settings.isRange) {\r\n    $('.js-control-panel__is-range-slider2').prop('checked', true);\r\n  }\r\n  if (sl2Settings.hideThumbLabel) {\r\n    $('.js-control-panel__hide-thumb-label-slider2').prop('checked', true);\r\n  }\r\n  if (sl3Settings.isVertical) {\r\n    $('.js-control-panel__is-vertical-slider3').prop('checked', true);\r\n  }\r\n  if (sl3Settings.isRange) {\r\n    $('.js-control-panel__is-range-slider3').prop('checked', true);\r\n  }\r\n  if (sl3Settings.hideThumbLabel) {\r\n    $('.js-control-panel__hide-thumb-label-slider3').prop('checked', true);\r\n  }\r\n  return 0;\r\n}\r\n\r\nsetSettingsToInputs();\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ \"./utils/Utils.ts\");\n/* harmony import */ var _defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\n\n\n\n\n\nclass Model extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(settings) {\n    super();\n    this.settings = Object.assign({}, _defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    this.setSettings(settings);\n  }\n\n  setSettings(settings) {\n    this.settings = Object.assign({}, settings);\n  }\n\n  getSettings() {\n    return JSON.stringify(this.settings);\n  }\n\n  updateSettings(settings) {\n    this.validateSettings(settings);\n    this.notifyObservers(1\n    /* UPDATE */\n    , this.getSettings(), 0);\n  }\n\n  getMin() {\n    return this.settings.min;\n  }\n\n  getMax() {\n    return this.settings.max;\n  }\n\n  setFrom(valueInPercent, thumbWidthInPercent) {\n    const from = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);\n\n    if (from > this.settings.max) {\n      this.settings.from = this.settings.max;\n    } else if (from < this.settings.min) {\n      this.settings.from = this.settings.min;\n    } else this.settings.from = from;\n  }\n\n  getFrom() {\n    return this.settings.from;\n  }\n\n  setTo(valueInPercent, thumbWidthInPercent) {\n    const to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);\n\n    if (to >= this.settings.max) {\n      this.settings.to = this.settings.max;\n    } else if (to <= this.settings.from) {\n      this.settings.to = this.settings.from;\n    } else this.settings.to = to;\n  }\n\n  getTo() {\n    return this.settings.to;\n  }\n\n  getStep() {\n    return this.settings.step ? this.settings.step : 1;\n  }\n\n  validateSettings(settings) {\n    const newMin = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.min);\n    const newMax = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.max);\n    const newFrom = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.from);\n    const newTo = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.to);\n    const newStep = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToNumber(settings.step);\n    const newIsVertical = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToBoolean(settings.isVertical);\n    const newHideThumbLabel = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToBoolean(settings.hideThumbLabel);\n    const newRange = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertFromInputToBoolean(settings.isRange);\n\n    if (newMin !== undefined && newMax !== undefined) {\n      if (Math.abs(newMax - newMin) < this.settings.step) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable values,difference between min and max more than step');\n      }\n    }\n\n    if (newMin !== undefined) {\n      if (newMin > this.settings.from) {\n        this.settings.min = this.settings.from;\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,min value more than from value');\n      } else {\n        this.settings.min = newMin;\n      }\n    }\n\n    if (newMax !== undefined) {\n      if (this.settings.isRange && newMax < this.settings.to) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,min value more than to value');\n      } else if (!this.settings.isRange && newMax < this.settings.from) {\n        this.settings.max = this.settings.from + this.settings.step;\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,min value more than from value');\n      } else {\n        this.settings.max = newMax;\n      }\n    }\n\n    if (newFrom !== undefined && newTo !== undefined) {\n      if (newFrom > newTo && this.settings.isRange) {\n        this.settings.from = this.settings.min;\n        this.settings.to = this.settings.max;\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from more than to');\n      }\n    }\n\n    if (newFrom !== undefined && !this.settings.isRange) {\n      if (newFrom > this.settings.max) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from more than max');\n      }\n\n      if (newFrom < this.settings.min) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from less than min');\n      }\n\n      this.settings.from = newFrom;\n    }\n\n    if (newFrom !== undefined && this.settings.isRange) {\n      if (newFrom > this.settings.to) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from more than to');\n      } else if (newFrom < this.settings.min) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,from less than min');\n      } else this.settings.from = newFrom;\n    }\n\n    if (newTo !== undefined && this.settings.isRange) {\n      if (newTo < this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,to less than from');\n      } else if (newTo > this.settings.max) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('unacceptable value,to more than max');\n      } else this.settings.to = newTo;\n    }\n\n    if (newStep !== undefined) {\n      if (newStep < 0) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('step must be positive');\n      } else if (newStep === 0) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('step must not be zero');\n      } else if (newStep > Math.abs(this.settings.max - this.settings.min)) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('step must be more than difference between max and min');\n      } else if (this.settings.step !== newStep) {\n        this.settings.step = newStep;\n        this.settings.from = this.settings.min + this.settings.step;\n        this.settings.to = this.settings.from + this.settings.step;\n      }\n    }\n\n    this.settings.isVertical = newIsVertical;\n    this.settings.hideThumbLabel = newHideThumbLabel;\n\n    if (newRange !== undefined) {\n      if (!this.settings.isRange) {\n        this.settings.to = this.settings.from + this.settings.step > this.settings.max ? this.settings.max : this.settings.from + this.settings.step;\n      }\n\n      this.settings.isRange = newRange;\n\n      if (this.settings.from >= this.settings.to) {\n        this.settings.from = this.settings.min;\n      }\n    }\n  }\n\n  convertFromPercentToValue(valueInPercent, thumbWidthInPercent) {\n    if (valueInPercent <= 0) {\n      return this.getMin();\n    }\n\n    if (valueInPercent >= 100 - thumbWidthInPercent) {\n      return this.getMax();\n    }\n\n    let del = 1;\n\n    if (this.getStep() !== 0) {\n      del = 1.0 / this.getStep();\n    }\n\n    const diapason = Math.abs(this.getMax() - this.getMin());\n    const res = Math.round(+(diapason * valueInPercent / (100 - thumbWidthInPercent)).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numDigitsAfterDecimal(this.getStep())) * del) / del + this.getMin();\n    if (res < this.getMin()) return this.getMin();\n    if (res > this.getMax()) return this.getMax();\n    return res;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n//# sourceURL=webpack:///./model/Model.ts?");

/***/ }),

/***/ "./model/defaultSettings.ts":
/*!**********************************!*\
  !*** ./model/defaultSettings.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst defaultSettings = {\n  min: 0,\n  max: 10,\n  from: 5,\n  step: 1,\n  to: 8,\n  isRange: false,\n  isVertical: false,\n  hideThumbLabel: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultSettings);\n\n//# sourceURL=webpack:///./model/defaultSettings.ts?");

/***/ }),

/***/ "./observers/EventObservable.ts":
/*!**************************************!*\
  !*** ./observers/EventObservable.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass EventObservable {\n  constructor() {\n    this.observers = [];\n  }\n\n  addObserver(o) {\n    this.observers.push(o);\n  }\n\n  removeObserver(o) {\n    this.observers.filter(subscriber => subscriber !== o);\n  }\n\n  notifyObservers(msg, settings, width) {\n    this.observers.forEach(elem => {\n      if (elem && 'handleEvent' in elem) {\n        elem.handleEvent(msg, settings, width);\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventObservable);\n\n//# sourceURL=webpack:///./observers/EventObservable.ts?");

/***/ }),

/***/ "./presenter/Presenter.ts":
/*!********************************!*\
  !*** ./presenter/Presenter.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n\n\nclass Presenter extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(view, model) {\n    super();\n    this.view = view;\n    this.model = model;\n  }\n\n  handleEvent(msg, s, thumbWidthInPercentage) {\n    if (msg === 1\n    /* UPDATE */\n    ) {\n        this.view.refreshView(1\n        /* UPDATE */\n        , JSON.parse(s));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      } else if (msg === 4\n    /* SET_FROM */\n    ) {\n        this.model.setFrom(JSON.parse(s).from, thumbWidthInPercentage);\n        this.view.refreshView(2\n        /* FROM_IS_SET */\n        , JSON.parse(this.model.getSettings()));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      } else if (msg === 5\n    /* SET_TO */\n    ) {\n        this.model.setTo(JSON.parse(s).to, thumbWidthInPercentage);\n        this.view.refreshView(3\n        /* TO_IS_SET */\n        , JSON.parse(this.model.getSettings()));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      }\n  }\n\n  initialize() {\n    this.view.refreshView(0\n    /* INIT */\n    , JSON.parse(this.model.getSettings()));\n    this.notifyObservers(1\n    /* UPDATE */\n    , this.model.getSettings(), 0);\n  }\n\n  update(newSettings) {\n    this.model.updateSettings(newSettings);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Presenter);\n\n//# sourceURL=webpack:///./presenter/Presenter.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\nconst ClassNaming = {\n  ROOT: 'fsd-slider',\n  RANGE: 'fsd-slider__range',\n  RANGE_LABEL: 'fsd-slider__range-label',\n  RANGE_LABEL_SCALE: 'fsd-slider__range-label-scale',\n  COLORED_RANGE: 'fsd-slider__colored-range',\n  THUMB_TO: 'fsd-slider__thumb-to',\n  THUMB_FROM: 'fsd-slider__thumb-from',\n  THUMB_LABEL: 'fsd-slider__thumb-label',\n  THUMB_VALUE: 'fsd-slider__thumb-value',\n  SLIDER_IS_VERTICAL: 'fsd-slider_is_vertical',\n  RANGE_IS_VERTICAL: 'fsd-slider__range_is_vertical',\n  COLORED_RANGE_IS_VERTICAL: 'fsd-slider__colored-range_is_vertical',\n  RANGE_LABEL_IS_VERTICAL: 'fsd-slider__range-label_is_vertical',\n  THUMB_LABEL_IS_VERTICAL: 'fsd-slider__thumb-label_is_vertical',\n  HIDE_ELEMENT: 'fsd-slider_element_is_hidden'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassNaming);\n\n//# sourceURL=webpack:///./utils/ClassNaming.ts?");

/***/ }),

/***/ "./utils/Constants.ts":
/*!****************************!*\
  !*** ./utils/Constants.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Constants = {\n  NUMBER_OF_LABELS: 3,\n  THUMB_FROM: 'thumbFrom',\n  THUMB_TO: 'thumbTo'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n//# sourceURL=webpack:///./utils/Constants.ts?");

/***/ }),

/***/ "./utils/Utils.ts":
/*!************************!*\
  !*** ./utils/Utils.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Utils {\n  static numDigitsAfterDecimal(value) {\n    if (value) {\n      return (value.toString().split('.')[1] || '').length;\n    }\n\n    return 0;\n  }\n\n  static convertFromInputToNumber(value) {\n    const number = parseFloat(String(value));\n\n    if (Number.isNaN(number)) {\n      return undefined;\n    }\n\n    return number;\n  }\n\n  static convertFromInputToBoolean(value) {\n    return Boolean(value);\n  }\n\n  static roundWithStep(value, step, min) {\n    let del = 1;\n\n    if (step !== 0) {\n      del = 1.0 / step;\n    }\n\n    const result = Math.round(+(value - min).toFixed(Utils.numDigitsAfterDecimal(step)) * del) / del + min;\n    return result;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack:///./utils/Utils.ts?");

/***/ }),

/***/ "./view/View.ts":
/*!**********************!*\
  !*** ./view/View.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider */ \"./view/components/Slider.ts\");\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\n\n\n\n\n\nclass View extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(root) {\n    super();\n    this.viewSettings = Object.assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    if (root) {\n      this.rootElem = root;\n      this.slider = new _components_Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.rootElem);\n      this.slider.addObserver(this); // eslint-disable-next-line no-new\n    } else new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('root elem of Slider is null!');\n  }\n\n  handleEvent(msg, settings) {\n    this.notifyObservers(msg, settings, this.getThumbWidthInPercentage());\n  }\n\n  render(s) {\n    this.slider.render(JSON.stringify(s));\n  }\n\n  refreshView(msg, settings) {\n    if (msg === 0\n    /* INIT */\n    || msg === 1\n    /* UPDATE */\n    ) {\n        this.updateViewSettings(settings);\n        this.render(this.viewSettings);\n      } else if (msg === 2\n    /* FROM_IS_SET */\n    ) {\n        this.slider.setValueToLabelThumbFrom(settings.from);\n      } else if (msg === 3\n    /* TO_IS_SET */\n    ) {\n        this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);\n      }\n  }\n\n  getSlider() {\n    return this.slider;\n  }\n\n  getThumbWidthInPercentage() {\n    return this.slider.getThumbWidthInPercentage();\n  }\n\n  updateViewSettings(s) {\n    this.viewSettings = Object.assign(this.viewSettings, s);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack:///./view/View.ts?");

/***/ }),

/***/ "./view/components/ColoredRange.ts":
/*!*****************************************!*\
  !*** ./view/components/ColoredRange.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nclass ColoredRange {\n  constructor() {\n    this.coloredRange = document.createElement('div');\n    this.coloredRange.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORED_RANGE);\n  }\n\n  getColoredRange() {\n    return this.coloredRange;\n  }\n\n  setColoredRange(viewSettings, thumbFrom, thumbTo, thumbWidthInPercentage) {\n    if (viewSettings.isRange) {\n      if (viewSettings.isVertical) {\n        this.getColoredRange().style.top = thumbFrom.style.top;\n        this.getColoredRange().style.left = '0%';\n        this.getColoredRange().style.width = '100%';\n        this.getColoredRange().style.height = `${Number.parseInt(thumbTo.style.top, 10) - Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage / 2}%`;\n      } else {\n        this.getColoredRange().style.left = thumbFrom.style.left;\n        this.getColoredRange().style.top = '0%';\n        this.getColoredRange().style.height = '100%';\n        this.getColoredRange().style.width = `${Number.parseInt(thumbTo.style.left, 10) - Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage / 2}%`;\n      }\n    } else if (!viewSettings.isRange) {\n      if (viewSettings.isVertical) {\n        this.getColoredRange().style.top = '0%';\n        this.getColoredRange().style.width = '100%';\n        this.getColoredRange().style.height = `${Number.parseInt(thumbFrom.style.top, 10) + thumbWidthInPercentage / 2}%`;\n      } else {\n        this.getColoredRange().style.width = `${Number.parseInt(thumbFrom.style.left, 10) + thumbWidthInPercentage / 2}%`;\n        this.getColoredRange().style.left = '0%';\n        this.getColoredRange().style.top = '0%';\n        this.getColoredRange().style.height = '100%';\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColoredRange);\n\n//# sourceURL=webpack:///./view/components/ColoredRange.ts?");

/***/ }),

/***/ "./view/components/Range.ts":
/*!**********************************!*\
  !*** ./view/components/Range.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n/* harmony import */ var _ColoredRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColoredRange */ \"./view/components/ColoredRange.ts\");\n/* harmony import */ var _Thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumb */ \"./view/components/Thumb.ts\");\n\n\n\n\nclass Range {\n  constructor(settings) {\n    const div = document.createElement('div');\n    div.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE);\n    this.range = div;\n    this.viewSettings = settings;\n    this.coloredRange = new _ColoredRange__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.thumbTo = new _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_TO);\n    this.thumbFrom = new _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_FROM);\n    this.getRange().appendChild(this.coloredRange.getColoredRange());\n    this.getRange().appendChild(this.thumbFrom.getThumb());\n  }\n\n  getRange() {\n    return this.range;\n  }\n\n  render(settings) {\n    Object.assign(this.viewSettings, JSON.parse(settings));\n\n    if (this.viewSettings.isRange) {\n      this.getRange().appendChild(this.thumbTo.getThumb());\n    } else if (!this.viewSettings.isRange) {\n      if (this.getRange().contains(this.thumbTo.getThumb())) {\n        this.getRange().removeChild(this.thumbTo.getThumb());\n      }\n    }\n  }\n\n  setVertical() {\n    this.range.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_IS_VERTICAL);\n    this.coloredRange.getColoredRange().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORED_RANGE_IS_VERTICAL);\n    this.thumbFrom.setVertical();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.setVertical();\n    }\n  }\n\n  setHorizontal() {\n    this.range.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_IS_VERTICAL);\n    this.coloredRange.getColoredRange().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORED_RANGE_IS_VERTICAL);\n    this.thumbFrom.setHorizontal();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.setHorizontal();\n    }\n  }\n\n  setColoredRange(thumbWidthInPercentage) {\n    this.coloredRange.setColoredRange(this.viewSettings, this.thumbFrom.getThumb(), this.thumbTo.getThumb(), thumbWidthInPercentage);\n  }\n\n  getThumbFrom() {\n    return this.thumbFrom.getThumb();\n  }\n\n  getThumbTo() {\n    return this.thumbTo.getThumb();\n  }\n\n  hideLabel() {\n    this.thumbFrom.hideLabel();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.hideLabel();\n    }\n  }\n\n  showLabel() {\n    this.thumbFrom.showLabel();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.showLabel();\n    }\n  }\n\n  setValueToLabelThumbFrom(value) {\n    this.thumbFrom.setValueToLabel(value);\n  }\n\n  setValueToLabelThumbTo(value) {\n    this.thumbTo.setValueToLabel(value);\n  }\n\n  setThumbPositionFrom(shift, isVertical) {\n    this.thumbFrom.setThumbPosition(shift, isVertical);\n  }\n\n  setThumbPositionTo(shift, isVertical) {\n    this.thumbTo.setThumbPosition(shift, isVertical);\n  }\n\n  getThumbWidthInPx() {\n    if (this.viewSettings.isVertical) {\n      return this.getThumbFrom().offsetHeight;\n    }\n\n    return this.getThumbFrom().offsetWidth;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Range);\n\n//# sourceURL=webpack:///./view/components/Range.ts?");

/***/ }),

/***/ "./view/components/RangeLabel.ts":
/*!***************************************!*\
  !*** ./view/components/RangeLabel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nclass RangeLabel {\n  constructor(settings) {\n    this.labels = [];\n    this.settings = Object.assign({}, settings);\n    this.initComponents();\n  }\n\n  render(settings) {\n    this.settings = Object.assign(this.settings, settings);\n    this.setMinRange(this.settings.min);\n    this.setMaxRange(this.settings.max);\n  }\n\n  getRangeLabel() {\n    return this.rangeLabelContainer;\n  }\n\n  setMinRange(value) {\n    this.minLabel.innerText = `${value}`;\n  }\n\n  setMaxRange(value) {\n    this.maxLabel.innerText = `${value}`;\n  }\n\n  initComponents() {\n    this.rangeLabelContainer = document.createElement('div');\n    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL);\n    this.minLabel = document.createElement('span');\n    this.minLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_SCALE);\n    this.maxLabel = document.createElement('span');\n    this.maxLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_SCALE);\n    this.rangeLabelContainer.appendChild(this.minLabel);\n    this.labels.push(this.minLabel);\n    const pivotMark = document.createElement('span');\n    pivotMark.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_SCALE);\n    this.labels.push(pivotMark);\n    this.rangeLabelContainer.appendChild(pivotMark);\n    this.rangeLabelContainer.appendChild(this.maxLabel);\n    this.labels.push(this.maxLabel);\n  }\n\n  setVertical() {\n    this.getRangeLabel().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_IS_VERTICAL);\n  }\n\n  setHorizontal() {\n    this.getRangeLabel().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_LABEL_IS_VERTICAL);\n  }\n\n  getLabels() {\n    return this.labels;\n  }\n\n  hideLabels() {\n    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  }\n\n  showLabels() {\n    this.rangeLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RangeLabel);\n\n//# sourceURL=webpack:///./view/components/RangeLabel.ts?");

/***/ }),

/***/ "./view/components/Slider.ts":
/*!***********************************!*\
  !*** ./view/components/Slider.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range */ \"./view/components/Range.ts\");\n/* harmony import */ var _RangeLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeLabel */ \"./view/components/RangeLabel.ts\");\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Constants */ \"./utils/Constants.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Utils */ \"./utils/Utils.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\n/* eslint-disable no-new */\n\n\n\n\n\n\n\n\n\nclass Slider extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n  constructor(rootElem) {\n    super();\n    this.settings = Object.assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n    if (rootElem) {\n      this.rootElem = rootElem;\n    } else {\n      new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('root elem of Slider is null!');\n    }\n\n    this.fromInPx = 0;\n    this.toInPx = 0;\n    this.initSliderComponents();\n  }\n\n  render(settings) {\n    this.settings = Object.assign(this.settings, JSON.parse(settings));\n    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ROOT);\n    this.container.appendChild(this.range.getRange());\n    this.range.render(settings);\n    this.rangeLabel.render(JSON.parse(settings));\n    this.container.appendChild(this.rangeLabel.getRangeLabel());\n    this.rootElem.appendChild(this.container);\n\n    if (this.settings.hideThumbLabel) {\n      this.range.hideLabel();\n    } else {\n      this.range.showLabel();\n    }\n\n    if (this.settings.isVertical) {\n      this.setVertical();\n    } else {\n      this.setHorizontal();\n    }\n\n    this.bindEvents();\n    this.range.setValueToLabelThumbFrom(this.settings.from);\n    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from), this.settings.isVertical);\n\n    if (this.settings.isRange) {\n      this.range.setValueToLabelThumbTo(this.settings.to);\n      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);\n    }\n\n    this.setLabelsPosition();\n    this.setColoredRange();\n    this.calculateThumbPos();\n  }\n\n  calculateThumbPos() {\n    this.fromInPx = this.convertFromValueToPx(this.settings.from);\n\n    if (this.settings.isRange) {\n      this.toInPx = this.convertFromValueToPx(this.settings.to);\n    } else this.toInPx = this.getSliderLengthInPx();\n  }\n\n  initSliderComponents() {\n    this.range = new _Range__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.settings);\n    this.rangeLabel = new _RangeLabel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.settings);\n    this.container = document.createElement('div');\n  }\n\n  setLabelsPosition() {\n    const diapason = Math.abs(this.settings.max - this.settings.min);\n    const pivot = diapason / 2 + this.settings.min;\n    const pivotRounded = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__[\"default\"].roundWithStep(pivot, this.settings.step, this.settings.min);\n\n    if (!this.settings.isVertical) {\n      //  set min value label\n      this.getLabels()[0].setAttribute('value', this.settings.min.toString());\n      this.getLabels()[0].style.left = `${this.getThumbWidthInPercentage() / 2 - this.getLabels()[0].offsetWidth * 100 / this.getSliderLengthInPx() / 2}%`;\n      this.getLabels()[0].style.top = ''; // set max value label\n\n      this.getLabels()[2].setAttribute('value', this.settings.max.toString());\n      this.getLabels()[2].style.left = `${100 - (this.getLabels()[2].offsetWidth / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx() * 100}%`;\n      this.getLabels()[2].style.top = ''; // set average value label\n\n      this.getLabels()[1].setAttribute('value', pivotRounded.toString());\n      this.getLabels()[1].innerText = pivotRounded.toString();\n      this.getLabels()[1].style.left = `${this.convertFromValueToPercent(pivotRounded) + this.getThumbWidthInPercentage() / 2 - this.getLabels()[1].offsetWidth * 100 / this.getSliderLengthInPx() / 2}%`;\n      this.getLabels()[1].style.top = '';\n    } else {\n      // set min value label\n      this.getLabels()[0].setAttribute('value', this.settings.min.toString());\n      this.getLabels()[0].style.top = `${this.getThumbWidthInPercentage() / 2 - this.getLabels()[0].offsetHeight * 100 / this.getSliderLengthInPx() / 2}%`;\n      this.getLabels()[0].style.left = ''; // set max value label\n\n      this.getLabels()[2].setAttribute('value', this.settings.max.toString());\n      this.getLabels()[2].style.top = `${100 - (this.getLabels()[2].offsetHeight / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx() * 100}%`;\n      this.getLabels()[2].style.left = ''; // set average value label\n\n      this.getLabels()[1].setAttribute('value', pivotRounded.toString());\n      this.getLabels()[1].innerText = pivotRounded.toString();\n      this.getLabels()[1].style.top = `${this.convertFromValueToPercent(pivotRounded) + this.getThumbWidthInPercentage() / 2 - this.getLabels()[1].offsetHeight * 100 / this.getSliderLengthInPx() / 2}%`;\n      this.getLabels()[1].style.left = '';\n    }\n  }\n\n  bindEvents() {\n    this.handleRangeBinded = this.handleRange.bind(this, 'range');\n    this.initResizeObserver();\n    this.handleRangeLabelBinded = this.handleRangeLabel.bind(this);\n    this.getRange().addEventListener('mousedown', this.handleRangeBinded);\n    this.rangeLabel.getLabels().forEach(elem => elem.addEventListener('click', this.handleRangeLabelBinded));\n  }\n\n  initResizeObserver() {\n    const resizeObserver = new ResizeObserver(() => {\n      this.range.setValueToLabelThumbFrom(this.settings.from);\n      this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from), this.settings.isVertical);\n\n      if (this.settings.isRange) {\n        this.range.setValueToLabelThumbTo(this.settings.to);\n        this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);\n      }\n\n      this.setColoredRange();\n      this.setLabelsPosition();\n      this.calculateThumbPos();\n    });\n    resizeObserver.observe(this.rootElem);\n  }\n\n  bindExtraListeners(thumbType) {\n    this.handleThumbMoveBinded = this.handleThumbMove.bind(this, thumbType);\n    this.removeHandlerBinded = this.removeHandler.bind(this);\n    document.addEventListener('mousemove', this.handleThumbMoveBinded);\n    document.addEventListener('mouseup', this.removeHandlerBinded);\n  }\n\n  unbindEvents() {\n    this.removeHandler();\n    this.getRangeLabel().removeEventListener('mousedown', this.handleRangeLabelBinded);\n    this.getRange().removeEventListener('mousedown', this.handleRangeBinded);\n  }\n\n  handleRangeLabel(e) {\n    if (e.target instanceof Element) {\n      if (e.target.getAttribute('value')) {\n        const targetValue = Number(e.target.getAttribute('value'));\n        const roundedValue = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__[\"default\"].roundWithStep(targetValue, this.settings.step, this.settings.min);\n\n        if (!this.settings.isRange) {\n          if (targetValue === this.settings.max) {\n            this.dispatchEvent(this.convertFromValueToPx(targetValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          } else {\n            this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        } else if (this.settings.isRange) {\n          if (targetValue >= this.settings.to) {\n            if (targetValue === this.settings.max) {\n              this.dispatchEvent(this.convertFromValueToPx(targetValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            } else {\n              this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            }\n          } else if (targetValue <= this.settings.from) {\n            this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          } else {\n            const pivot = Math.abs(this.settings.to - this.settings.from) / 2;\n\n            if (targetValue <= pivot + this.settings.from) {\n              this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            } else if (targetValue > pivot + this.settings.from) {\n              if (roundedValue <= this.settings.max) {\n                this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n              }\n            }\n          }\n        }\n      }\n    }\n\n    this.setColoredRange();\n  }\n\n  handleRange(type, e) {\n    if (e instanceof MouseEvent) {\n      let clickedPos;\n      let thumbType = '';\n      const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();\n\n      if (this.settings.isVertical) {\n        clickedPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2;\n      } else {\n        clickedPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;\n      }\n\n      if (clickedPos > bottom) clickedPos = bottom;\n      if (clickedPos < 0) clickedPos = 0;\n\n      if (this.settings.isRange) {\n        if (clickedPos < this.fromInPx) {\n          thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM;\n\n          if (Math.abs(clickedPos - this.getStepInPx()) <= this.fromInPx) {\n            this.fromInPx -= this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        } else if (clickedPos > this.toInPx) {\n          thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO;\n\n          if (clickedPos + this.getStepInPx() > this.toInPx) {\n            if (clickedPos >= bottom) {\n              this.dispatchEvent(clickedPos, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            } else {\n              this.toInPx += this.roundPos(this.toInPx, clickedPos);\n              this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            }\n          }\n        } else if (clickedPos >= this.fromInPx && clickedPos <= this.toInPx) {\n          const pivot = (this.toInPx - this.fromInPx) / 2;\n\n          if (Math.abs(clickedPos + this.getStepInPx()) <= this.fromInPx + pivot) {\n            thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM;\n            this.fromInPx += this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n\n          if (Math.abs(clickedPos + this.getStepInPx()) > this.fromInPx + pivot) {\n            thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO;\n            this.toInPx -= this.roundPos(this.toInPx, clickedPos);\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n          }\n        }\n      } else {\n        thumbType = _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM;\n\n        if (clickedPos + this.getThumbWidthInPx() / 2 < this.fromInPx) {\n          if (Math.abs(clickedPos - this.getStepInPx()) < this.fromInPx) {\n            this.fromInPx -= this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        } else if (clickedPos + this.getThumbWidthInPx() / 2 > this.fromInPx) {\n          if (Math.abs(clickedPos + this.getStepInPx()) > this.fromInPx && Math.floor(this.fromInPx + Math.round(Math.abs(this.fromInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx()) <= bottom) {\n            this.fromInPx += this.roundPos(this.fromInPx, clickedPos);\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n          }\n        }\n      }\n\n      if (type === 'range') {\n        this.bindExtraListeners(thumbType);\n      }\n    }\n  }\n\n  handleThumbMove(thumbType, e) {\n    let newPos;\n    const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();\n\n    if (e instanceof MouseEvent) {\n      if (this.settings.isVertical) {\n        newPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2;\n      } else {\n        newPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;\n      }\n\n      if (newPos < 0) {\n        newPos = 0;\n      }\n\n      if (newPos >= bottom) {\n        newPos = bottom;\n      }\n\n      if (thumbType === _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM) {\n        if (this.settings.isRange) {\n          if (newPos < this.fromInPx) {\n            if (Math.abs(newPos - this.getStepInPx()) <= this.fromInPx) {\n              this.fromInPx -= this.roundPos(this.fromInPx, newPos);\n              this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            }\n          } else if (newPos <= this.toInPx && newPos > this.fromInPx) {\n            if (Math.abs(newPos + this.getStepInPx()) > this.fromInPx && Math.abs(newPos + this.getStepInPx()) <= this.toInPx) {\n              this.fromInPx += this.roundPos(this.fromInPx, newPos);\n              this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            }\n          }\n        } else if (!this.settings.isRange) {\n          if (newPos < this.fromInPx) {\n            if (Math.abs(newPos - this.getStepInPx()) < this.fromInPx) {\n              this.fromInPx -= this.roundPos(this.fromInPx, newPos);\n              this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n            }\n          } else {\n            const valueRoundedInPx = this.roundPos(this.fromInPx, newPos);\n\n            if (Math.abs(newPos + this.getStepInPx()) > this.fromInPx) {\n              if (newPos >= bottom) {\n                this.dispatchEvent(newPos, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n              } else {\n                this.fromInPx += valueRoundedInPx;\n                this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_FROM);\n              }\n            }\n          }\n        }\n      } else if (thumbType === _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO) {\n        if (newPos > this.toInPx) {\n          const valueRoundedInPx = this.roundPos(this.toInPx, newPos);\n\n          if (newPos + this.getStepInPx() > this.toInPx) {\n            if (newPos >= bottom) {\n              this.dispatchEvent(newPos, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            } else {\n              this.toInPx += valueRoundedInPx;\n              this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n            }\n          }\n        } else if (newPos < this.toInPx && newPos > this.fromInPx) {\n          if (Math.abs(newPos - this.getStepInPx()) >= this.fromInPx) {\n            this.toInPx -= this.roundPos(this.toInPx, newPos);\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"default\"].THUMB_TO);\n          }\n        }\n      }\n    }\n  }\n\n  roundPos(thumbInPx, newPos) {\n    return Math.round(Math.abs(thumbInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n  }\n\n  removeHandler() {\n    document.removeEventListener('mousemove', this.handleThumbMoveBinded);\n    document.removeEventListener('mouseup', this.removeHandlerBinded);\n  }\n\n  convertFromPxToPercent(valueInPX) {\n    if (valueInPX < 0) {\n      return 0;\n    }\n\n    const res = valueInPX / this.getSliderLengthInPx() * 100;\n\n    if (res > 100 - this.getThumbWidthInPercentage()) {\n      return 100 - this.getThumbWidthInPercentage();\n    }\n\n    return +res.toFixed(20);\n  }\n\n  convertFromValueToPx(value) {\n    return Math.abs(value - this.settings.min) / Math.abs(this.settings.max - this.settings.min) * (this.getSliderLengthInPx() - this.getThumbWidthInPx());\n  }\n\n  convertFromValueToPercent(value) {\n    const res = (100 - this.getThumbWidthInPercentage()) / Math.abs(this.settings.max - this.settings.min) * Math.abs(value - this.settings.min);\n\n    if (res > 100 - this.getThumbWidthInPercentage()) {\n      return 100 - this.getThumbWidthInPercentage();\n    }\n\n    return res;\n  }\n\n  getThumbWidthInPercentage() {\n    if (this.settings.isVertical) {\n      return this.getThumbFrom().offsetHeight / this.getSliderLengthInPx() * 100;\n    }\n\n    return this.getThumbFrom().offsetWidth / this.getSliderLengthInPx() * 100;\n  }\n\n  getSliderLengthInPx() {\n    if (this.settings.isVertical) {\n      return this.getRange().offsetHeight;\n    }\n\n    return this.getRange().offsetWidth;\n  }\n\n  dispatchEvent(shift, type) {\n    const valueInPercentage = this.convertFromPxToPercent(shift);\n\n    if (type === 'thumbFrom') {\n      this.range.setThumbPositionFrom(valueInPercentage, this.settings.isVertical);\n      this.notifyObservers(4\n      /* SET_FROM */\n      , JSON.stringify({\n        from: valueInPercentage\n      }), 0);\n    } else {\n      this.range.setThumbPositionTo(valueInPercentage, this.settings.isVertical);\n      this.notifyObservers(5\n      /* SET_TO */\n      , JSON.stringify({\n        to: valueInPercentage\n      }), 0);\n    }\n\n    this.setColoredRange();\n  }\n\n  getRange() {\n    return this.range.getRange();\n  }\n\n  setValueToLabelThumbFrom(value) {\n    this.range.setValueToLabelThumbFrom(value);\n    this.settings.from = value;\n  }\n\n  setValueToLabelThumbTo(value) {\n    this.range.setValueToLabelThumbTo(value);\n    this.settings.to = value;\n  }\n\n  getRangeLabel() {\n    return this.rangeLabel.getRangeLabel();\n  }\n\n  getThumbFrom() {\n    return this.range.getThumbFrom();\n  }\n\n  setVertical() {\n    this.unbindEvents();\n    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SLIDER_IS_VERTICAL);\n    this.range.setVertical();\n    this.rangeLabel.setVertical();\n  }\n\n  setHorizontal() {\n    this.unbindEvents();\n    this.container.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SLIDER_IS_VERTICAL);\n    this.range.setHorizontal();\n    this.rangeLabel.setHorizontal();\n  }\n\n  setColoredRange() {\n    this.range.setColoredRange(this.getThumbWidthInPercentage());\n  }\n\n  getThumbWidthInPx() {\n    return this.range.getThumbWidthInPx();\n  }\n\n  getThumbLabelFrom() {\n    return this.range.getThumbFrom();\n  }\n\n  getThumbLabelTo() {\n    return this.range.getThumbTo();\n  }\n\n  getStepInPx() {\n    return (this.getSliderLengthInPx() - this.getThumbWidthInPx()) / Math.abs((this.settings.max - this.settings.min) / this.settings.step);\n  }\n\n  getLabels() {\n    return this.rangeLabel.getLabels();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./view/components/Slider.ts?");

/***/ }),

/***/ "./view/components/Thumb.ts":
/*!**********************************!*\
  !*** ./view/components/Thumb.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbLabel */ \"./view/components/ThumbLabel.ts\");\n\n\nclass Thumb {\n  constructor(className) {\n    this.thumb = document.createElement('div');\n    this.thumb.classList.add(className);\n    this.thumbLabel = new _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.thumbLabelHTML = this.thumbLabel.getThumbLabelContainer();\n    this.thumb.appendChild(this.thumbLabelHTML);\n  }\n\n  getThumb() {\n    return this.thumb;\n  }\n\n  setThumbPosition(shift, isVertical) {\n    if (isVertical) {\n      this.getThumb().style.top = `${shift}%`;\n      this.getThumb().style.left = '-25%';\n    } else {\n      this.getThumb().style.left = `${shift}%`;\n      this.getThumb().style.top = '-25%';\n    }\n  }\n\n  setVertical() {\n    this.thumbLabel.setVertical();\n  }\n\n  setHorizontal() {\n    this.thumbLabel.setHorizontal();\n  }\n\n  hideLabel() {\n    this.thumbLabel.hideLabel();\n  }\n\n  showLabel() {\n    this.thumbLabel.showLabel();\n  }\n\n  setValueToLabel(value) {\n    this.thumbLabel.setValueToLabel(value);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumb);\n\n//# sourceURL=webpack:///./view/components/Thumb.ts?");

/***/ }),

/***/ "./view/components/ThumbLabel.ts":
/*!***************************************!*\
  !*** ./view/components/ThumbLabel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nclass ThumbLabel {\n  constructor() {\n    const div = document.createElement('div');\n    const divValue = document.createElement('div');\n    this.thumbLabelContainer = div;\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_LABEL);\n    this.thumbLabelValue = divValue;\n    this.thumbLabelValue.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_VALUE);\n    this.thumbLabelContainer.appendChild(this.thumbLabelValue);\n  }\n\n  getThumbLabelContainer() {\n    return this.thumbLabelContainer;\n  }\n\n  setValueToLabel(value) {\n    this.thumbLabelValue.innerText = `${value}`;\n  }\n\n  hideLabel() {\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  }\n\n  showLabel() {\n    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_ELEMENT);\n  }\n\n  setVertical() {\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_LABEL_IS_VERTICAL);\n  }\n\n  setHorizontal() {\n    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"default\"].THUMB_LABEL_IS_VERTICAL);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThumbLabel);\n\n//# sourceURL=webpack:///./view/components/ThumbLabel.ts?");

/***/ })

/******/ });