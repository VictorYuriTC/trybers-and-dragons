import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  public _lifePoints: number;
  public _defense: number;
  public _strength: number;
  public _energy: Energy;

  constructor(
    name: string,
    race = new Elf(name, getRandomInt(1, 10)),
    archetype = new Mage(name),
  ) {
    this._race = race;
    this._archetype = archetype;
    this._lifePoints = this._race.maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = { 
      amount: getRandomInt(1, 10),
      type_: 'mana',
    } as Energy;
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get dexterity() {
    return this._race.dexterity;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get defense():number {
    return this._defense;
  }

  get strength():number {
    return this._strength;
  }

  get energy():Energy {
    return this._energy;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
  }

  receiveDamage(attackPoints: number): number {
    console.log(`${this._strength} ${attackPoints}`);
    return 10;
  }
}

export default Character;