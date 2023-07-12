import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { WeaknessService } from 'src/app/services/weakness-service.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
  pokemonName: string = "aron";
  pokemons!: Pokemon[];

  constructor(
    private pokemonService: PokemonService,
    private weaknessService: WeaknessService
  ) {}

  ngOnInit() {
    this.searchPokemon()
  }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
        (pokemon) => {
          this.pokemons = pokemon;
          /* for (let i = 0; i < this.pokemons.length; i++) {
            this.weaknessService
              .getWeaknesses(this.pokemons[i].type1, this.pokemons[i].type2 ?? '')
              .subscribe(
                (types) => {
                  this.pokemons[i]['weakness'] = types;
                  console.log(this.pokemons[i]['weakness'])

                  // Asignar objeto types a cada pokemon
                },
                (error) => {
                  console.error(error);
                }
              );
          } */
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
