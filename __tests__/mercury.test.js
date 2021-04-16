/* eslint-disable no-undef */
import Mercury from './../src/mercury.js';

describe('Mercury', () => {
  test('this should divide 5 by .24and equal 21', () => {
    let merc = new Mercury(5);
    expect(merc.mercuryAge).toEqual(21);
  });
});