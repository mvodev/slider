import './index.scss';
import './fsd-slider.js';

function setValuesToControlPanel(s, slider) {
  $(`.js-control-panel__min-${slider}`).val(s.min);
  $(`.js-control-panel__max-${slider}`).val(s.max);
  $(`.js-control-panel__from-${slider}`).val(s.from);
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

$sl1.fsdSlider(sl1Settings, {
  handleEvent: (message, result) => {
    const s = JSON.parse(result);
    setValuesToControlPanel(s, 'slider1');
  },
});

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

$sl2.fsdSlider(sl2Settings, {
  handleEvent: (message, result) => {
    const s = JSON.parse(result);
    setValuesToControlPanel(s, 'slider2');
  },
});

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

$sl3.fsdSlider(sl3Settings, {
  handleEvent: (message, result) => {
    const s = JSON.parse(result);
    setValuesToControlPanel(s, 'slider3');
  },
});

const sl1Instance = $sl1.data('fsdSlider');
const sl2Instance = $sl2.data('fsdSlider');
const sl3Instance = $sl3.data('fsdSlider');

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

function setSettingsToInputs() {
  if (sl1Settings.isVertical) {
    $('.js-control-panel__is-vertical-slider1').prop('checked', true);
  }
  if (sl1Settings.isRange) {
    $('.js-control-panel__is-range-slider1').prop('checked', true);
  }
  if (sl1Settings.hideThumbLabel) {
    $('.js-control-panel__hide-thumb-label-slider1').prop('checked', true);
  }
  if (sl2Settings.isVertical) {
    $('.js-control-panel__is-vertical-slider2').prop('checked', true);
  }
  if (sl2Settings.isRange) {
    $('.js-control-panel__is-range-slider2').prop('checked', true);
  }
  if (sl2Settings.hideThumbLabel) {
    $('.js-control-panel__hide-thumb-label-slider2').prop('checked', true);
  }
  if (sl3Settings.isVertical) {
    $('.js-control-panel__is-vertical-slider3').prop('checked', true);
  }
  if (sl3Settings.isRange) {
    $('.js-control-panel__is-range-slider3').prop('checked', true);
  }
  if (sl3Settings.hideThumbLabel) {
    $('.js-control-panel__hide-thumb-label-slider3').prop('checked', true);
  }
  return 0;
}

setSettingsToInputs();
