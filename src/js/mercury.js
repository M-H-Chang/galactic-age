export default class Mercury{
  constructor(merc) {
    this.merc = merc;
  }
  get mercuryAge() {
    return this.divideByMercury();
  }
  divideByMercury() {
    return Math.round(this.merc /= .24);
  }
}
  