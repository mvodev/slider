import './index.scss';
import { View } from './view/View.ts';
import { Model } from './model/Model.ts';
import { Controller } from './controller/Controller.ts';

(function ($) {
 $.fn.fsdSlider = function (rootElem, settings) {
  let defaultSettings = {
   min: 0,
   max: 10,
   from: 5,
  };
  let unionSettings = Object.assign(defaultSettings, settings);
  const root = rootElem;
  let model = new Model(defaultSettings);
  let view = new View(model, root);
  let controller = new Controller(view, model);
  controller.start();
 };
})(jQuery);
$('.slider').fsdSlider(document.querySelector('.slider'), {
 min: -15,
 max: -10,
 from: -14,
 step: 0.2,
 to: -11,
 isVertical: true,
 hideThumbLabel: false,
 isRange: true,
});