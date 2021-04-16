/* eslint-disable no-undef */
import Mars from '../src/js/mars.js';

describe('Mars', () => {
  test('this should divide 10 by 1.88 and equal 5', () => {
    let mars = new Mars(10);
    expect(mars.marsAge).toEqual(5);
  });
});