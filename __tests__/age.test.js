import Age from './../src/age.js';

describe('Age', () => {
  // let age;
  // beforeEach(() => {
  //   age = new Age();
  // }); 

  test('it should return num for the age', () => {
    age.name = 5;
    expect(age.name).toEqual(5);
  });
});