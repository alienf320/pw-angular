import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Team } from 'src/app/models/team.models';
import { TM } from 'src/app/models/tm.models';
import { TeamService } from 'src/app/services/team.service';
import { TmsService } from 'src/app/services/tms.service';
import { pokemonTypes } from 'src/app/utils/colors';

@Component({
  selector: 'app-tms',
  templateUrl: './tms.component.html',
  styleUrls: ['./tms.component.scss'],
})
export class TMsComponent implements OnInit {
  team!: Team;
  teams: Team[] = [];
  learnableTMs!: TM[];
  tmInput = '';

  constructor(
    private teamService: TeamService,
    private tmsService: TmsService
  ) {
    
  }

  ngOnInit(): void {
    this.teamService.teamSelected$.subscribe((data) => {
      this.team = data;
    });
    this.teamService.getAllTeams().subscribe(data => {
      this.teams = data;
    })
  }

  addToBag() {
    this.tmsService.addTMToBag(this.tmInput);
    this.tmInput = '';
  }

  pokemonSelected(pk: myPokemon) {
    this.teamService.setPokemonInTeam(pk)
  }

  selectTeam(event: any) {
    const teamId = event.target.value
    const aux = this.teams.find(el => el._id === teamId);
    this.team = aux!
    this.teamService.setTeamSelected(aux!)
  }


}
