import './index.scss';
import { View } from './view/View.ts';
import { Model } from './model/Model.ts';
import { Controller } from './controller/Controller.ts';

(function ($) {
 $.fn.fsdSlider = function (rootElem, settings) {
  const root = rootElem;
  let model = new Model(settings);
  let view = new View(model, root);
  let controller = new Controller(view, model);
  controller.start();
 };
})(jQuery);
$('.slider').fsdSlider(document.querySelector('.slider'), {
 min: -22,
 max: -10,
 from: -20,
 to: -15,
 isVertical: false,
 hideThumbLabel: false,
 isRange: true,
});