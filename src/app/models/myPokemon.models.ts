import { Pokemon } from "./pokemon.models";

export interface myPokemon {
  pokemon: Pokemon,
  level?: number,
  nature?: string,
  ability?: string,
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
  },
  _id: string
}