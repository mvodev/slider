import './index.scss';
import './fsdSlider.js';
//import test from './test/test';
var $sl1 = $('.slider1');
$sl1.fsdSlider({
 min: -15,
 max: -10,
 from: -14,
 step: 0,
 to: -11,
 isVertical: false,
 hideThumbLabel: false,
 isRange: true,
 onChange: callback,
 onStart: callback,
});
var sl1_instance = $sl1.data("fsdSlider");
var $sl2 = $('.slider2');
$sl2.fsdSlider({
 min: 5,
 max: 10,
 from: 7,
 step: 0.2,
 to: -11,
 isVertical: true,
 hideThumbLabel: false,
 isRange: false,
 onChange: callback,
 onStart: callback,
});
var $sl3 = $('.slider3');
$sl3.fsdSlider({
 min: -15,
 max: 100,
 from: -14,
 step: 4,
 to: 11,
 isVertical: false,
 hideThumbLabel: false,
 isRange: true,
 onChange: callback,
 onStart: callback,
});
//sl1_instance.update({ min: 0, max: 22, from: -5, });
// var $sl2 = $('.slider2');
// $sl2.fsdSlider({
//  min: 5,
//  max: 50,
//  from: 7,
//  step: 0.5,
//  to: -11,
//  isVertical: false,
//  isRange: false,
//  hideThumbLabel: false,
//  onChange: callback2,
// });
// var sl2_instance = $sl2.data('fsdSlider');
// sl2_instance.update({ min: 0, max: 6, from: 3, step: 1, });
function callback(result) {
 var s = JSON.parse(result);
 $('.result1').val(s.from + '  -  ' + s.to);
}
