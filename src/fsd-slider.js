import '../src/styles/fsd-slider.scss';
import { View } from './view/View';
import { Model } from './model/Model';
import { Presenter } from './presenter/Presenter';
(function ($) {
  var FsdSlider = function (root, settings,callback) {
    let model = new Model(settings);
    let view = new View(root);
    this.presenter = new Presenter(view, model);
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