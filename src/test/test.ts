import { Model } from '../model/model';
import * as chai from 'chai';
import { View } from '../view/view';
import { Messages } from '../utils/Messages';
let assert = chai.assert;

describe("Model", function () {
 const model = new Model({
  min: 15,
  max: -10,
  from: -14,
  step: -0.2,
  to: -11,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
 });
 it("Model return correct min after validation settings", function () {
  assert.equal(model.getMin(), -20);
 });
 it("Model return correct step after validation settings", function () {
  assert.equal(model.getStep(), 0.2);
 });
 it("Model return correct range value after validation settings", function () {
  assert.equal(model.isRange(), true);
 });
 it("Model return correct hideThumbLabel value after validation settings", function () {
  assert.equal(model.getSettings().hideThumbLabel, false);
 });
 it("Model return correct from after setFrom method", function () {
  model.setFrom(50);
  assert.equal(model.getFrom(), -15);
 });
 it("Model return correct from after setFrom method", function () {
  model.setFrom(-10);
  assert.equal(model.getFrom(), -20);
 });
});
document.body.innerHTML = '<div id="slider-test"></div>';
const root = document.querySelector('#slider-test') as HTMLDivElement;
let s = {
 min: 15,
 max: 25,
 from: 17,
 step: 2,
 isVertical: true,
 hideThumbLabel: true,
 isRange: false,
};
const view = new View(s, root);
describe("View", function () {
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
  assert.equal(view.getSlider().getThumbLabelFrom().getThumbLabelContainer().style.display, "none");
 });
 let sUpdated = {
  min: 10,
  max: 25,
  from: 17,
  step: 2,
  isVertical: true,
  hideThumbLabel: false,
  isRange: false,
 };
 it("View set correct style for ThumbLabel after update", function () {
  view.refreshView(1, sUpdated);
  assert.equal(view.getSlider().getThumbLabelFrom().getThumbLabelContainer().style.display, "block");
  it("View set correct min value", function () {
   assert.equal(view.getSlider().getRangeLabel().firstElementChild.innerHTML, "" + sUpdated.min);
  });
 });
});

