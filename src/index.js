import './index.scss';
import { View } from './view/View';
import { Model } from './model/Model';
import { Controller } from './controller/Controller';

(function ($) {
 $.fn.fsdSlider = function (settings, callback) {
  var defaultSettings = {
   min: 0,
   max: 10,
   from: 5,
   isRange: false,
   isVertical: false,
   hideThumbLabel: false,
   callback: undefined,
  };
  var unionSettings = $.extend(defaultSettings, settings);
  return this.each(function () {
   var model = new Model(unionSettings);
   var view = new View(model, this);
   var controller = new Controller(view, model);
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
$('.slider2').fsdSlider({
 min: 5,
 max: 50,
 from: 7,
 step: 2,
 to: -11,
 isVertical: false,
 isRange: false,
 hideThumbLabel: false,
 callback: callback2,
});
// function callback(result) {
//  $('.slider__input').val(result.from+''+result.to);
//  console.log('inside callback' + result.from);
// }
function callback2(result2) {
 $('.slider2__input').val(result2.from);
}