import * as chai from 'chai';

import '../../slider/fsd-slider.css';
import Slider from '../view/Slider';
import Messages from '../utils/messages';

global.ResizeObserver = require('resize-observer-polyfill');
let assert = chai.assert;
document.body.innerHTML = '<div id="slider-test"></>';
describe("View", function () {
  let settings = {
    min: 15,
    max: 25,
    from: 17,
    to:20,
    step: 2,
    isVertical: true,
    hideThumbLabel: true,
    isRange: false,
  };
  const root: HTMLDivElement = document.querySelector('#slider-test');
  const view = new Slider(root, settings);
  view.refreshView(Messages.INIT, settings);
  it("View set correct classes for range label in vertical mode", function () {
    assert.equal(view.getRangeLabelHTML().classList.contains('fsd-slider__range-label_is_vertical'), true);
  });
  it("View set correct classes for range in vertical mode", function () {
    assert.equal(view.getRangeHTML().classList.contains('fsd-slider__range_is_vertical'), true);
  });
  it("View set correct min value", function () {
    assert.equal(view.getMinRangeHTML().innerText, "" + settings.min);
  });
  it("View set correct style for ThumbLabel", function () {
    assert.equal(view.getThumbLabelFrom().style.display, '');
  });
});