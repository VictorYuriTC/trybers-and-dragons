import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character {
  private _race: Race;
  private _archetype: Archetype;

  constructor(
    name: string,
    race = new Elf(name, getRandomInt(1, 10)),
    archetype = new Mage(name),
  ) {
    this._race = race;
    this._archetype = archetype;
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get dexterity() {
    return this._race.dexterity;
  }
}

export default Character;