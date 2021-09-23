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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorMessage\", function() { return ErrorMessage; });\nclass ErrorMessage {\n  constructor(message) {\n    this.message = message;\n    this.showMessage();\n  }\n\n  showMessage() {\n    console.error('message: ' + this.message);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./error-message/ErrorMessage.ts?");

/***/ }),

/***/ "./fsd-slider.js":
/*!***********************!*\
  !*** ./fsd-slider.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_fsd_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/fsd-slider.scss */ \"./styles/fsd-slider.scss\");\n/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/View */ \"./view/View.ts\");\n/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Model */ \"./model/Model.ts\");\n/* harmony import */ var _presenter_Presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/Presenter */ \"./presenter/Presenter.ts\");\n/* eslint-disable no-undef */\r\n\r\n\r\n\r\n\r\n(function ($) {\r\n  var FsdSlider = function (root, settings,callback) {\r\n    // eslint-disable-next-line no-undef\r\n    let model = new _model_Model__WEBPACK_IMPORTED_MODULE_2__[\"Model\"](settings);\r\n    let view = new _view_View__WEBPACK_IMPORTED_MODULE_1__[\"View\"](root);\r\n    this.presenter = new _presenter_Presenter__WEBPACK_IMPORTED_MODULE_3__[\"Presenter\"](view, model);\r\n    model.addObserver(this.presenter);\r\n    view.addObserver(this.presenter);\r\n    this.presenter.addObserver(callback);\r\n    this.presenter.initialize();\r\n  };\r\n  FsdSlider.prototype = {\r\n    update: function (newSettings) {\r\n      this.presenter.update(newSettings);\r\n    },\r\n  };\r\n  $.fn.fsdSlider = function (settings,callback) {\r\n    return this.each(function () {\r\n      if (!$.data(this, \"fsd-slider\")) {\r\n        $.data(this, \"fsd-slider\", new FsdSlider(this, settings, callback));\r\n      }\r\n    });\r\n  };\r\n})(jQuery);\n\n//# sourceURL=webpack:///./fsd-slider.js?");

/***/ }),

/***/ "./model/Model.ts":
/*!************************!*\
  !*** ./model/Model.ts ***!
  \************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ \"./utils/Utils.ts\");\n/* harmony import */ var _defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\n\n\n\n\n\nclass Model extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__[\"EventObservable\"] {\n  constructor(settings) {\n    super();\n    this.settings = Object.assign({}, _defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"defaultSettings\"]);\n    this.setSettings(settings);\n  }\n\n  setSettings(settings) {\n    this.settings = Object.assign(this.settings, settings);\n  }\n\n  getSettings() {\n    return JSON.stringify(this.settings);\n  }\n\n  updateSettings(settings) {\n    this.validateSettings(settings);\n    this.notifyObservers(1\n    /* UPDATE */\n    , this.getSettings(), 0);\n  }\n\n  getMin() {\n    return this.settings.min;\n  }\n\n  getMax() {\n    return this.settings.max;\n  }\n\n  setFrom(valueInPercent, thumbWidthInPercent) {\n    this.settings.from = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);\n  }\n\n  getFrom() {\n    return this.settings.from;\n  }\n\n  setTo(valueInPercent, thumbWidthInPercent) {\n    this.settings.to = this.convertFromPercentToValue(valueInPercent, thumbWidthInPercent);\n  }\n\n  getTo() {\n    return this.settings.to;\n  }\n\n  getStep() {\n    return this.settings.step ? this.settings.step : 0;\n  }\n\n  validateSettings(settings) {\n    const newMin = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToNumber(settings.min);\n    const newMax = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToNumber(settings.max);\n    const newFrom = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToNumber(settings.from);\n    const newTo = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToNumber(settings.to);\n    const newStep = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToNumber(settings.step);\n    const newIsVertical = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToBoolean(settings.isVertical);\n    const newHideThumbLabel = _utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].convertFromInputToBoolean(settings.hideThumbLabel);\n\n    if (newMin !== undefined && newMax !== undefined) {\n      if (Math.abs(newMax - newMin) < this.settings.step) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable values,difference between min and max more than step');\n        return;\n      }\n    }\n\n    if (newMin !== undefined) {\n      if (newMin > this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,min value more than from value');\n        this.settings.min = this.settings.from;\n      } else {\n        this.settings.min = newMin;\n      }\n    }\n\n    if (newMax !== undefined) {\n      if (this.settings.isRange && newMax < this.settings.to) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,min value more than to value');\n        return;\n      } else if (!this.settings.isRange && newMax < this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,min value more than from value');\n        this.settings.max = this.settings.from + this.settings.step;\n      } else {\n        this.settings.max = newMax;\n      }\n    }\n\n    if (newFrom !== undefined && newTo !== undefined) {\n      if (newFrom > newTo) new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,from more than to');\n      this.settings.from = this.settings.min;\n      this.settings.to = this.settings.max;\n    }\n\n    if (newFrom !== undefined && !this.settings.isRange) {\n      if (newFrom > this.settings.max) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,from more than max');\n        return;\n      } else this.settings.from = newFrom;\n    }\n\n    if (newFrom !== undefined && this.settings.isRange) {\n      if (newFrom > this.settings.to) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,from more than to');\n        return;\n      } else this.settings.from = newFrom;\n    }\n\n    if (newTo !== undefined && this.settings.isRange) {\n      if (newTo < this.settings.from) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,to less than from');\n        return;\n      } else if (newTo > this.settings.max) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('unacceptable value,to more than max');\n        return;\n      } else this.settings.to = newTo;\n    }\n\n    if (newStep !== undefined) {\n      if (newStep < 0) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('step must be positive');\n        return;\n      } else if (newStep > Math.abs(this.settings.max - this.settings.min)) {\n        new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('step must be more than difference between max and min');\n        return;\n      } else {\n        this.settings.step = newStep;\n        this.settings.from = this.settings.min + this.settings.step;\n        this.settings.to = this.settings.from + this.settings.step;\n      }\n    }\n\n    this.settings.isVertical = newIsVertical;\n    this.settings.hideThumbLabel = newHideThumbLabel;\n\n    if (settings.isRange !== undefined) {\n      this.settings.isRange = settings.isRange;\n    }\n  }\n\n  convertFromPercentToValue(valueInPercent, thumbWidthInPercent) {\n    if (valueInPercent <= 0) {\n      return this.getMin();\n    }\n\n    if (valueInPercent >= 100) {\n      return this.getMax();\n    }\n\n    let del = 1;\n\n    if (this.getStep() != 0) {\n      del = 1.0 / this.getStep();\n    }\n\n    const diapason = Math.abs(this.getMax() - this.getMin());\n    const res = Math.round(+(diapason * valueInPercent / (100 - thumbWidthInPercent)).toFixed(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"Utils\"].numDigitsAfterDecimal(this.getStep())) * del) / del + this.getMin();\n    if (res < this.getMin()) return this.getMin();\n    if (res > this.getMax()) return this.getMax();\n    return res;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./model/Model.ts?");

/***/ }),

/***/ "./model/defaultSettings.ts":
/*!**********************************!*\
  !*** ./model/defaultSettings.ts ***!
  \**********************************/
/*! exports provided: defaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultSettings\", function() { return defaultSettings; });\nconst defaultSettings = {\n  min: 0,\n  max: 10,\n  from: 5,\n  step: 1,\n  to: 8,\n  isRange: false,\n  isVertical: false,\n  hideThumbLabel: false\n};\n\n\n//# sourceURL=webpack:///./model/defaultSettings.ts?");

/***/ }),

/***/ "./observers/EventObservable.ts":
/*!**************************************!*\
  !*** ./observers/EventObservable.ts ***!
  \**************************************/
/*! exports provided: EventObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventObservable\", function() { return EventObservable; });\nclass EventObservable {\n  constructor() {\n    this.observers = [];\n  }\n\n  addObserver(o) {\n    this.observers.push(o);\n  }\n\n  removeObserver(o) {\n    this.observers.filter(subscriber => subscriber !== o);\n  }\n\n  notifyObservers(msg, settings, width) {\n    this.observers.forEach(elem => {\n      if (elem && \"handleEvent\" in elem) {\n        elem.handleEvent(msg, settings, width);\n      }\n    });\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./observers/EventObservable.ts?");

/***/ }),

/***/ "./presenter/Presenter.ts":
/*!********************************!*\
  !*** ./presenter/Presenter.ts ***!
  \********************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Presenter\", function() { return Presenter; });\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n\n\nclass Presenter extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_0__[\"EventObservable\"] {\n  constructor(view, model) {\n    super();\n    this.view = view;\n    this.model = model;\n  }\n\n  handleEvent(msg, s, thumbWidthInPercentage) {\n    if (msg === 1\n    /* UPDATE */\n    ) {\n        this.view.refreshView(1\n        /* UPDATE */\n        , JSON.parse(s));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      } else if (msg === 4\n    /* SET_FROM */\n    ) {\n        this.model.setFrom(JSON.parse(s).from, thumbWidthInPercentage);\n        this.view.refreshView(2\n        /* FROM_IS_SET */\n        , JSON.parse(this.model.getSettings()));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      } else if (msg === 5\n    /* SET_TO */\n    ) {\n        this.model.setTo(JSON.parse(s).to, thumbWidthInPercentage);\n        this.view.refreshView(3\n        /* TO_IS_SET */\n        , JSON.parse(this.model.getSettings()));\n        this.notifyObservers(1\n        /* UPDATE */\n        , this.model.getSettings(), thumbWidthInPercentage);\n      }\n  }\n\n  initialize() {\n    this.view.refreshView(0\n    /* INIT */\n    , JSON.parse(this.model.getSettings()));\n    this.notifyObservers(1\n    /* UPDATE */\n    , this.model.getSettings(), 0);\n  }\n\n  update(newSettings) {\n    this.model.updateSettings(newSettings);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./presenter/Presenter.ts?");

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
/*! exports provided: ClassNaming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClassNaming\", function() { return ClassNaming; });\nconst ClassNaming = {\n  ROOT: 'fsd-slider',\n  RANGE: 'fsd-slider__range',\n  RANGE_LABEL: 'fsd-slider__range-label',\n  RANGE_LABEL_SCALE: 'fsd-slider__range-label-scale',\n  COLORED_RANGE: 'fsd-slider__colored-range',\n  THUMB_TO: 'fsd-slider__thumb-to',\n  THUMB_FROM: 'fsd-slider__thumb-from',\n  THUMB_LABEL: 'fsd-slider__thumb-label',\n  THUMB_VALUE: 'fsd-slider__thumb-value',\n  SLIDER_IS_VERTICAL: 'fsd-slider_is_vertical',\n  RANGE_IS_VERTICAL: 'fsd-slider__range_is_vertical',\n  COLORED_RANGE_IS_VERTICAL: 'fsd-slider__colored-range_is_vertical',\n  RANGE_LABEL_IS_VERTICAL: 'fsd-slider__range-label_is_vertical',\n  THUMB_LABEL_IS_VERTICAL: 'fsd-slider__thumb-label_is_vertical',\n  HIDE_ELEMENT: 'fsd-slider_element_is_hidden'\n};\n\n\n//# sourceURL=webpack:///./utils/ClassNaming.ts?");

/***/ }),

/***/ "./utils/Constants.ts":
/*!****************************!*\
  !*** ./utils/Constants.ts ***!
  \****************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Constants\", function() { return Constants; });\n// eslint-disable-next-line @typescript-eslint/no-namespace\nvar Constants;\n\n(function (Constants) {\n  Constants.NUMBER_OF_LABELS = 3;\n  Constants.THUMB_FROM = 'thumbFrom';\n  Constants.THUMB_TO = 'thumbTo';\n})(Constants || (Constants = {}));\n\n//# sourceURL=webpack:///./utils/Constants.ts?");

/***/ }),

/***/ "./utils/Utils.ts":
/*!************************!*\
  !*** ./utils/Utils.ts ***!
  \************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Utils\", function() { return Utils; });\nclass Utils {\n  static numDigitsAfterDecimal(value) {\n    if (value) {\n      return (value.toString().split('.')[1] || '').length;\n    } else return 0;\n  }\n\n  static convertFromInputToNumber(value) {\n    const number = parseFloat(String(value));\n\n    if (isNaN(number)) {\n      return undefined;\n    }\n\n    return number;\n  }\n\n  static convertFromInputToBoolean(value) {\n    return Boolean(value);\n  }\n\n  static roundWithStep(value, step, min) {\n    let del = 1;\n\n    if (step != 0) {\n      del = 1.0 / step;\n    }\n\n    const result = Math.round(+(value - min).toFixed(Utils.numDigitsAfterDecimal(step)) * del) / del + min;\n    return result;\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./utils/Utils.ts?");

/***/ }),

/***/ "./view/View.ts":
/*!**********************!*\
  !*** ./view/View.ts ***!
  \**********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider */ \"./view/components/Slider.ts\");\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\n\n\n\n\n\nclass View extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_1__[\"EventObservable\"] {\n  constructor(root) {\n    super();\n    this.viewSettings = Object.assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"defaultSettings\"]);\n\n    if (root) {\n      this.rootElem = root;\n      this.slider = new _components_Slider__WEBPACK_IMPORTED_MODULE_0__[\"Slider\"](this.rootElem);\n      this.slider.addObserver(this);\n    } else new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"]('root elem of Slider is null!');\n  }\n\n  handleEvent(msg, settings) {\n    this.notifyObservers(msg, settings, this.getThumbWidthInPercentage());\n  }\n\n  render(s) {\n    this.slider.render(JSON.stringify(s));\n  }\n\n  refreshView(msg, settings) {\n    if (msg === 0\n    /* INIT */\n    || msg === 1\n    /* UPDATE */\n    ) {\n        this.updateViewSettings(settings);\n        this.render(this.viewSettings);\n      } else if (msg === 2\n    /* FROM_IS_SET */\n    ) {\n        this.slider.setValueToLabelThumbFrom(settings.from);\n      } else if (msg === 3\n    /* TO_IS_SET */\n    ) {\n        this.slider.setValueToLabelThumbTo(settings.to !== undefined ? settings.to : settings.from);\n      }\n  }\n\n  getSlider() {\n    return this.slider;\n  }\n\n  getThumbWidthInPercentage() {\n    return this.slider.getThumbWidthInPercentage();\n  }\n\n  updateViewSettings(s) {\n    this.viewSettings = Object.assign(this.viewSettings, s);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/View.ts?");

/***/ }),

/***/ "./view/components/ColoredRange.ts":
/*!*****************************************!*\
  !*** ./view/components/ColoredRange.ts ***!
  \*****************************************/
/*! exports provided: ColoredRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColoredRange\", function() { return ColoredRange; });\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nclass ColoredRange {\n  constructor() {\n    this.coloredRange = document.createElement('div');\n    this.coloredRange.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].COLORED_RANGE);\n  }\n\n  getColoredRange() {\n    return this.coloredRange;\n  }\n\n  setColoredRange(viewSettings, thumbFrom, thumbTo, thumbWidthInPercentage) {\n    if (viewSettings.isRange) {\n      if (viewSettings.isVertical) {\n        this.getColoredRange().style.top = thumbFrom.style.top;\n        this.getColoredRange().style.left = 0 + '%';\n        this.getColoredRange().style.width = 100 + '%';\n        this.getColoredRange().style.height = Number.parseInt(thumbTo.style.top) - Number.parseInt(thumbFrom.style.top) + thumbWidthInPercentage / 2 + '%';\n      } else {\n        this.getColoredRange().style.left = thumbFrom.style.left;\n        this.getColoredRange().style.top = 0 + '%';\n        this.getColoredRange().style.height = 100 + '%';\n        this.getColoredRange().style.width = Number.parseInt(thumbTo.style.left) - Number.parseInt(thumbFrom.style.left) + thumbWidthInPercentage / 2 + '%';\n      }\n    } else {\n      if (viewSettings.isVertical) {\n        this.getColoredRange().style.left = 0 + '%';\n        this.getColoredRange().style.width = 100 + '%';\n        this.getColoredRange().style.height = Number.parseInt(thumbFrom.style.top) + thumbWidthInPercentage / 2 + '%';\n      } else {\n        this.getColoredRange().style.width = Number.parseInt(thumbFrom.style.left) + thumbWidthInPercentage / 2 + '%';\n        this.getColoredRange().style.top = 0 + '%';\n        this.getColoredRange().style.height = 100 + '%';\n      }\n    }\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/components/ColoredRange.ts?");

/***/ }),

/***/ "./view/components/Range.ts":
/*!**********************************!*\
  !*** ./view/components/Range.ts ***!
  \**********************************/
/*! exports provided: Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Range\", function() { return Range; });\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n/* harmony import */ var _ColoredRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColoredRange */ \"./view/components/ColoredRange.ts\");\n/* harmony import */ var _Thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumb */ \"./view/components/Thumb.ts\");\n\n\n\n\nclass Range {\n  constructor(settings) {\n    const div = document.createElement('div');\n    div.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].RANGE);\n    this.range = div;\n    this.viewSettings = settings;\n    this.coloredRange = new _ColoredRange__WEBPACK_IMPORTED_MODULE_1__[\"ColoredRange\"]();\n    this.thumbTo = new _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"Thumb\"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].THUMB_TO);\n    this.thumbFrom = new _Thumb__WEBPACK_IMPORTED_MODULE_2__[\"Thumb\"](_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].THUMB_FROM);\n    this.getRange().appendChild(this.coloredRange.getColoredRange());\n  }\n\n  getRange() {\n    return this.range;\n  }\n\n  render(settings) {\n    Object.assign(this.viewSettings, JSON.parse(settings));\n    this.getRange().appendChild(this.thumbFrom.getThumb());\n\n    if (this.viewSettings.isRange) {\n      this.getRange().appendChild(this.thumbTo.getThumb());\n    }\n  }\n\n  setVertical() {\n    this.range.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].RANGE_IS_VERTICAL);\n    this.coloredRange.getColoredRange().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].COLORED_RANGE_IS_VERTICAL);\n    this.thumbFrom.setVertical();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.setVertical();\n    }\n  }\n\n  setHorizontal() {\n    this.range.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].RANGE_IS_VERTICAL);\n    this.coloredRange.getColoredRange().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].COLORED_RANGE_IS_VERTICAL);\n    this.thumbFrom.setHorizontal();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.setHorizontal();\n    }\n  }\n\n  setColoredRange(thumbWidthInPercentage) {\n    this.coloredRange.setColoredRange(this.viewSettings, this.thumbFrom.getThumb(), this.thumbTo.getThumb(), thumbWidthInPercentage);\n  }\n\n  getThumbFrom() {\n    return this.thumbFrom.getThumb();\n  }\n\n  getThumbTo() {\n    return this.thumbTo.getThumb();\n  }\n\n  hideLabel() {\n    this.thumbFrom.hideLabel();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.hideLabel();\n    }\n  }\n\n  showLabel() {\n    this.thumbFrom.showLabel();\n\n    if (this.viewSettings.isRange) {\n      this.thumbTo.showLabel();\n    }\n  }\n\n  setValueToLabelThumbFrom(value) {\n    this.thumbFrom.setValueToLabel(value);\n  }\n\n  setValueToLabelThumbTo(value) {\n    this.thumbTo.setValueToLabel(value);\n  }\n\n  setThumbPositionFrom(shift, isVertical) {\n    this.thumbFrom.setThumbPosition(shift, isVertical);\n  }\n\n  setThumbPositionTo(shift, isVertical) {\n    this.thumbTo.setThumbPosition(shift, isVertical);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/components/Range.ts?");

/***/ }),

/***/ "./view/components/RangeLabel.ts":
/*!***************************************!*\
  !*** ./view/components/RangeLabel.ts ***!
  \***************************************/
/*! exports provided: RangeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RangeLabel\", function() { return RangeLabel; });\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\n\nclass RangeLabel {\n  constructor(settings) {\n    this.labels = [];\n    this.settings = Object.assign(_model_defaultSettings__WEBPACK_IMPORTED_MODULE_0__[\"defaultSettings\"], settings);\n    this.initComponents();\n  }\n\n  render(settings) {\n    this.settings = Object.assign(this.settings, settings);\n    this.setMinRange(this.settings.min);\n    this.setMaxRange(this.settings.max);\n  }\n\n  getRangeLabel() {\n    return this.rangeLabelContainer;\n  }\n\n  setMinRange(value) {\n    this.minLabel.innerText = '' + value;\n  }\n\n  setMaxRange(value) {\n    this.maxLabel.innerText = '' + value;\n  }\n\n  initComponents() {\n    this.rangeLabelContainer = document.createElement('div');\n    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].RANGE_LABEL);\n    this.minLabel = document.createElement('span');\n    this.minLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].RANGE_LABEL_SCALE);\n    this.maxLabel = document.createElement('span');\n    this.maxLabel.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].RANGE_LABEL_SCALE);\n    this.rangeLabelContainer.appendChild(this.minLabel);\n    this.labels.push(this.minLabel);\n    const pivotMark = document.createElement('span');\n    pivotMark.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].RANGE_LABEL_SCALE);\n    this.labels.push(pivotMark);\n    this.rangeLabelContainer.appendChild(pivotMark);\n    this.rangeLabelContainer.appendChild(this.maxLabel);\n    this.labels.push(this.maxLabel);\n  }\n\n  setVertical() {\n    this.getRangeLabel().classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].RANGE_LABEL_IS_VERTICAL);\n  }\n\n  setHorizontal() {\n    this.getRangeLabel().classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].RANGE_LABEL_IS_VERTICAL);\n  }\n\n  getLabels() {\n    return this.labels;\n  }\n\n  hideLabels() {\n    this.rangeLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].HIDE_ELEMENT);\n  }\n\n  showLabels() {\n    this.rangeLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_1__[\"ClassNaming\"].HIDE_ELEMENT);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/components/RangeLabel.ts?");

/***/ }),

/***/ "./view/components/Slider.ts":
/*!***********************************!*\
  !*** ./view/components/Slider.ts ***!
  \***********************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range */ \"./view/components/Range.ts\");\n/* harmony import */ var _RangeLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeLabel */ \"./view/components/RangeLabel.ts\");\n/* harmony import */ var _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/defaultSettings */ \"./model/defaultSettings.ts\");\n/* harmony import */ var _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../observers/EventObservable */ \"./observers/EventObservable.ts\");\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Constants */ \"./utils/Constants.ts\");\n/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Utils */ \"./utils/Utils.ts\");\n/* harmony import */ var _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../error-message/ErrorMessage */ \"./error-message/ErrorMessage.ts\");\n\n\n\n\n\n\n\n\n\nclass Slider extends _observers_EventObservable__WEBPACK_IMPORTED_MODULE_3__[\"EventObservable\"] {\n  constructor(rootElem) {\n    super();\n    this.settings = Object.assign({}, _model_defaultSettings__WEBPACK_IMPORTED_MODULE_2__[\"defaultSettings\"]);\n\n    if (rootElem) {\n      this.rootElem = rootElem;\n    } else new _error_message_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"ErrorMessage\"]('root elem of Slider is null!');\n\n    this.fromInPx = 0;\n    this.toInPx = 0;\n    this.resPercentage = 0;\n    this.initSliderComponents();\n  }\n\n  render(settings) {\n    this.settings = Object.assign(this.settings, JSON.parse(settings));\n    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"ClassNaming\"].ROOT);\n    this.container.appendChild(this.range.getRange());\n    this.range.render(settings);\n    this.rangeLabel.render(JSON.parse(settings));\n    this.container.appendChild(this.rangeLabel.getRangeLabel());\n    this.rootElem.appendChild(this.container);\n\n    if (this.settings.hideThumbLabel) {\n      this.range.hideLabel();\n    } else {\n      this.range.showLabel();\n    }\n\n    if (this.settings.isVertical) {\n      this.setVertical();\n    } else {\n      this.setHorizontal();\n    }\n\n    this.bindEvents();\n    this.range.setValueToLabelThumbFrom(this.settings.from);\n    this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from), this.settings.isVertical);\n\n    if (this.settings.isRange) {\n      this.range.setValueToLabelThumbTo(this.settings.to);\n      this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);\n    }\n\n    this.setLabelsPosition();\n    this.setColoredRange();\n    this.calculateThumbPos();\n  }\n\n  calculateThumbPos() {\n    this.fromInPx = this.convertFromValueToPx(this.settings.from);\n\n    if (this.settings.isRange) {\n      this.toInPx = this.convertFromValueToPx(this.settings.to);\n    } else this.toInPx = this.getSliderLengthInPx();\n  }\n\n  initSliderComponents() {\n    this.range = new _Range__WEBPACK_IMPORTED_MODULE_0__[\"Range\"](this.settings);\n    this.rangeLabel = new _RangeLabel__WEBPACK_IMPORTED_MODULE_1__[\"RangeLabel\"](this.settings);\n    this.container = document.createElement('div');\n  }\n\n  setLabelsPosition() {\n    const diapason = Math.abs(this.settings.max - this.settings.min);\n    const pivot = diapason / 2;\n    const pivotValue = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__[\"Utils\"].roundWithStep(pivot, this.settings.step, this.settings.min);\n\n    if (!this.settings.isVertical) {\n      this.getLabels()[0].setAttribute('value', this.settings.min.toString());\n      this.getLabels()[0].style.left = this.getThumbWidthInPercentage() / 2 - this.getLabels()[0].offsetWidth / this.getSliderLengthInPx() * 100 / 2 + '%';\n      this.getLabels()[0].style.top = '';\n      this.getLabels()[2].setAttribute('value', this.settings.max.toString());\n      this.getLabels()[2].style.left = 100 - (this.getLabels()[2].offsetWidth / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx() * 100 + '%';\n      this.getLabels()[2].style.top = '';\n      this.getLabels()[1].setAttribute('value', pivotValue.toString());\n      this.getLabels()[1].innerText = pivotValue.toString();\n      this.getLabels()[1].style.left = this.convertFromValueToPercent(pivotValue) + this.getThumbWidthInPercentage() / 2 - this.getLabels()[1].offsetWidth / this.getSliderLengthInPx() * 100 / 2 + '%';\n      this.getLabels()[1].style.top = '';\n    } else {\n      this.getLabels()[0].setAttribute('value', this.settings.min.toString());\n      this.getLabels()[0].style.top = this.getThumbWidthInPercentage() / 2 - this.getLabels()[0].offsetHeight / this.getSliderLengthInPx() * 100 / 2 + '%';\n      this.getLabels()[0].style.left = '';\n      this.getLabels()[2].setAttribute('value', this.settings.max.toString());\n      this.getLabels()[2].style.top = 100 - (this.getLabels()[2].offsetHeight / 2 + this.getThumbWidthInPx() / 2) / this.getSliderLengthInPx() * 100 + '%';\n      this.getLabels()[2].style.left = '';\n      this.getLabels()[1].setAttribute('value', pivotValue.toString());\n      this.getLabels()[1].innerText = pivotValue.toString();\n      this.getLabels()[1].style.top = this.convertFromValueToPercent(pivotValue) + this.getThumbWidthInPercentage() / 2 - this.getLabels()[1].offsetHeight / this.getSliderLengthInPx() * 100 / 2 + '%';\n      this.getLabels()[1].style.left = '';\n    }\n  }\n\n  bindEvents() {\n    this.handleRangeBinded = this.handleRange.bind(this, 'range');\n    this.initResizeObserver();\n    this.handleRangeLabelBinded = this.handleRangeLabel.bind(this);\n    this.getRange().addEventListener('mousedown', this.handleRangeBinded);\n    this.rangeLabel.getLabels().forEach(elem => elem.addEventListener('click', this.handleRangeLabelBinded));\n  }\n\n  initResizeObserver() {\n    const resizeObserver = new ResizeObserver(() => {\n      this.range.setValueToLabelThumbFrom(this.settings.from);\n      this.range.setThumbPositionFrom(this.convertFromValueToPercent(this.settings.from), this.settings.isVertical);\n\n      if (this.settings.isRange) {\n        this.range.setValueToLabelThumbTo(this.settings.to);\n        this.range.setThumbPositionTo(this.convertFromValueToPercent(this.settings.to), this.settings.isVertical);\n      }\n\n      this.setColoredRange();\n      this.setLabelsPosition();\n      this.calculateThumbPos();\n    });\n    resizeObserver.observe(this.rootElem);\n  }\n\n  bindExtraListeners() {\n    this.handleThumbMoveBinded = this.handleThumbMove.bind(this);\n    this.removeHandlerBinded = this.removeHandler.bind(this);\n    document.addEventListener('mousemove', this.handleThumbMoveBinded);\n    document.addEventListener('mouseup', this.removeHandlerBinded);\n  }\n\n  unbindEvents() {\n    this.removeHandler();\n    this.getRangeLabel().removeEventListener('mousedown', this.handleRangeLabelBinded);\n    this.getRange().removeEventListener('mousedown', this.handleRangeBinded);\n  }\n\n  handleRangeLabel(e) {\n    if (e.target instanceof Element) {\n      if (e.target.getAttribute('value')) {\n        const roundedValue = _utils_Utils__WEBPACK_IMPORTED_MODULE_6__[\"Utils\"].roundWithStep(Number(e.target.getAttribute('value')), this.settings.step, this.settings.min);\n\n        if (!this.settings.isRange) {\n          if (roundedValue <= this.settings.max) {\n            this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        } else {\n          if (Number(e.target.getAttribute('value')) >= this.settings.to) {\n            if (roundedValue <= this.settings.max) {\n              this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_TO);\n            }\n          } else if (Number(e.target.getAttribute('value')) <= this.settings.from) {\n            this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          } else {\n            const pivot = Math.abs(this.settings.to - this.settings.from) / 2;\n\n            if (Number(e.target.getAttribute('value')) <= pivot + this.settings.from) {\n              this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n            } else if (Number(e.target.getAttribute('value')) > pivot + this.settings.from) {\n              if (roundedValue <= this.settings.max) {\n                this.dispatchEvent(this.convertFromValueToPx(roundedValue), _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_TO);\n              }\n            }\n          }\n        }\n      }\n    }\n\n    this.setColoredRange();\n  }\n\n  handleRange(type, e) {\n    if (e instanceof MouseEvent) {\n      let clickedPos;\n      const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();\n\n      if (this.settings.isVertical) {\n        clickedPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2;\n      } else {\n        clickedPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;\n      }\n\n      if (clickedPos > bottom) clickedPos = bottom;\n      if (clickedPos < 0) clickedPos = 0;\n\n      if (this.settings.isRange) {\n        if (clickedPos < this.fromInPx) {\n          if (Math.abs(clickedPos - this.getStepInPx()) < this.fromInPx) {\n            this.fromInPx = this.fromInPx - Math.round(Math.abs(this.fromInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        } else if (clickedPos > this.toInPx) {\n          if (Math.abs(clickedPos + this.getStepInPx()) > this.toInPx) {\n            this.toInPx = this.toInPx + Math.round(Math.abs(this.toInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_TO);\n          }\n        } else if (clickedPos >= this.fromInPx && clickedPos <= this.toInPx) {\n          const pivot = (this.toInPx - this.fromInPx) / 2;\n\n          if (Math.abs(clickedPos + this.getStepInPx()) <= this.fromInPx + pivot) {\n            this.fromInPx = this.fromInPx + Math.round(Math.abs(this.fromInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n\n          if (Math.abs(clickedPos + this.getStepInPx()) > this.fromInPx + pivot) {\n            this.toInPx = this.toInPx - Math.round(Math.abs(this.toInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_TO);\n          }\n        }\n      } else {\n        if (clickedPos + this.getThumbWidthInPx() / 2 < this.fromInPx) {\n          if (Math.abs(clickedPos - this.getStepInPx()) < this.fromInPx) {\n            this.fromInPx = this.fromInPx - Math.round(Math.abs(this.fromInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        } else {\n          if (Math.abs(clickedPos + this.getStepInPx()) > this.fromInPx) {\n            this.fromInPx = this.fromInPx + Math.round(Math.abs(this.fromInPx - clickedPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        }\n      }\n\n      if (type === 'range') {\n        this.bindExtraListeners();\n      }\n    }\n  }\n\n  handleThumbMove(e) {\n    let newPos;\n    const bottom = this.getSliderLengthInPx() - this.getThumbWidthInPx();\n\n    if (e instanceof MouseEvent) {\n      if (this.settings.isVertical) {\n        newPos = e.clientY - this.getRange().getBoundingClientRect().top - this.getThumbWidthInPx() / 2;\n      } else {\n        newPos = e.clientX - this.getRange().getBoundingClientRect().left - this.getThumbWidthInPx() / 2;\n      }\n\n      if (newPos < 0) {\n        newPos = 0;\n      }\n\n      if (newPos >= bottom) {\n        newPos = bottom;\n      }\n\n      if (!this.settings.isRange) {\n        if (newPos < this.fromInPx) {\n          if (Math.abs(newPos - this.getStepInPx()) < this.fromInPx) {\n            this.fromInPx = this.fromInPx - Math.round(Math.abs(this.fromInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        } else {\n          if (Math.abs(newPos + this.getStepInPx()) > this.fromInPx && Math.abs(this.fromInPx + this.getStepInPx()) <= bottom) {\n            this.fromInPx = this.fromInPx + Math.round(Math.abs(this.fromInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        }\n      } else {\n        if (newPos < this.fromInPx) {\n          if (Math.abs(newPos - this.getStepInPx()) <= this.fromInPx) {\n            this.fromInPx = this.fromInPx - Math.round(Math.abs(this.fromInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n        }\n\n        if (newPos > this.toInPx) {\n          if (Math.abs(newPos + this.getStepInPx()) > this.toInPx && Math.abs(this.toInPx + this.getStepInPx()) <= bottom) {\n            this.toInPx = this.toInPx + Math.round(Math.abs(this.toInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_TO);\n          }\n        }\n\n        if (newPos >= this.fromInPx && newPos <= this.toInPx) {\n          const pivot = (this.toInPx - this.fromInPx) / 2;\n\n          if (Math.abs(newPos + this.getStepInPx()) <= this.fromInPx + pivot) {\n            this.fromInPx = this.fromInPx + Math.round(Math.abs(this.fromInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.fromInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_FROM);\n          }\n\n          if (Math.abs(newPos + this.getStepInPx()) > this.fromInPx + pivot) {\n            this.toInPx = this.toInPx - Math.round(Math.abs(this.toInPx - newPos) / this.getStepInPx()) * this.getStepInPx();\n            this.dispatchEvent(this.toInPx, _utils_Constants__WEBPACK_IMPORTED_MODULE_5__[\"Constants\"].THUMB_TO);\n          }\n        }\n      }\n    }\n  }\n\n  removeHandler() {\n    document.removeEventListener('mousemove', this.handleThumbMoveBinded);\n    document.removeEventListener('mouseup', this.removeHandlerBinded);\n  }\n\n  convertFromPxToPercent(valueInPX) {\n    if (valueInPX < 0) {\n      return 0;\n    }\n\n    const res = valueInPX / this.getSliderLengthInPx() * 100;\n\n    if (res > 100) {\n      return 100 - this.getThumbWidthInPercentage();\n    }\n\n    return +res.toFixed(4);\n  }\n\n  convertFromValueToPx(value) {\n    return Math.abs(value - this.settings.min) / Math.abs(this.settings.max - this.settings.min) * (this.getSliderLengthInPx() - this.getThumbWidthInPx());\n  }\n\n  convertFromValueToPercent(value) {\n    return (100 - this.getThumbWidthInPercentage()) / Math.abs(this.settings.max - this.settings.min) * Math.abs(value - this.settings.min);\n  }\n\n  getThumbWidthInPercentage() {\n    if (this.settings.isVertical) {\n      return this.getThumbFrom().offsetHeight / this.getSliderLengthInPx() * 100;\n    } else {\n      return this.getThumbFrom().offsetWidth / this.getSliderLengthInPx() * 100;\n    }\n  }\n\n  getSliderLengthInPx() {\n    if (this.settings.isVertical) {\n      return this.getRange().offsetHeight;\n    } else {\n      return this.getRange().offsetWidth;\n    }\n  }\n\n  dispatchEvent(shift, type) {\n    this.resPercentage = this.convertFromPxToPercent(shift);\n\n    if (type === \"thumbFrom\") {\n      this.range.setThumbPositionFrom(this.resPercentage, this.settings.isVertical);\n      this.notifyObservers(4\n      /* SET_FROM */\n      , JSON.stringify({\n        from: this.resPercentage\n      }), 0);\n    } else {\n      this.range.setThumbPositionTo(this.resPercentage, this.settings.isVertical);\n      this.notifyObservers(5\n      /* SET_TO */\n      , JSON.stringify({\n        to: this.resPercentage\n      }), 0);\n    }\n\n    this.setColoredRange();\n  }\n\n  getRange() {\n    return this.range.getRange();\n  }\n\n  setValueToLabelThumbFrom(value) {\n    this.range.setValueToLabelThumbFrom(value);\n    this.settings.from = value;\n  }\n\n  setValueToLabelThumbTo(value) {\n    this.range.setValueToLabelThumbTo(value);\n    this.settings.to = value;\n  }\n\n  getRangeLabel() {\n    return this.rangeLabel.getRangeLabel();\n  }\n\n  getThumbFrom() {\n    return this.range.getThumbFrom();\n  }\n\n  setVertical() {\n    this.unbindEvents();\n    this.container.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"ClassNaming\"].SLIDER_IS_VERTICAL);\n    this.range.setVertical();\n    this.rangeLabel.setVertical();\n  }\n\n  setHorizontal() {\n    this.unbindEvents();\n    this.container.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_4__[\"ClassNaming\"].SLIDER_IS_VERTICAL);\n    this.range.setHorizontal();\n    this.rangeLabel.setHorizontal();\n  }\n\n  setColoredRange() {\n    this.range.setColoredRange(this.getThumbWidthInPercentage());\n  }\n\n  getThumbWidthInPx() {\n    if (this.settings.isVertical) {\n      return this.getThumbFrom().offsetHeight;\n    }\n\n    return this.getThumbFrom().offsetWidth;\n  }\n\n  getThumbLabelFrom() {\n    return this.range.getThumbFrom();\n  }\n\n  getThumbLabelTo() {\n    return this.range.getThumbTo();\n  }\n\n  getStepInPx() {\n    return (this.getSliderLengthInPx() - this.getThumbWidthInPx()) / Math.abs((this.settings.max - this.settings.min) / this.settings.step);\n  }\n\n  getLabels() {\n    return this.rangeLabel.getLabels();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/components/Slider.ts?");

/***/ }),

/***/ "./view/components/Thumb.ts":
/*!**********************************!*\
  !*** ./view/components/Thumb.ts ***!
  \**********************************/
/*! exports provided: Thumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Thumb\", function() { return Thumb; });\n/* harmony import */ var _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbLabel */ \"./view/components/ThumbLabel.ts\");\n\n\nclass Thumb {\n  constructor(className) {\n    this.thumb = document.createElement('div');\n    this.thumb.classList.add(className);\n    this.thumbLabel = new _ThumbLabel__WEBPACK_IMPORTED_MODULE_0__[\"ThumbLabel\"]();\n    this.thumbLabelHTML = this.thumbLabel.getThumbLabelContainer();\n    this.thumb.appendChild(this.thumbLabelHTML);\n  }\n\n  getThumb() {\n    return this.thumb;\n  }\n\n  setThumbPosition(shift, isVertical) {\n    if (isVertical) {\n      this.getThumb().style.top = shift + '%';\n      this.getThumb().style.left = '-25%';\n    } else {\n      this.getThumb().style.left = shift + '%';\n      this.getThumb().style.top = '-25%';\n    }\n  }\n\n  setVertical() {\n    this.thumbLabel.setVertical();\n  }\n\n  setHorizontal() {\n    this.thumbLabel.setHorizontal();\n  }\n\n  hideLabel() {\n    this.thumbLabel.hideLabel();\n  }\n\n  showLabel() {\n    this.thumbLabel.showLabel();\n  }\n\n  setValueToLabel(value) {\n    this.thumbLabel.setValueToLabel(value);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/components/Thumb.ts?");

/***/ }),

/***/ "./view/components/ThumbLabel.ts":
/*!***************************************!*\
  !*** ./view/components/ThumbLabel.ts ***!
  \***************************************/
/*! exports provided: ThumbLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThumbLabel\", function() { return ThumbLabel; });\n/* harmony import */ var _utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassNaming */ \"./utils/ClassNaming.ts\");\n\n\nclass ThumbLabel {\n  constructor() {\n    const div = document.createElement('div');\n    const divValue = document.createElement('div');\n    this.thumbLabelContainer = div;\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].THUMB_LABEL);\n    this.thumbLabelValue = divValue;\n    this.thumbLabelValue.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].THUMB_VALUE);\n    this.thumbLabelContainer.appendChild(this.thumbLabelValue);\n  }\n\n  getThumbLabelContainer() {\n    return this.thumbLabelContainer;\n  }\n\n  setValueToLabel(value) {\n    this.thumbLabelValue.innerText = '' + value;\n  }\n\n  hideLabel() {\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].HIDE_ELEMENT);\n  }\n\n  showLabel() {\n    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].HIDE_ELEMENT);\n  }\n\n  setVertical() {\n    this.thumbLabelContainer.classList.add(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].THUMB_LABEL_IS_VERTICAL);\n  }\n\n  setHorizontal() {\n    this.thumbLabelContainer.classList.remove(_utils_ClassNaming__WEBPACK_IMPORTED_MODULE_0__[\"ClassNaming\"].THUMB_LABEL_IS_VERTICAL);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./view/components/ThumbLabel.ts?");

/***/ })

/******/ });