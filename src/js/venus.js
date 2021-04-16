export default class Venus{
  constructor(ven) {
    this.ven = ven;
  }
  get venusAge() {
    return this.divideByVenus();
  }
  // divideByVenus() {
  //   return Math.round(this.ven /= .62);
  // }
}