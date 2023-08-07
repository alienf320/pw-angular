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
  pokemonNames: string[] = ["", "", ""]; // Array to store the three input values
  pokemons: Pokemon[][] = [[], [], []]; // Array to store the results of the three requests
  columns = 1;

  constructor(
    private pokemonService: PokemonService,
    private weaknessService: WeaknessService
  ) {}

  ngOnInit() {
    this.searchPokemon(1)
  }

  searchPokemon(column: number) {
    if (this.pokemonNames[column]) {
      this.pokemonService.getPokemonByName(this.pokemonNames[column]).subscribe(
        (pokemon) => {
          console.log(pokemon);
          this.pokemons[column] = pokemon; // Store the result in the corresponding array
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.pokemons[column] = []; // If input is empty, clear the corresponding array
    }
  }

  addColumn() {
    this.columns++;
  }
}
