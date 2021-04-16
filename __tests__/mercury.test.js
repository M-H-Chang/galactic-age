/* eslint-disable no-undef */
import Mercury from './../src/mercury.js';

describe('Mercury', () => {
  test('this should divide 5 by .24 and equal 21', () => {
    let merc = new Mercury();
    merc.divideByMercury(5);
    expect(merc).toEqual(21);
  });
});