export default class Mars{
  constructor(mars) {
    this.mars = mars;
  }
  get marsAge() {
    return this.divideByMars();
  }
  divideByMars() {
    return Math.round(this.mars /= 1.88);
  }
}