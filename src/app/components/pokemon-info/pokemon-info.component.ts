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
          console.log(pokemon)
          this.pokemons = pokemon;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
