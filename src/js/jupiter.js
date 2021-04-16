export default class Jupiter{
  constructor(jup) {
    this.jup = jup;
  }
  get jupAge() {
    return this.divideByJup();
  }
  divideByJup() {
    return Math.round(this.jup /= 11.86);
  }
}