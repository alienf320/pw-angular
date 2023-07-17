import { Component, OnInit } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { myPokemon1, myPokemon2 } from './pokemonDummy';
import { BoxService } from 'src/app/services/box.service';
import { POKEMON_INTERNAL_NAMES } from 'src/app/utils/pokemonNames';
import { PokemonBattleService } from 'src/app/services/pokemon-battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  myPokemon: myPokemon = myPokemon1;
  yourPokemon: myPokemon = myPokemon2;
  box!: myPokemon[];
  pokemonName!: string;

  constructor(private boxService: BoxService, private battleService: PokemonBattleService) { }

  ngOnInit(): void {
    this.boxService.getBox().subscribe( data => {
      this.box = data;
    })
  }

  pokemonSelected(event: any) {
    const pokemonName = event.target.value;
    const pk = this.box.find( pk => pk.pokemon.internalName === pokemonName)!

    //console.log(pk)
    console.log('Ahí te lo envío', pk)
    this.battleService.updateMyPokemon(pk)
  }

}
