/* eslint-disable no-undef */
import Venus from '../src/js/venus.js';

describe('Venus', () => {
  test('this should divide 5 by .62 and equal 9', () => {
    let ven = new Venus(5);
    expect(ven.venusAge).toEqual(9);
  });
});