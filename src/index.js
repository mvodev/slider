import './index.scss';
import { View } from './view/view.ts';
import { Model } from './model/model.ts';
import { Controller } from './controller/controller.ts';

(function ($) {
 $.fn.fsdSlider = function (rootElem, options) {
  const root = rootElem;
  var settings = $.extend({
   min: '0',
   max: '100',
   curPos: '30',
  }, options);

  let model = new Model(settings);
  let view = new View(model, root);
  let controller = new Controller(view, model);
  controller.initialize();
  controller.bindEvents();
 };
})(jQuery);
$('.slider').fsdSlider(document.querySelector('.slider'), {
 'min': '0',
 'max': '10'
});