import Model from '../model/Model';
import * as chai from 'chai';
let assert = chai.assert;
describe('Model set settings', function () {
  const model = new Model({
    min: -15,
    max: 10,
    from: -14,
    step: 0.2,
    to: -11,
    isVertical: false,
    hideThumbLabel: false,
    isRange: true,
  });
  it('Model return correct min after set settings', function () {
    assert.equal(model.getMin(), -15);
  });
  it('Model return correct max after set settings', function () {
    assert.equal(model.getMax(), 10);
  });
  it('Model return correct step after set settings', function () {
    assert.equal(model.getStep(), 0.2);
  });
  it('Model return correct from after set settings', function () {
    assert.equal(model.getFrom(), -14);
  });
  it('Model return correct to after set settings', function () {
    assert.equal(model.getTo(), -11);
  });
  it('Model return correct isRange after set settings', function () {
    assert.equal(model.getIsRange(), true);
  });
  it('Model return correct isVertical after set settings', function () {
    assert.equal(model.getIsVertical(), false);
  });
  it('Model return correct hideThumbLabel after set settings', function () {
    assert.equal(model.getHideThumbLabel(), false);
  });
});


describe('Model validate settings', function () {
  const model = new Model({
    min: -15,
    max: 10,
    from: -14,
    step: 0.2,
    to: -11,
    isVertical: false,
    hideThumbLabel: false,
    isRange: true,
  });
  it('Model return correct min after validate settings', function () {
    model.updateSettings({
      min: -8,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(model.getMin(), -15);
  });
  it('Model return correct max after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: -25,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(model.getMax(), 10);
  });
  it('Model return correct from after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: 10,
      from: 200,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(model.getFrom(), -14);
  });
  it('Model return correct to after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: 200,
      isVertical: false,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(model.getTo(), -11);
  });
  it('Model return correct isRange after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: -25,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: false,
      isRange: false,
    });
    assert.equal(model.getIsRange(), false);
  });
  it('Model return correct isVertical after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: -25,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: true,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(model.getIsVertical(), true);
  });
  it('Model return correct hideThumbLabel after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: -25,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: true,
      isRange: true,
    });
    assert.equal(model.getHideThumbLabel(), true);
  });
  it('Model return correct step after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: -25,
      from: -14,
      step: -5,
      to: -11,
      isVertical: false,
      hideThumbLabel: true,
      isRange: true,
    });
    assert.equal(model.getStep(), 0.2);
  });
});


describe('Model validate step settings', function () {
  const model = new Model({
    min: -15,
    max: 10,
    from: -14,
    step: 0.2,
    to: -11,
    isVertical: false,
    hideThumbLabel: false,
    isRange: true,
  });
  it('Model return correct step and from and to after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: 10,
      from: -14,
      step: 5,
      to: -11,
      isVertical: false,
      hideThumbLabel: true,
      isRange: true,
    });
    assert.equal(model.getStep(), 5);
    assert.equal(model.getFrom(), -10);
    assert.equal(model.getTo(), -5);
  });
});