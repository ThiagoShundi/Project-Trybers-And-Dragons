import Archetype from '../Races/Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energy: EnergyType;
  private static _numbersInstance = 0;

  constructor(name: string) {
    super(name);

    this._energy = 'mana';
    Mage._numbersInstance += 1;
  }

  public get energy(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    return Mage._numbersInstance;
  }
}