import View from '../view/View';
import Messages from '../utils/messages';
import * as chai from 'chai';
document.body.innerHTML = '<div id="slider-test2"></div>';
global.ResizeObserver = require('resize-observer-polyfill');
let assert = chai.assert;
describe("View update", function () {
  let s = {
    min: 15,
    max: 25,
    from: 17,
    to: 20,
    step: 2,
    isVertical: true,
    hideThumbLabel: true,
    isRange: false,
  };
  let sUpdated = {
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
  const view = new View(root);
  view.refreshView(Messages.INIT, s);
  view.refreshView(Messages.UPDATE, sUpdated);
  it("View set correct style for ThumbLabel after update", function () {
    assert.equal(view.getSlider().getThumbLabelFrom().style.display, "block");
  });
  it("View set correct value for min label after update", function () {
    assert.equal(view.getSlider().getMinRangeHTML().innerText, "" + sUpdated.min);
  });
});
