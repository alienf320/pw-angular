export interface Move {
  _id?: string;
  id: number;
  name: string;
  displayName: string;
  power: number;
  accuracy: number;
  type: string;
  category: string;
  pp: number;
  target: number;
  effectChance: number;
  description: string;
}