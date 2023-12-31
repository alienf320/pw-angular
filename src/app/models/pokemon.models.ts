import { Move } from "./moves.models";
import { Resistances } from "./resistances.model";

export interface Pokemon {
  _id: string;
  name: string;
  internalName: string;
  type1: string;
  type2: string;
  baseStats: number[];
  genderRate: string;
  growthRate: string;
  baseExp: number;
  effortPoints: number[];
  rareness: number;
  happiness: number;
  abilities: string[];
  hiddenAbility: string;
  moves: {
    level: number;
    move: Move;
    _id: string;
  }[];
  eggMoves: string[];
  compatibility: string[];
  stepsToHatch: number;
  height: number;
  weight: number;
  color: string;
  habitat: string;
  kind: string;
  pokedex: string;
  battlerPlayerY: number;
  battlerEnemyY: number;
  battlerAltitude: number;
  evolutions: {
    to: string;
    method: string;
    parameter: string;
    _id: string;
  }[];
  __v: number;
  weakness?: Resistances,
  level?: number,
  nature?: string,
  evs?: {
    attack: number,
    defend: number,
    speed: number,
    spattack: number,
    spdefend: number
  },
  ivs?: {
    attack: number,
    defend: number,
    speed: number,
    spattack: number,
    spdefend: number
  }
}
