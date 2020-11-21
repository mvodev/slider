/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controller/Controller.ts":
/*!**********************************!*\
  !*** ./controller/Controller.ts ***!
  \**********************************/
/*! namespace exports */
/*! export Controller [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => /* binding */ Controller
/* harmony export */ });
class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  initialize() {
    this.view.render();

    if (!this.model.getSettings().hideThumbLabel) {
      this.setThumbToValue('from');

      if (this.model.getSettings().isRange) {
        this.setThumbToValue('to');
      }
    }

    this.view.setValueToMinRange(this.model.getSettings().min);
    this.view.setValueToMaxRange(this.model.getSettings().max);
  }

  bindEvents() {
    this.view.getThumbFrom().onmousedown = this.mouseFromHandler.bind(this);

    if (this.model.getSettings().isRange) {
      this.view.getThumbTo().onmousedown = this.mouseToHandler.bind(this);
    }
  }

  start() {
    this.initialize();
    this.bindEvents();
    this.view.refreshView();
  }

  setValueToThumb(value, type) {
    if (!this.model.getSettings().hideThumbLabel) {
      if (this.model.getSettings().isVertical) {
        let heightRange = this.view.getRange().offsetHeight - this.view.getThumbFrom().offsetHeight;
        let valueToThumbLabel = Math.floor(value / (heightRange / (this.model.getSettings().max - this.model.getSettings().min)));

        if (type === 'from') {
          this.model.getSettings().from = valueToThumbLabel;
        } else {
          this.model.getSettings().to = valueToThumbLabel;
        }

        this.view.refreshView();
      } else {
        let widthRange = this.view.getRange().offsetWidth - this.view.getThumbFrom().offsetWidth;
        let valueToThumbLabel = Math.floor(value / (widthRange / (this.model.getSettings().max - this.model.getSettings().min)));

        if (type === 'from') {
          this.model.getSettings().from = valueToThumbLabel;
        } else {
          this.model.getSettings().to = valueToThumbLabel;
        }

        this.view.refreshView();
      }
    }
  }

  setThumbToValue(type) {
    if (type === 'from') {
      if (this.model.getSettings().isVertical) {
        let heightRange = this.view.getRange().offsetHeight - this.view.getThumbFrom().offsetHeight;
        let valueToThumb = heightRange / (this.model.getSettings().max - this.model.getSettings().min) * this.model.getSettings().from;
        this.view.getThumbFrom().style.top = '' + valueToThumb + 'px';
        this.model.getSettings().currentFrom = valueToThumb;
        this.view.refreshView();
      } else {
        let widthRange = this.view.getRange().offsetWidth - this.view.getThumbFrom().offsetWidth;
        let valueToThumb = widthRange / (this.model.getSettings().max - this.model.getSettings().min) * this.model.getSettings().from;
        this.view.getThumbFrom().style.left = '' + valueToThumb + 'px';
        this.model.getSettings().currentFrom = valueToThumb;
        this.view.refreshView();
      }
    } else {
      if (this.model.getSettings().isVertical) {
        let heightRange = this.view.getRange().offsetHeight - this.view.getThumbTo().offsetHeight;
        let valueToThumb = heightRange / (this.model.getSettings().max - this.model.getSettings().min) * this.model.getSettings().to;
        this.view.refreshView();
        this.view.getThumbTo().style.top = '' + valueToThumb + 'px';
        this.model.getSettings().currentTo = valueToThumb;
        this.view.setValueToThumbLabelTo(this.model.getSettings().from);
      } else {
        let widthRange = this.view.getRange().offsetWidth - this.view.getThumbTo().offsetWidth;
        let valueToThumb = widthRange / (this.model.getSettings().max - this.model.getSettings().min) * this.model.getSettings().to;
        this.view.refreshView();
        this.view.getThumbTo().style.left = '' + valueToThumb + 'px';
        this.model.getSettings().currentTo = valueToThumb;
        this.view.setValueToThumbLabelTo(this.model.getSettings().to);
      }
    }
  }

  mouseFromHandler(e) {
    //console.log(type);
    e.preventDefault();

    if (this.model.getSettings().isVertical) {
      let shiftY = e.clientY - this.view.getThumbFrom().getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbFrom();
      let that = this;

      function onMouseMove(event) {
        let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;

        if (newTop < 0) {
          newTop = 0;
        }

        let bottom = sliderRange.offsetHeight - thumb.offsetHeight / 2;

        if (that.model.getSettings().isRange) {
          bottom = that.model.getSettings().currentTo;
        }

        if (newTop > bottom) {
          newTop = bottom;
        }

        thumb.style.top = newTop + 'px';
        that.model.getSettings().currentFrom = newTop;
        that.setValueToThumb(newTop, 'from');
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    } else {
      let shiftX = e.clientX - this.view.getThumbFrom().getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbFrom();
      let that = this;

      function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;

        if (newLeft < -thumb.offsetWidth / 2) {
          newLeft = -thumb.offsetWidth / 2;
        }

        let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth / 2;

        if (that.model.getSettings().isRange) {
          rightEdge = that.model.getSettings().currentTo;
        }

        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
        that.model.getSettings().currentFrom = newLeft;
        that.setValueToThumb(newLeft < 0 ? 0 : newLeft, 'from');
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }

  mouseToHandler(e) {
    e.preventDefault();

    if (this.model.getSettings().isVertical) {
      let shiftY = e.clientY - this.view.getThumbTo().getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbTo();
      let that = this;

      function onMouseMove(event) {
        let newTop = event.clientY - shiftY - sliderRange.getBoundingClientRect().top;

        if (newTop < that.model.getSettings().currentFrom) {
          newTop = that.model.getSettings().currentFrom + 1;
        }

        let bottom = sliderRange.offsetHeight - thumb.offsetHeight / 2;

        if (newTop > bottom) {
          newTop = bottom;
        }

        thumb.style.top = newTop + 'px';
        that.model.getSettings().currentTo = newTop;
        that.setValueToThumb(newTop, 'to');
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    } else {
      let shiftX = e.clientX - this.view.getThumbTo().getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      let sliderRange = this.view.getRange();
      let thumb = this.view.getThumbTo();
      let that = this;

      function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - sliderRange.getBoundingClientRect().left;

        if (newLeft < that.model.getSettings().currentFrom) {
          newLeft = that.model.getSettings().currentFrom + 1;
        }

        let rightEdge = sliderRange.offsetWidth - thumb.offsetWidth / 2;

        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
        that.model.getSettings().currentTo = newLeft;
        that.setValueToThumb(newLeft < 0 ? 0 : newLeft, 'to');
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }

}

/***/ }),

/***/ "./model/Model.ts":
/*!************************!*\
  !*** ./model/Model.ts ***!
  \************************/
/*! namespace exports */
/*! export Model [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => /* binding */ Model
/* harmony export */ });
class Model {
  constructor(settings) {
    this.settings = Object.assign({}, settings);
  }

  getSettings() {
    return this.settings;
  }

  setFrom(pos) {
    this.settings.from = pos;
  }

  getFrom() {
    return this.settings.from + 'px';
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
;
class View {
  //TODO: add this class from settings
  constructor(model, root) {
    this.model = model;
    this.rootElem = root;
    this.slider = new _modules_Slider__WEBPACK_IMPORTED_MODULE_0__.Slider(this.rootElem, this.model);
    this.rangeWidth = 0;
  }

  render() {
    this.slider.render();

    if (this.model.getSettings().hideThumbLabel) {
      this.slider.getThumbLabelFrom().hideLabel();
    }

    if (this.model.getSettings().isVertical) {
      this.slider.setVertical();
    }
  }

  getModel() {
    return this.model;
  }

  getSliderWidth() {
    return this.rangeWidth;
  }

  setValueToMinRange(value) {
    this.slider.setMinRange(value);
  }

  setValueToMaxRange(value) {
    this.slider.setMaxRange(value);
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

  refreshView() {
    this.slider.setValueToLabelThumbFrom(this.model.getSettings().from);

    if (this.model.getSettings().isRange) {
      this.slider.setValueToLabelThumbTo(this.model.getSettings().to);
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
  constructor(rootElem, model) {
    this.model = model;
    this.rootElem = rootElem;
    this.thumbTo = new _thumb__WEBPACK_IMPORTED_MODULE_1__.Thumb('fsd-slider__thumb-to');
    this.thumbLabelTo = new _thumbLabel__WEBPACK_IMPORTED_MODULE_2__.ThumbLabel(this.thumbTo.getThumb());
    this.thumbFrom = new _thumb__WEBPACK_IMPORTED_MODULE_1__.Thumb('fsd-slider__thumb-from');
    this.thumbLabelFrom = new _thumbLabel__WEBPACK_IMPORTED_MODULE_2__.ThumbLabel(this.thumbFrom.getThumb());
    this.range = new _range__WEBPACK_IMPORTED_MODULE_0__.Range();
    this.coloredRange = new _coloredRange__WEBPACK_IMPORTED_MODULE_4__.ColoredRange();
    this.rangeLabel = new _rangeLabel__WEBPACK_IMPORTED_MODULE_3__.RangeLabel();
    this.container = document.createElement('div');
  }

  render() {
    this.container.classList.add('fsd-slider');
    this.container.appendChild(this.range.getRange());
    this.range.getRange().appendChild(this.coloredRange.getColoredRange());
    this.range.getRange().appendChild(this.thumbFrom.getThumb());
    this.thumbFrom.getThumb().appendChild(this.thumbLabelFrom.getThumbLabelContainer());

    if (this.model.getSettings().isRange) {
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

  setVertical() {
    this.container.classList.add('fsd-slider_is_vertical');
    this.range.getRange().classList.add('fsd-slider_is_vertical');
    this.coloredRange.getColoredRange().classList.add('fsd-slider__colored-range_is_vertical');
    this.rangeLabel.getRangeLabel().classList.add('fsd-slider__range-label_is_vertical');
    this.thumbLabelFrom.getThumbLabelContainer().classList.add('fsd-slider__thumb-label_is_vertical');
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
  constructor() {
    this.rangeLabelContainer = document.createElement('div');
    this.rangeLabelContainer.classList.add('fsd-slider__range-label');
    this.minLabel = document.createElement('span');
    this.maxLabel = document.createElement('span');
    this.rangeLabelContainer.appendChild(this.minLabel);
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
    let div = document.createElement('div');
    div.classList.add(className);
    this.thumb = div;
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
/* harmony import */ var _view_View_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/View.ts */ "./view/View.ts");
/* harmony import */ var _model_Model_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Model.ts */ "./model/Model.ts");
/* harmony import */ var _controller_Controller_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/Controller.ts */ "./controller/Controller.ts");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
;




(function ($) {
 $.fn.fsdSlider = function (rootElem, settings) {
  const root = rootElem;
  let model = new _model_Model_ts__WEBPACK_IMPORTED_MODULE_2__.Model(settings);
  let view = new _view_View_ts__WEBPACK_IMPORTED_MODULE_1__.View(model, root);
  let controller = new _controller_Controller_ts__WEBPACK_IMPORTED_MODULE_3__.Controller(view, model);
  controller.start();
 };
})(jQuery);
$('.slider').fsdSlider(document.querySelector('.slider'), {
 min: 0,
 max: 10,
 from: 3,
 to: 5,
 isVertical: false,
 hideThumbLabel: false,
 isRange: true,
});

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
//# sourceMappingURL=main.4c6195afd088f57c1846.js.map