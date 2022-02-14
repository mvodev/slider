import * as chai from 'chai';

import Slider from '../view/Slider';
import Messages from '../utils/messages';

document.body.innerHTML = '<div id="slider-test2"></div>';
global.ResizeObserver = require('resize-observer-polyfill');
let assert = chai.assert;
describe("View update", function () {
  let settings = {
    min: 15,
    max: 25,
    from: 17,
    to: 20,
    step: 2,
    isVertical: true,
    hideThumbLabel: true,
    isRange: false,
  };
  let settingsUpdated = {
    min: 10,
    max: 25,
    from: 17,
    to: 20,
    step: 2,
    isVertical: true,
    hideThumbLabel: false,
    isRange: false,
  };
  const root: HTMLDivElement = document.querySelector('#slider-test2');
  const view = new Slider(root, settings);
  view.refreshView(Messages.INIT, settings);
  view.refreshView(Messages.UPDATE, settingsUpdated);
  it("View set correct value for min label after update", function () {
    assert.equal(view.getMinRangeHTML().innerText, "" + settingsUpdated.min);
  });
});
