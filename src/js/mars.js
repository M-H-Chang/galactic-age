export default class Mars{
  constructor(mars) {
    this.mars = mars;
  }
  get marsAge() {
    return this.divideByMars();
  }
  divideByMars() {
    if (this.mars < 1.88) {
      return("You are less than one in Mars years.");
    }
    return Math.round(this.mars /= 1.88);
  }
}