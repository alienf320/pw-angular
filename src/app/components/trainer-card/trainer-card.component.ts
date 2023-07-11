import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent {
  pokemonName!: string;
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
        (pokemon) => {
          console.log('1', pokemon.length)
          this.pokemons = pokemon;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
