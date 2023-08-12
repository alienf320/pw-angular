import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { BoxService } from 'src/app/services/box.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { EditStatsOverlayComponent } from '../edit-stats-overlay/edit-stats-overlay.component';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonBoxDetailsComponent } from '../pokemon-box-details/pokemon-box-details.component';


@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss']
})
export class MyPokemonsComponent implements OnInit {
  pokemonName: string = "aron";
  pokemons!: string[];
  pokemonsFiltered!: Pokemon[];
  box!: myPokemon[]
  overlayRef: OverlayRef | null = null;
  pokemonSelected!: Pokemon;


  constructor(
    private pokemonService: PokemonService,
    private boxService: BoxService,
    private overlay: Overlay
  ) {}

  ngOnInit() {
    this.searchPokemon()
    this.loadBox()
  }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
        (pokemon) => {
          console.log(pokemon)
          this.pokemonsFiltered = pokemon;
          this.pokemons = pokemon.map( i => i.internalName);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  loadBox() {
    this.boxService.getBox().subscribe(
      box => {
        console.log('box', box)
        this.box = box
      }
    )
  }

  addToBox(event: any) {
    const pokemonName = event.target.innerText;
    const pokemonFull = this.pokemonsFiltered.find(p => p.internalName === pokemonName)
    this.pokemonSelected = pokemonFull!
  }

  
}
