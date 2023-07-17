import { Component, OnInit } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { myPokemon1, myPokemon2 } from './pokemonDummy';
import { BoxService } from 'src/app/services/box.service';
import { POKEMON_INTERNAL_NAMES } from 'src/app/utils/pokemonNames';
import { PokemonBattleService } from 'src/app/services/pokemon-battle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

  myPokemon: myPokemon = myPokemon1;
  yourPokemon: myPokemon = myPokemon2;
  box!: myPokemon[];
  pokemonName!: string;
  allBoxes: {pokemons: myPokemon[]}[] = []
  rivalPokemons!: {pokemons: myPokemon[]}

  constructor(private boxService: BoxService, private battleService: PokemonBattleService, private router: Router) { }

  ngOnInit(): void {    
    //this.update();
    
    const currentRoute = this.router.url
    if (currentRoute === '/battle') {
      this.update();
    }
  }

  update() {
    this.boxService.getBox().subscribe( data => {
      this.box = data;
    })
    this.boxService.getAllBox().subscribe( data => {
      console.log("allBoxes:", data)
      this.allBoxes = data;
    })
  }

  pokemonSelected(event: any) {
    const pokemonName = event.target.value;
    const pk = this.box.find( pk => pk.pokemon.internalName === pokemonName)!

    //console.log(pk)
    console.log('Ahí te lo envío', pk)
    this.battleService.updateMyPokemon(pk)
  }

  rivalBoxSelected(event: any) {
    //console.log("IMPORTANT", this.allBoxes[event.target.selectedIndex])
    this.rivalPokemons = this.allBoxes[event.target.selectedIndex]
    //console.log("RivalBoxSelected", this.rivalPokemons)
  }

}
