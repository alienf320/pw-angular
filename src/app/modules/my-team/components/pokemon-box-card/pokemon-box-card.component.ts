import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Box, BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-pokemon-box-card',
  templateUrl: './pokemon-box-card.component.html',
  styleUrls: ['./pokemon-box-card.component.scss']
})
export class PokemonBoxCardComponent implements OnInit{

  @Input() myPokemon!: myPokemon
  @Input() type: 'Default' | 'Small' = 'Default';
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() modify: EventEmitter<any> = new EventEmitter<any>();
  @Output() details: EventEmitter<myPokemon> = new EventEmitter<myPokemon>();
  @Output() add: EventEmitter<myPokemon> = new EventEmitter<myPokemon>();
  @Output() move: EventEmitter<myPokemon> = new EventEmitter<myPokemon>();

  boxes: Box[] = [];

  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxService.getAllBox().subscribe(data => {
      this.boxes = data;
    })
  }

  deletePokemon() {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      this.delete.emit(this.myPokemon._id);
    }
  }

  modifyPokemon() {
    this.modify.emit(this.myPokemon);
  }
  
  openDetails() {
    this.details.emit(this.myPokemon);
  }

  addPokemon() {
    this.add.emit(this.myPokemon)
  }

  movePokemon(box: Box) {
    this.boxService.movePokemonToBox(box, this.myPokemon)
  }
}
