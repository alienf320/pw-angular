import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Team } from 'src/app/models/team.models';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  @Input() team!: Team;
  @Input() pokemonSelected!: myPokemon;
  @Input() vertical = false;
  @Input() editable = false;
  @Input() position: 'left' | 'right' = 'left';
  @Output() selectionEvent: EventEmitter<myPokemon> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<myPokemon> = new EventEmitter();
  isComponentVisible = false;

  constructor(private teamService: TeamService) {}
  
  ngOnInit(): void {
    this.isComponentVisible = !this.vertical
  }

  toggleComponentVisibility() {
    if(this.vertical) { 
      this.isComponentVisible = !this.isComponentVisible;
    }
  }

  selectPokemon(pk: myPokemon) {
    this.pokemonSelected = pk
    this.selectionEvent.emit(pk)
  }

  onDelete(pk: myPokemon) {
    console.log('Quiero borrar este pokemon: ', pk)
    this.deleteEvent.emit(pk)
  }
}
