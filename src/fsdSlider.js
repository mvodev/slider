import { View } from './view/View';
import { Model } from './model/Model';
import { Presenter } from './presenter/presenter';
(function ($) {
 var FsdSlider = function (root, settings) {
  let model = new Model(settings);
  let view = new View(settings, root);
  this.presenter = new Presenter(view, model);
  model.addObserver(this.presenter);
  view.addObserver(this.presenter);
  this.presenter.initialize();
  //presenter.handleEvent(0,settings);
 };
 FsdSlider.prototype = {
  update: function (newSettings) {
   this.presenter.update(newSettings);
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