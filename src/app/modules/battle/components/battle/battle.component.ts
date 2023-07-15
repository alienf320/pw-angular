import { Component, OnInit } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { myPokemon1, myPokemon2 } from './pokemonDummy';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  myPokemon: myPokemon = myPokemon1;
  yourPokemon: myPokemon = myPokemon2;

  constructor() { }

  ngOnInit(): void {
  }

}
