import { myPokemon } from "./myPokemon.models";

export interface Team {
  name: string;
  box?: string;
  pokemons: myPokemon[];
}