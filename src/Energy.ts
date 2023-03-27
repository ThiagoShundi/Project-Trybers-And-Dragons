export default interface Enegery {
  type_: EnergyType;
  amount: number;
}

export type EnergyType = 'mana' | 'stamina';