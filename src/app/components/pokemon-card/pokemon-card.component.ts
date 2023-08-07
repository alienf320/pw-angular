import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';
import { Resistances } from 'src/app/models/resistances.model';
import { WeaknessService } from 'src/app/services/weakness-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  @Output() evo = new EventEmitter<string>();
  collapsed = false;
  typesWR!: Resistances

  constructor(private weaknessService: WeaknessService) {}

  ngOnInit() {
    if(this.typesWR) {
      this.weaknessService.getWeaknesses(this.pokemon.type1, this.pokemon.type2).subscribe( data => {
        this.typesWR = data;
      })
    }
  }

  extend() {
    this.collapsed = !this.collapsed
  }

  lookFor(evolution: string) {
    this.evo.emit(evolution)
  }
}
