import * as chai from 'chai';

import Model from '../model/Model';
import ModelTester from './ModelTester';

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

  const tester = new ModelTester(model);
  model.addObserver(tester);

  tester.test({
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
    assert.equal(tester.getResult().min, -15);
  });
  it('Model return correct max after set settings', function () {
    assert.equal(tester.getResult().max, 10);
  });
  it('Model return correct step after set settings', function () {
    assert.equal(tester.getResult().step, 0.2);
  });
  it('Model return correct from after set settings', function () {
    assert.equal(tester.getResult().from, -14);
  });
  it('Model return correct to after set settings', function () {
    assert.equal(tester.getResult().to, -11);
  });
  it('Model return correct isRange after set settings', function () {
    assert.equal(tester.getResult().isRange, true);
  });
  it('Model return correct isVertical after set settings', function () {
    assert.equal(tester.getResult().isVertical, false);
  });
  it('Model return correct hideThumbLabel after set settings', function () {
    assert.equal(tester.getResult().hideThumbLabel, false);
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

  const tester = new ModelTester(model);
  model.addObserver(tester);

  it('Model return correct min after validate settings', function () {
    expect(function () {
      tester.test({
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
    try{
      tester.test({
        min: -8,
        max: 10,
        from: -14,
        step: 0.2,
        to: -11,
        isVertical: false,
        hideThumbLabel: false,
        isRange: true,
      });
      assert.equal(tester.getResult().min, -15);
    }catch(e) {}
  });
  it('Model return correct max after validate settings', function () {
    expect(function () {
      tester.test({
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
    try{
      tester.test({
        min: -15,
        max: -25,
        from: -14,
        step: 0.2,
        to: -11,
        isVertical: false,
        hideThumbLabel: false,
        isRange: true,
      });
      assert.equal(tester.getResult().max, 10);
    }catch(e){}
  });
  it('Model return correct to after validate settings', function () {
    expect(function () {
      tester.test({
        min: -15,
        max: -25,
        from: -14,
        step: 0.2,
        to: 100,
        isVertical: false,
        hideThumbLabel: false,
        isRange: true,
      });
    }).to.throw();
    try {
      tester.test({
        min: -15,
        max: -25,
        from: -14,
        step: 0.2,
        to: 100,
        isVertical: false,
        hideThumbLabel: false,
        isRange: true,
      });
      assert.equal(tester.getResult().to, -11);
    } catch(e) {}
  });
  it('Model return correct from after validate settings', function () {
    expect(function () {
      tester.test({
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
    try{
      tester.test({
        min: -15,
        max: 10,
        from: 200,
        step: 0.2,
        to: -11,
        isVertical: false,
        hideThumbLabel: false,
        isRange: true,
      });
      assert.equal(tester.getResult().from, -14);
    }catch(e){}
  });

  it('Model return correct isVertical after validate settings', function () {
    tester.test({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: true,
      hideThumbLabel: false,
      isRange: true,
    });
    assert.equal(tester.getResult().isVertical, true);
  });
  it('Model return correct hideThumbLabel after validate settings', function () {
    tester.test({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: true,
      isRange: true,
    });
    assert.equal(tester.getResult().hideThumbLabel, true);
  });
  it('Model return correct step after validate settings', function () {

    expect(function () {
        tester.test({
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
    try{
      tester.test({
        min: -15,
        max: -25,
        from: -14,
        step: -5,
        to: -11,
        isVertical: false,
        hideThumbLabel: true,
        isRange: true,
      });
      assert.equal(tester.getResult().step, 0.2);
    }catch(e){}
  });
  it('Model return correct isRange after validate settings', function () {
    tester.test({
      min: -15,
      max: 10,
      from: -14,
      step: 0.2,
      to: -11,
      isVertical: false,
      hideThumbLabel: false,
      isRange: false,
    });
    assert.equal(tester.getResult().isRange, false);
  });
});