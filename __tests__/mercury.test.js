/* eslint-disable no-undef */
import Mercury from './src/mercury.js';
import Age from './src/age.js';

describe('Mercury', () => {
  let mercury;
  let num;
  beforeEach(() => {
    merc = new Mercury;
    num = new Age;

  });
  test('this should divide 5 by .24', () => {
    num.age = 5;
    expect(num.merc).toEqual(20.8);
  });
});