import './index.scss';
import './fsd-slider.js';

function setValuesToControlPanel(s, slider) {
  $(`.js-control-panel__min-${slider}`).val(s.min);
  $(`.js-control-panel__max-${slider}`).val(s.max);
  $(`.js-control-panel__from-${slider}`).val(s.from);
  $(`.js-control-panel__step-${slider}`).val(s.step);
  if (s.isRange) {
    $(`.js-control-panel__to-${slider}`).val(s.to);
  } else {
    $(`.js-control-panel__to-${slider}`).val('');
  }
  if (s.isRange) {
    $(`.js-control-panel__values-${slider}`).val(`${s.from} - ${s.to}`);
  } else {
    $(`.js-control-panel__values-${slider}`).val(s.from);
  }
}

const $sl1 = $('.slider1');
const sl1Settings = {
  min: 5000,
  max: 25000,
  from: 8000,
  step: 1000,
  to: 18000,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
};

$sl1.fsdSlider(sl1Settings);

const callback1 = {
  handleEvent: (result) => {
    setValuesToControlPanel(result, 'slider1');
  },
};

const sl1Instance = $sl1.data('fsd-slider');
sl1Instance.addCallback(callback1);

const $sl2 = $('.slider2');
const sl2Settings = {
  min: 5,
  max: 10,
  from: 7,
  step: 0.2,
  isVertical: true,
  hideThumbLabel: false,
  isRange: false,
};

const callback2 = {
  handleEvent: (result) => {
    setValuesToControlPanel(result, 'slider2');
  },
};

$sl2.fsdSlider(sl2Settings);

const sl2Instance = $sl2.data('fsd-slider');
sl2Instance.addCallback(callback2);

const $sl3 = $('.slider3');
const sl3Settings = {
  min: -15,
  max: 100,
  from: -5,
  step: 5,
  to: 20,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
};

$sl3.fsdSlider(sl3Settings);

const callback3 = {
  handleEvent: (result) => {
    setValuesToControlPanel(result, 'slider3');
  },
};

const sl3Instance = $sl3.data('fsd-slider');
sl3Instance.addCallback(callback3);

function collectData(sliderNumber) {
  const result = {
    min: $(`.js-control-panel__min-${sliderNumber}`).val(),
    max: $(`.js-control-panel__max-${sliderNumber}`).val(),
    from: $(`.js-control-panel__from-${sliderNumber}`).val(),
    to: $(`.js-control-panel__to-${sliderNumber}`).val(),
    step: $(`.js-control-panel__step-${sliderNumber}`).val(),
    hideThumbLabel: $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).is(':checked'),
    isVertical: $(`.js-control-panel__is-vertical-${sliderNumber}`).is(':checked'),
    isRange: $(`.js-control-panel__is-range-${sliderNumber}`).is(':checked'),
  };
  return result;
}

function inputHandler() {
  if ($(this).parent().parent().hasClass('js-control-panel__form_slider1')) {
    sl1Instance.update(collectData('slider1'));
  } else if ($(this).parent().parent().hasClass('js-control-panel__form_slider2')) {
    sl2Instance.update(collectData('slider2'));
  } else if ($(this).parent().parent().hasClass('js-control-panel__form_slider3')) {
    sl3Instance.update(collectData('slider3'));
  }
}

$('input').on('change', inputHandler);

function setSettingsToInputs(sliderNumber, sliderSettings) {
  $(`.js-control-panel__min-${sliderNumber}`).val(sliderSettings.min);
  $(`.js-control-panel__max-${sliderNumber}`).val(sliderSettings.max);
  $(`.js-control-panel__from-${sliderNumber}`).val(sliderSettings.from);
  $(`.js-control-panel__step-${sliderNumber}`).val(sliderSettings.step);
  if (sliderSettings.isVertical) {
    $(`.js-control-panel__is-vertical-${sliderNumber}`).prop('checked', true);
  } else {
    $(`.js-control-panel__is-vertical-${sliderNumber}`).prop('checked', false);
  }
  if (sliderSettings.isRange) {
    $(`.js-control-panel__is-range-${sliderNumber}`).prop('checked', true);
    $(`.js-control-panel__to-${sliderNumber}`).val(sliderSettings.to);
  } else {
    $(`.js-control-panel__is-range-${sliderNumber}`).prop('checked', false);
  }
  if (sliderSettings.hideThumbLabel) {
    $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).prop('checked', true);
  } else {
    $(`.js-control-panel__hide-thumb-label-${sliderNumber}`).prop('checked', false);
  }
}

setSettingsToInputs('slider1', sl1Settings);
setSettingsToInputs('slider2', sl2Settings);
setSettingsToInputs('slider3', sl3Settings);
