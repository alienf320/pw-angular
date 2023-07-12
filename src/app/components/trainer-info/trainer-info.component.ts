import { Component, Input, OnInit } from '@angular/core';
import { TeamMember, Trainer } from 'src/app/models/trainer.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.scss']
})
export class TrainerInfoComponent implements OnInit {

  @Input() trainer!: Trainer
  team!: TeamMember

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getTeamPokemonTypes();
  }

  getTeamPokemonTypes(): void {
    for (const teamMember of this.trainer.team) {
      this.pokemonService.getPokemonByName('', teamMember.name)
        .subscribe(
          (pokemonDetails: any) => {
            //console.log('details:', pokemonDetails)
            teamMember.type1 = pokemonDetails[0].type1;
            teamMember.type2 = pokemonDetails[0].type2;
            console.log(teamMember.type1, teamMember.type2)
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
}
