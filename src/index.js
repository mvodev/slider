import './index.scss';
import './fsd-slider.js';
let $sl1 = $('.slider1');
let $sl1_input = $('.input-result1');
let sl1Settings = {
  min: 5000,
  max: 25000,
  from: 8000,
  step: 1000,
  to: 18000,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
};
$sl1.fsdSlider(sl1Settings,{
  handleEvent: (message, result) => {
    let s = JSON.parse(result);
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
let sl2Settings={
  min: 5,
  max: 10,
  from: 7,
  step: 0.2,
  isVertical: true,
  hideThumbLabel: false,
  isRange: false,
}
$sl2.fsdSlider(sl2Settings,{
  handleEvent: (message, result) => {
    let s = JSON.parse(result);
    if (s.isRange) {
      $sl2_input.val(s.from + '    -    ' + s.to);
    }
    else {
      $sl2_input.val(s.from);
    }
  }
});
let $sl3 = $('.slider3');
let $sl3_input = $('.input-result3');
let sl3Settings= {
  min: -15,
  max: 100,
  from: -5,
  step: 5,
  to: 20,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
}
$sl3.fsdSlider(sl3Settings, {
  handleEvent: (message, result) => {
    let s = JSON.parse(result);
    if (s.isRange) {
      $sl3_input.val(s.from + '    -    ' + s.to);
    }
    else {
      $sl3_input.val(s.from);
    }
  }
});
let sl1_instance = $sl1.data("fsdSlider");
let sl2_instance = $sl2.data("fsdSlider");
let sl3_instance = $sl3.data("fsdSlider");
setSettingsToInputs();
$("input").on("change",inputHandler);
function inputHandler() {
  if ($(this).parent().parent().hasClass("js-control-panel__form_slider1"))//slider1
  {
    sl1_instance.update(collectData('slider1'));
  }
  else if ($(this).parent().parent().hasClass("js-control-panel__form_slider2"))//slider1
  {
    sl2_instance.update(collectData('slider2'));
  }
  else if ($(this).parent().parent().hasClass("js-control-panel__form_slider3"))//slider1
  {
    sl3_instance.update(collectData('slider3'));
  }
}
function collectData(sliderNumber) {
  return {
    min: $('.js-control-panel__min-' + sliderNumber).val(),
    max: $('.js-control-panel__max-' + sliderNumber).val(),
    from: $('.js-control-panel__from-' + sliderNumber).val(),
    to: $('.js-control-panel__to-' + sliderNumber).val(),
    step: $('.js-control-panel__step-' + sliderNumber).val(),
    hideThumbLabel: $('.js-control-panel__hide-thumb-label-' + sliderNumber).is(':checked'),
    isVertical: $('.js-control-panel__is-vertical-' + sliderNumber).is(':checked')
  }
}
function setSettingsToInputs(){
  if(sl1Settings.isVertical){
    $('.js-control-panel__is-vertical-slider1').prop('checked', true);
  }
  if (sl2Settings.isVertical) {
    $('.js-control-panel__is-vertical-slider2').prop('checked', true);
  }
  if (sl3Settings.isVertical) {
    $('.js-control-panel__is-vertical-slider3').prop('checked', true);
  }
  return 0;
}
