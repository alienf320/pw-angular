import { Component, Input, OnInit } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Team } from 'src/app/models/team.models';
import { TM } from 'src/app/models/tm.models';
import { TeamService } from 'src/app/services/team.service';
import { TmsService } from 'src/app/services/tms.service';

@Component({
  selector: 'app-tms-list',
  templateUrl: './tms-list.component.html',
  styleUrls: ['./tms-list.component.scss'],
})
export class TMsListComponent implements OnInit {
  teamSelected!: Team;
  pokemonSelected!: myPokemon;
  moveSelected: string = '';
  tms: TM[] = [];
  canLearn: {
    [key: string]: boolean;
  } = {};

  constructor(
    private tmsService: TmsService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.tmsService.tmsInBag$.subscribe((data) => {
      //console.log("Tms in bag: ", data[0])
      this.tms = data;
    });
    this.teamService.teamSelected$.subscribe((data) => {
      this.teamSelected = data;
      this.teamSelected.pokemons.forEach((pk) => {
        this.canLearn[pk._id as keyof Object] = false;
      });
    });
  }

  onTMSelected(tm: TM) {
    //console.log("Tms: ", tm)
    this.moveSelected = tm.move.displayName
    this.tmsService
      .CanTeamLearnTm(this.teamSelected._id, tm._id!)
      .subscribe((data) => {
        //console.log("Pueden aprender esta TM?: ", data)
        this.canLearn = data;
      });
  }
}
