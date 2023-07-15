import { Component, Input, OnInit } from '@angular/core';
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
  collapsed = false;
  typesWR!: Resistances

  constructor(private weaknessService: WeaknessService) {}

  ngOnInit() {
    console.log('Pokemon-card', this.pokemon)
    if(this.typesWR) {
      this.weaknessService.getWeaknesses(this.pokemon.type1, this.pokemon.type2).subscribe( data => {
        this.typesWR = data;
      })
    }
  }

  extend() {
    this.collapsed = !this.collapsed
  }
}
