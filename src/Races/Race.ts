abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) { }

  static get createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name():string { return this._name; }

  get dexterity():number { return this._dexterity; }
}

export default Race;