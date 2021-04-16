/* eslint-disable no-undef */
import Jupiter from '../src/js/jupiter.js';
describe('Jupiter', () => {
  test('return the string "You are less than one in Jupiter years." if its less than 12', () => {
    let jup = new Jupiter(10);
    expect(jup.jupAge).toEqual("You are less than one in Jupiter years.");
  });
  describe('Jupiter', () => {
    test('this should divide 30 by 11.86 and equal 3', () => {
      let jup = new Jupiter(30);
      expect(jup.jupAge).toEqual(3);
    });
 
  });
});