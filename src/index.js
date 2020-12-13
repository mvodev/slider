import './index.scss';
import './fsdSlider';
var $sl1 = $('.slider');
$sl1.fsdSlider({
 min: -15,
 max: -10,
 from: -14,
 step: 0.2,
 to: -11,
 isVertical: true,
 hideThumbLabel: false,
 isRange: false,
 onChange: callback,
});
// var sl1_instance = $sl1.data("fsdSlider");
// sl1_instance.update({ min: 0, max: 22, from: -5, });
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
 $('.slider__input').val(result.from + '     ' + result.to);
}
var $sl2_input = $('.slider2__input');
function callback2(result2) {
 $sl2_input.val(result2.from);
}