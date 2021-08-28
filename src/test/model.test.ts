import { Model } from '../model/model';
import * as chai from 'chai';
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
    assert.equal(model.getMin(), 0);
  });
  it("Model return correct step after validation settings", function () {
    assert.equal(model.getStep(), 1);
  });
  it("Model return correct from after setFrom method", function () {
    model.setFrom(50,0);
    assert.equal(model.getFrom(), 5);
  });
  it("Model return correct from after setFrom method", function () {
    model.setFrom(-10,0);
    assert.equal(model.getFrom(), 0);
  });
});




