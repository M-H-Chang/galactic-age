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
    this.avgAge -= num;
    return this.avgAge;
  }

  yearsOver(num) {
    num -= this.avgAge;
    return num;
  }
}