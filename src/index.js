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
 min: 0,
 max: 10,
 currentPos: 3,
 isVertical: true,
 hideThumbLabel: false,
 isInterval:false,
});