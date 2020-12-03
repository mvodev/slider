import { View } from './view/View';
import { Model } from './model/Model';
import { Controller } from './controller/Controller';
(function ($) {
 var FsdSlider = function (root, settings) {
  this.root = root;
  var defaultSettings = {
   min: 0,
   max: 10,
   from: 5,
   isRange: false,
   isVertical: false,
   hideThumbLabel: false,
   callback: undefined,
  };
  let unionSettings = $.extend(defaultSettings, settings);
  let model = new Model(unionSettings);
  let view = new View(model, this.root);
  this.controller = new Controller(view, model);
  this.init();
 };
 FsdSlider.prototype = {
  init: function () {
   this.controller.start();
  },
  update: function (newSettings) {
   this.controller.update(newSettings);
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