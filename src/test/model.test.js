import { Model } from '../model/model';
import * as chai from 'chai';
let assert = chai.assert;

describe("Model set settings", function () {
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