import {
  expect
} from 'chai';

import round from '../../src/round';

describe('round', () => {
  it(`4.006 = 4`, () => {
      expect(round(4.006)).to.be.equal(4);
  });
  it(`4.006, 2 = 4.01`, () => {
      expect(round(4.006, 2)).to.be.equal(4.01);
  });
  it(`4060, -2 = 4100`, () => {
      expect(round(4060, -2)).to.be.equal(4100);
  });
  it(`0, 1 = 0`, () => {
      expect(round(0, 1)).to.be.equal(0);
  });
  it(`0, 0 = 0`, () => {
      expect(round(0, 0)).to.be.equal(0);
  });
  it(`0.7875, 3 = 0.788`, () => {
      expect(round(0.7875, 3)).to.be.equal(0.788);
  });
  it(`0.105, 2 = 0.11`, () => {
      expect(round(0.105, 2)).to.be.equal(0.11);
  });
  it(`1, 1 = 1`, () => {
      expect(round(1, 1)).to.be.equal(1);
  });
  it(`0.1049999999, 2 = 0.1`, () => {
      expect(round(0.1049999999, 2)).to.be.equal(0.1);
  });
  it(`0.105, 1 = 0.1`, () => {
      expect(round(0.105, 1)).to.be.equal(0.1);
  });
  it(`1.335, 2 = 1.34`, () => {
      expect(round(1.335, 2)).to.be.equal(1.34);
  });
  it(`1.35, 1 = 1.4`, () => {
      expect(round(1.35, 1)).to.be.equal(1.4);
  });
  it(`12345.105, 2 = 12345.11`, () => {
      expect(round(12345.105, 2)).to.be.equal(12345.11);
  });
  it(`0.0005, 2 = 0`, () => {
      expect(round(0.0005, 2)).to.be.equal(0);
  });
  it(`0.0005, 3 = 0.001`, () => {
      expect(round(0.0005, 3)).to.be.equal(0.001);
  });
  it(`1.2345e3, 3 = 1234.5`, () => {
      expect(round(1.2345e3, 3)).to.be.equal(1234.5);
  });
  it(`1.2344e3, 3 = 1234.4`, () => {
      expect(round(1.2344e3, 3)).to.be.equal(1234.4);
  });
  it(`1e3, 1 = 1000`, () => {
      expect(round(1e3, 1)).to.be.equal(1000);
  });
});