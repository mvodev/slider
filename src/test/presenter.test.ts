import Model from '../model/Model';
import * as chai from 'chai';
import Presenter from '../presenter/Presenter';
import View from '../view/View';
global.ResizeObserver = require('resize-observer-polyfill');
let assert = chai.assert;
document.body.innerHTML = '<div id="slider-test3"></>';
describe("Presenter", function () {
  const root3: HTMLDivElement = document.querySelector('#slider-test3');
  let settings = {
    min: 0,
    max: 25,
    from: 17,
    to: 20,
    step: 5,
    isVertical: true,
    hideThumbLabel: true,
    isRange: true,
  };
  let settingsUpdated = {
    min: -10,
    max: 25,
    from: 17,
    to: 20,
    step: 5,
    isVertical: true,
    hideThumbLabel: false,
    isRange: true,
  };
  const model = new Model(settings);
  const view = new View(root3);
  const presenter = new Presenter(view, model);
  model.addObserver(presenter);
  view.addObserver(presenter);
  presenter.initialize();

  it("Slider is correctly set min after presenter update", function () {
    presenter.update(settingsUpdated);
    assert.equal(model.getMin(), -10);
  });
  it("Slider is correctly set min value in rangeLabel after presenter update", function () {
    presenter.update(settingsUpdated);
    assert.equal(view.getSlider().getMinRangeHTML().innerText, "-10");
  });
});
const root3: HTMLDivElement = document.querySelector('#slider-test3');
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
const model = new Model(s);
const view = new View(root3);
const presenter = new Presenter(view, model);
model.addObserver(presenter);
view.addObserver(presenter);
presenter.initialize();
presenter.update(sUpdated);
console.log(view.getSlider().getThumbLabelFrom().style);
