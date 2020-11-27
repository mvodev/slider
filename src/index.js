import './index.scss';
import { View } from './view/View';
import { Model } from './model/Model';
import { Controller } from './controller/Controller';

(function ($) {
 $.fn.fsdSlider = function (settings) {
  var defaultSettings = {
   min: 0,
   max: 10,
   from: 5,
   isRange: false,
   isVertical: false,
  };
  var unionSettings = $.extend(defaultSettings, settings);
  return this.each(function () {
   let model = new Model(unionSettings);
   let view = new View(model, this);
   let controller = new Controller(view, model);
   controller.start();
  });
 };
})(jQuery);
$('.slider').fsdSlider({
 min: -15,
 max: -10,
 from: -14,
 step: 0.2,
 to: -11,
 isVertical: true,
 hideThumbLabel: false,
 isRange: true,
});