import { Move } from "./move.models";
import { Pokemon } from "./pokemon.models";

export interface myPokemon {
  pokemon: Pokemon,
  level?: number,
  nature?: string,
  ability?: string,
  moves: Move[]
  evs?: {
    HP: number,
    attack: number,
    defense: number,
    speed: number,
    spAttack: number,
    spDefense: number
  },
  ivs?: {
    HP: number,
    attack: number,
    defense: number,
    speed: number,
    spAttack: number,
    spDefense: number
  },
  _id: string
}