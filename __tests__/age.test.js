import Age from './../src/age.js';

describe('Age', () => {
  let num;
  beforeEach(() => {
    num = new Age();
  }); 

  test('it should return num for the age', () => {
    num.age = 5;
    expect(num.age).toEqual(5);
  });
});