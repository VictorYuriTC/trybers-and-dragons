import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _amountOfInstancesCreated = 0;
  
  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    this._amountOfInstancesCreated += 1;
    return this._amountOfInstancesCreated;
  }
}

export default Elf;