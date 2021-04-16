export default class Jupiter{
  constructor(jup) {
    this.jup = jup;
  }
  get jupAge() {
    return this.divideByJup();
  }
  divideByJup() {
    if (this.jup < 11.86) {
      return("You are less than one in Jupiter years.");
    } else{
      return Math.round(this.jup /= 11.86);
    }
  }
}