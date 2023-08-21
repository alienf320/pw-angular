import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError, mergeMap } from 'rxjs';
import { Move } from 'src/app/models/move.models';
import { Team } from 'src/app/models/team.models';
import { MoveService } from 'src/app/services/move.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-egg-moves',
  templateUrl: './egg-moves.component.html',
  styleUrls: ['./egg-moves.component.scss']
})
export class EggMovesComponent implements OnInit {
  moves: Move[] = [];
  errorMessage: string = 'Esto es un error pedorro'; // A property to hold the error message

  constructor(private teamService: TeamService, private moveService: MoveService) {}

  ngOnInit(): void {
    this.teamService.teamPokemonSelected$
      .pipe(
        mergeMap((pk) => {
          return this.moveService.getEggMoves(pk.pokemon.internalName).pipe(
            catchError((error) => {
              this.errorMessage = error;
              console.error('An error occurred:', error);
              this.moves = [];
              return EMPTY; // Return an empty observable to continue the stream
            })
          );
        })
      )
      .subscribe(
        (data) => {
          this.moves = data;
        }
      );
  }
}

