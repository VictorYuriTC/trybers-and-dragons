import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  public _lifePoints: number;
  public _defense: number;
  public _strength: number;

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

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    console.log(`${this._race.name} has leveled up!`);
  }

  receiveDamage(attackPoints: number): number {
    console.log(`$${this._race.name} has received ${attackPoints} as damage`);
    return 10;
  }
}

export default Character;