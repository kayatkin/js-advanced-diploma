import Character from '../Character';

export default class Undead extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.movementRange = 4;
    this.attackRange = 1;
    this.type = 'undead';
  }
}
