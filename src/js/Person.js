export default class Person {
  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = Math.round(value * (1 - ((this.distance - 1) * 0.1)), 2);
  }

  get stoned() {
    return this._attack;
  }

  set stoned(value) {
    this._attack = Math.round(value - Math.log2(value) * 5, 2);
  }
}
