import Archetype from '../Races/Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  private static _numbersInstance = 0;

  constructor(name: string) {
    super(name);

    this._energy = 'stamina';
    Warrior._numbersInstance += 1;
  }

  public get energy(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._numbersInstance;
  }
}