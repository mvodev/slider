import { Model } from '../model/model';
import * as chai from 'chai';
import './test.css';
let assert = chai.assert;

describe("Model set settings", function () {
 const model = new Model({
  min: -15,
  max: -10,
  from: -14,
  step: 0.2,
  to: -11,
  isVertical: false,
  hideThumbLabel: false,
  isRange: true,
 });

 it("Model return correct value", function () {
  assert.equal(model.getTo(), -11);
 });
});