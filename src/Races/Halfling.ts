import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _amountOfInstancesCreated = 0;
  
  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    this._amountOfInstancesCreated += 1;
    return this._amountOfInstancesCreated;
  }
}

export default Halfling;