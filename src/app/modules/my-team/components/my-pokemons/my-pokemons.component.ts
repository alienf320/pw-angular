import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { BoxService } from 'src/app/services/box.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';


@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss']
})
export class MyPokemonsComponent implements OnInit {
  pokemonName: string = "aron";
  pokemons!: string[];
  box!: myPokemon[]


  constructor(
    private pokemonService: PokemonService,
    private boxService: BoxService
  ) {}

  ngOnInit() {
    this.searchPokemon()
    this.loadBox()
  }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).pipe(map(p => p.map( i => i.internalName))).subscribe(
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
    this.boxService.savePokemon(pokemonName).subscribe( data => {
      console.log('data', data)
      this.box = data
    })

  }
}
