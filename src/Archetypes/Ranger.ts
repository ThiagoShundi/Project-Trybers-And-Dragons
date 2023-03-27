import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  private static _numbersInstance = 0;

  constructor(name: string) {
    super(name);

    this._energy = 'stamina';
    Ranger._numbersInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._numbersInstance;
  }
}