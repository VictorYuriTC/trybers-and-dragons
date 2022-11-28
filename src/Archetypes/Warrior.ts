import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType = 'stamina';
  private static _amountOfInstancesCreated = 0;

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static override createdArchetypeInstances(): number {
    this._amountOfInstancesCreated += 1;
    return this._amountOfInstancesCreated;
  }
}

export default Warrior;