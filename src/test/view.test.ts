import View from '../view/View';
import Messages from '../utils/Messages';
import * as chai from 'chai';
let assert = chai.assert;
document.body.innerHTML = '<div id="slider-test"></>';
describe("View", function () {
  let s = {
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
  const view = new View(root);
  view.refreshView(Messages.INIT, s);
  it("View set correct classes for range label in vertical mode", function () {
    assert.equal(view.getSlider().getRangeLabel().classList.contains('fsd-slider__range-label_is_vertical'), true);
  });
  it("View set correct classes for range in vertical mode", function () {
    assert.equal(view.getSlider().getRange().classList.contains('fsd-slider__range_is_vertical'), true);
  });
  it("View set correct min value", function () {
    assert.equal(view.getSlider().getRangeLabel().firstElementChild.innerHTML, "" + s.min);
  });
  it("View set correct style for ThumbLabel", function () {
    assert.equal(view.getSlider().getThumbLabelFrom().style.display, "none");
  });
});