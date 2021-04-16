export default class Mercury{
  constructor(merc) {
    this.merc = merc;
  }
  get mercuryAge() {
    return this.divideByMercury();
  }
  divideByMercury() {
    return this.merc /= .24;
  }
}
  