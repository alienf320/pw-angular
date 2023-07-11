import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { WeaknessService } from 'src/app/services/weakness-service.service';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss'],
})
export class TrainerCardComponent {
  pokemonName!: string;
  pokemons!: Pokemon[];

  constructor(
    private pokemonService: PokemonService,
    private weaknessService: WeaknessService
  ) {}

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
        (pokemon) => {
          this.pokemons = pokemon;
          for (let i = 0; i < this.pokemons.length; i++) {
            this.weaknessService
              .getWeaknesses(this.pokemons[i].type1, this.pokemons[i].type2 ?? '')
              .subscribe(
                (types) => {
                  this.pokemons[i]['weakness'] = types;
                  console.log(this.pokemons[i]['weakness'])

                  // Asignar objeto types a cada pokemon
                  /*                 this.pokemons.forEach(pokemon => {
                  pokemon.types = this.types;
                }); */
                },
                (error) => {
                  console.error(error);
                }
              );
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
