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
 min: -5,
 max: 10,
 from: 7.4,
 step: 2,
 //to: -15,
 isVertical: false,
 hideThumbLabel: false,
 isRange: false,
});