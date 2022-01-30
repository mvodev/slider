import View from './view/View';
import Model from './model/Model';
import defaultSettings from './model/defaultSettings';
import Presenter from './presenter/Presenter';
import './styles/fsd-slider.scss';

(function ($) {
  const FsdSlider = function (root, settings) {
    this.model = new Model(settings);
    const view = new View(root, defaultSettings);
    this.presenter = new Presenter(view, this.model);
    this.model.addObserver(this.presenter);
    view.addObserver(this.presenter);
    this.presenter.initialize();
  };
  FsdSlider.prototype = {
    update(newSettings) {
      this.presenter.update(newSettings);
    },
    getSettings() {
      return this.model.getSettings();
    },
    addCallback(callback) {
      this.presenter.addObserver(callback);
    },
    removeCallback(callback) {
      this.presenter.removeObserver(callback);
    },
    destroy() {
      this.presenter.destroy();
    }
  };
  $.fn.fsdSlider = function (settings, callback) {
    return this.each(function () {
      if (!$.data(this, 'fsd-slider')) {
        $.data(this, 'fsd-slider', new FsdSlider(this, settings, callback));
      }
    });
  };
}(jQuery));
