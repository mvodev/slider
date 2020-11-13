/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controller/controller.ts":
/*!**********************************!*\
  !*** ./controller/controller.ts ***!
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
  }

  bindEvents() {
    this.view.getThumb().onmousedown = this.mouseDownHandler.bind(this);
  }

  mouseDownHandler(e) {
    e.preventDefault();
    let shiftX = e.clientX - this.view.getThumb().getBoundingClientRect().left;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    let slider = this.view.getRange();
    let thumb = this.view.getThumb();
    let model = this.model;
    let view = this.view;

    function onMouseMove(e) {
      let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;
      console.log(e.clientX + ' ' + shiftX + ' ' + slider.getBoundingClientRect().left);

      if (newLeft < 0) {
        newLeft = 0;
      }

      let rightEdge = slider.offsetWidth - thumb.offsetWidth;

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      model.setCurrPos(newLeft);
      view.reDrawView(); //thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }

}

/***/ }),

/***/ "./model/model.ts":
/*!************************!*\
  !*** ./model/model.ts ***!
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
    this.currentPos = 0;
  }

  getSettings() {
    return Object.assign({}, this.settings);
  }

  setCurrPos(pos) {
    this.currentPos = pos;
  }

  getCurrPos() {
    return this.currentPos + 'px';
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
  constructor() {
    let div = document.createElement('div');
    div.classList.add('fsd-slider__thumb');
    this.thumb = div;
  }

  getThumb() {
    return this.thumb;
  }

}

/***/ }),

/***/ "./view/view.ts":
/*!**********************!*\
  !*** ./view/view.ts ***!
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
/* harmony import */ var _modules_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/range */ "./view/modules/range.ts");
/* harmony import */ var _modules_thumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/thumb */ "./view/modules/thumb.ts");
;

class View {
  //TODO: add this class from settings
  constructor(model, root) {
    this.model = model;
    this.rootElem = root;
    this.thumb = new _modules_thumb__WEBPACK_IMPORTED_MODULE_1__.Thumb().getThumb();
    this.range = new _modules_range__WEBPACK_IMPORTED_MODULE_0__.Range().getRange();
  }

  getRange() {
    return this.range;
  }

  getThumb() {
    return this.thumb;
  }

  render() {
    this.rootElem.classList.add('fsd-silder');
    this.rootElem.appendChild(this.thumb);
    this.rootElem.appendChild(this.range);
    this.range.appendChild(this.thumb);
  }

  reDrawView() {
    this.thumb.style.left = this.model.getCurrPos();
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
/* harmony import */ var _view_view_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/view.ts */ "./view/view.ts");
/* harmony import */ var _model_model_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/model.ts */ "./model/model.ts");
/* harmony import */ var _controller_controller_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/controller.ts */ "./controller/controller.ts");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
;




(function ($) {
 $.fn.fsdSlider = function (rootElem, options) {
  const root = rootElem;
  var settings = $.extend({
   'min': '0',
   'max': '100',
   'curPos': '30',
  }, options);

  let model = new _model_model_ts__WEBPACK_IMPORTED_MODULE_2__.Model(settings);
  let view = new _view_view_ts__WEBPACK_IMPORTED_MODULE_1__.View(model, root);
  let controller = new _controller_controller_ts__WEBPACK_IMPORTED_MODULE_3__.Controller(view, model);
  controller.initialize();
  controller.bindEvents();
 };
})(jQuery);
$('.slider').fsdSlider(document.querySelector('.slider'), {
 'min': '0',
 'max': '10'
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
//# sourceMappingURL=main.aab20474dc9fbb00e77f.js.map