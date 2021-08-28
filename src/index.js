import './index.scss';
import './fsd-slider.js';
var $sl1 = $('.slider1');
var $sl1_input = $('.input-result1');
$sl1.fsdSlider({
  min: 5,
  max: 25,
  from: 8,
  step: 1,
  to: 18,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
}, 
{
  handleEvent: (message, result) => {
    var s = JSON.parse(result)
    if (s.isRange) {
      $sl1_input.val(s.from + '  -  ' + s.to);
    }
    else {
      $sl1_input.val(s.from);
    }
  }
});
var $sl2 = $('.slider2');
var $sl2_input = $('.input-result2');
$sl2.fsdSlider({
  min: 5,
  max: 10,
  from: 7,
  step: 0.2,
  to: -11,
  isVertical: true,
  hideThumbLabel: false,
  isRange: false,
},
{
  handleEvent: (message, result) => {
    var s = JSON.parse(result);
    if (s.isRange) {
      $sl2_input.val(s.from + '    -    ' + s.to);
    }
    else {
      $sl2_input.val(s.from);
    }
  }
});
var $sl3 = $('.slider3');
var $sl3_input = $('.input-result3');
$sl3.fsdSlider({
  min: -15,
  max: 100,
  from: -14,
  step: 4,
  to: 11,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
}, {
  handleEvent: (message, result) => {
    var s = JSON.parse(result);
    if (s.isRange) {
      $sl3_input.val(s.from + '    -    ' + s.to);
    }
    else {
      $sl3_input.val(s.from);
    }
  }
});
var sl1_instance = $sl1.data("fsdSlider");
var sl2_instance = $sl2.data("fsdSlider");
var sl3_instance = $sl3.data("fsdSlider");

$("input").on("change",function inputHandler(){
  if ($(this).parent().parent().hasClass("form_slider1"))//slider1
  {
    sl1_instance.update(collectData('slider1'));
  }
  else if ($(this).parent().parent().hasClass("form_slider2"))//slider1
  {
    sl2_instance.update(collectData('slider2'));
  }
  else if ($(this).parent().parent().hasClass("form_slider3"))//slider1
  {
    sl3_instance.update(collectData('slider3'));
  }  
});
function collectData(sliderNumber) {
  return {
    min: $('.control-panel__min-' + sliderNumber).val(),
    max: $('.control-panel__max-' + sliderNumber).val(),
    from: $('.control-panel__from-' + sliderNumber).val(),
    to: $('.control-panel__to-' + sliderNumber).val(),
    hideThumbLabel: $('.control-panel__hide-thumb-label-' + sliderNumber).is(':checked'),
  }
}
