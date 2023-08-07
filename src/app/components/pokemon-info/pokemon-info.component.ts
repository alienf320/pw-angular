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
          console.log('evos: ', pokemon[0].evolutions)
          this.pokemons[column] = pokemon;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.pokemons[column] = [];
    }
  }

  addColumn() {
    this.columns++;
  }

  openEvo(evo: string) {
    if(this.columns < 3) {
      this.addColumn()
      this.pokemonNames[this.columns -1] = evo;
      this.searchPokemon(this.columns -1)
    }
  }

  getColumnNumbers(): number[] {
    return Array(this.columns).fill(0).map((_, index) => index);
  }
}
