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
 isRange: true,
});
var sl1_instance = $sl1.data("fsdSlider");
sl1_instance.update();
// $fsd.update();
// $('.slider2').fsdSlider({
//  min: 5,
//  max: 50,
//  from: 7,
//  step: 2,
//  to: -11,
//  isVertical: false,
//  isRange: false,
//  hideThumbLabel: false,
//  callback: callback2,
// });
// // function callback(result) {
// //  $('.slider__input').val(result.from+''+result.to);
// //  console.log('inside callback' + result.from);
// // }
// var $sl2 = $('.slider2__input');
// function callback2(result2) {
//  $sl2.val(result2.from);
// }