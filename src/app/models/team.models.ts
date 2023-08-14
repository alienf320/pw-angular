import { myPokemon } from "./myPokemon.models";

export interface Team {
  _id: string;
  name: string;
  box?: string;
  pokemons: myPokemon[];
}