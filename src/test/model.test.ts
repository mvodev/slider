import Model from '../model/Model';
import * as chai from 'chai';
let assert = chai.assert;
let expect = chai.expect;
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
    assert.equal(JSON.parse(model.getSettings()).min, -15);
  });
  it('Model return correct max after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).max, 10);
  });
  it('Model return correct step after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).step, 0.2);
  });
  it('Model return correct from after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).from, -14);
  });
  it('Model return correct to after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).to, -11);
  });
  it('Model return correct isRange after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).isRange, true);
  });
  it('Model return correct isVertical after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).isVertical, false);
  });
  it('Model return correct hideThumbLabel after set settings', function () {
    assert.equal(JSON.parse(model.getSettings()).hideThumbLabel, false);
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
    expect(function () {
      model.updateSettings({
        min: -8,
        max: 10,
        from: -14,
        step: 0.2,
        to: -11,
        isVertical: false,
        hideThumbLabel: false,
        isRange: true,
      })
    }).to.throw();
    expect(JSON.parse(model.getSettings()).min).equal(-15);
  });
  it('Model return correct max after validate settings', function () {
    expect(function () {
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
    }).to.throw();
    assert.equal(JSON.parse(model.getSettings()).max, 10);
  });
  it('Model return correct to after validate settings', function () {
    expect(function () {
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
    }).to.throw();
  });
  it('Model return correct from after validate settings', function () {
    expect(function () {
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
    }).to.throw();
  });

  it('Model return correct isVertical after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: true,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(JSON.parse(model.getSettings()).isVertical, true);
  });
  it('Model return correct hideThumbLabel after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: true,
      isRange: true,
    });
    assert.equal(JSON.parse(model.getSettings()).hideThumbLabel, true);
  });
  it('Model return correct step after validate settings', function () {

    expect(function () {
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
    }).to.throw();
    assert.equal(JSON.parse(model.getSettings()).step, 0.2);
  });
  it('Model return correct isRange after validate settings', function () {
    model.updateSettings({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: false,
      isRange: false,
    });
    assert.equal(JSON.parse(model.getSettings()).isRange, false);
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
    assert.equal(JSON.parse(model.getSettings()).step, 5);
    assert.equal(JSON.parse(model.getSettings()).from, -15);
    assert.equal(JSON.parse(model.getSettings()).to, -10);
  });
});