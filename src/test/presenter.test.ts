import Model from '../model/Model';
import * as chai from 'chai';
import Presenter from '../presenter/Presenter';
import View from '../view/View';
// https://github.com/jsdom/jsdom
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
//const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
//console.log(dom.window.document.querySelector("p").textContent);
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
    assert.equal(JSON.parse(model.getSettings()).min, -10);
  });
  it("Slider is correctly set min value in rangeLabel after presenter update", function () {
    presenter.update(settingsUpdated);
    assert.equal(view.getSlider().getMinRangeHTML().innerText, "-10");
  });
});

