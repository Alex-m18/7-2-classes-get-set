/**
 * Creates new Character
 * @class
 *
 * @param {string} name Character name (2...10 symbols)
 * @param {string} type Character type (see characterTypes)
 *
 * @throws Will throw an error if the name length is wrong
 */
class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Error in Character: wrong name length');
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = 1;
    this.defence = 1;
    this._powerModeAttacks = 0;
  }

  get powerModeEnabled() {
    if (this._powerModeAttacks) return true;
    return false;
  }

  set powerModeEnabled(value) {
    if (!this._powerModeAttacks) this._powerModeAttacks = 3;
  }

  get attack() {
    if (this._powerModeAttacks) {
      this._powerModeAttacks -= 1;
      return this._attack * 2;
    }
    return this._attack;
  }

  set attack(value) { this._attack = value; }

  get health() {
    if (this._powerModeAttacks) return this._health * 2;
    return this._health;
  }

  set health(value) { this._health = value; }

  get defence() {
    if (this._powerModeAttacks) return this._defence * 2;
    return this._defence;
  }

  set defence(value) { this._defence = value; }

  damage(points) {
    this.health -= points * (1 - this._defence / 100);
    if (this.health < 0) this.health = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Can't level up dead character");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}

export default Character;
