import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Team } from 'src/app/models/team.models';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  @Input() team!: Team;
  @Input() pokemonSelected!: myPokemon;
  @Input() vertical = false;
  @Output() selectionEvent: EventEmitter<myPokemon> = new EventEmitter();
  isComponentVisible = false;

  
  constructor() { }
  
  ngOnInit(): void {
    this.isComponentVisible = !this.vertical
  }

  toggleComponentVisibility() {
    if(this.vertical) { 
      this.isComponentVisible = !this.isComponentVisible;
    }
  }

  selectPokemon(pk: myPokemon) {
    console.log('Este es el team que tengo: ', this.team)
    this.selectionEvent.emit(pk)
  }

}
