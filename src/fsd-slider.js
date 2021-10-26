import View from './view/View';
import Model from './model/Model';
import Presenter from './presenter/Presenter';
import './styles/fsd-slider.scss';

(function ($) {
  const FsdSlider = function (root, settings, callback) {
    const model = new Model(settings);
    const view = new View(root);
    this.presenter = new Presenter(view, model);
    model.addObserver(this.presenter);
    view.addObserver(this.presenter);
    this.presenter.addObserver(callback);
    this.presenter.initialize();
  };
  FsdSlider.prototype = {
    update(newSettings) {
      this.presenter.update(newSettings);
    },
  };
  $.fn.fsdSlider = function (settings, callback) {
    return this.each(function () {
      if (!$.data(this, 'fsd-slider')) {
        $.data(this, 'fsd-slider', new FsdSlider(this, settings, callback));
      }
    });
  };
}(jQuery));
