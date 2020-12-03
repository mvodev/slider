import { View } from './view/View';
import { Model } from './model/Model';
import { Controller } from './controller/Controller';
(function ($) {
 var FsdSlider = function (root, settings) {
  let model = new Model(settings);
  let view = new View(model, root);
  this.controller = new Controller(view, model);
  //model.addObserver(this.controller);
  model.addObserver(view);
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