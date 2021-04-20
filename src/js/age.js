// import Mercury from './../src/js/mercury.js';
// import Jupiter from './../src/js/jupiter.js';
// import Mars from './../src/js/mars.js';
// import Venus from './../src/js/venus.js';

export default class Age {
  constructor(num) {
    this.age = num;
    this.avgAge = 72;
  }

  yearsRemain(num) {
    // if (num < this.avgAge) {
    this.avgAge -= num;
    return this.avgAge;
    // } else if (num > this.avgAge) {
    // num -= this.avgAge;
    // return num;
    // }
  }
}