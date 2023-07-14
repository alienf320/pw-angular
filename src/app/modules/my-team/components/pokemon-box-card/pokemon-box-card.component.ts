import { Component, Input, OnInit } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';

@Component({
  selector: 'app-pokemon-box-card',
  templateUrl: './pokemon-box-card.component.html',
  styleUrls: ['./pokemon-box-card.component.scss']
})
export class PokemonBoxCardComponent {
  @Input() myPokemon!: myPokemon

  modifyPokemon() {

  }

  deletePokemon() {

  }

}
