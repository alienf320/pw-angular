import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';

@Component({
  selector: 'app-pokemon-box-card',
  templateUrl: './pokemon-box-card.component.html',
  styleUrls: ['./pokemon-box-card.component.scss']
})
export class PokemonBoxCardComponent {
  @Input() myPokemon!: myPokemon
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() modify: EventEmitter<any> = new EventEmitter<any>();

  deletePokemon() {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      this.delete.emit(this.myPokemon);
    }
  }

  modifyPokemon() {
    this.modify.emit(this.myPokemon);
  }
}
