import { Component, OnInit } from '@angular/core';
import { EMPTY, catchError, mergeMap } from 'rxjs';
import { Move } from 'src/app/models/move.models';
import { Pokemon } from 'src/app/models/pokemon.models';
import { EncounterService } from 'src/app/services/encounter.service';
import { MoveService } from 'src/app/services/move.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-egg-moves',
  templateUrl: './egg-moves.component.html',
  styleUrls: ['./egg-moves.component.scss'],
})
export class EggMovesComponent implements OnInit {
  moves: Move[] = [];
  pokemonCompatible: Pokemon[] = [];
  pokemonSelected!: Pokemon;
  transformedData!: TransformedPokemon[];
  errorMessage: string = 'Esto es un error pedorro';
  result = [];

  constructor(
    private teamService: TeamService,
    private moveService: MoveService,
    private encounterService: EncounterService
  ) {}

  ngOnInit(): void {
    this.teamService.teamPokemonSelected$
      .pipe(
        mergeMap((pk) => {
          this.pokemonSelected = pk.pokemon;
          return this.moveService.getEggMoves(pk.pokemon.internalName).pipe(
            catchError((error) => {
              this.errorMessage = error;
              console.error('An error occurred:', error);
              this.moves = [];
              return EMPTY;
            })
          );
        })
      )
      .subscribe((data) => {
        this.moves = data;
      });
  }

  onMoveSelection(move: Move) {
    this.moveService
      .getEggMovesCompatibility(move.name, this.pokemonSelected.compatibility)
      .subscribe((data) => {
        this.pokemonCompatible = data;
        this.transformedData = data.map((pk) => {
          return {
            pokemon: pk.internalName,
            encounter: this.encounterService.findEncounter(pk.internalName),            
            moves: pk.moves
              .filter((m) => m.move.name === move.name)
              .map((move) => ({
                level: move.level,
                name: move.move.name,
              })),
          };
        });
        //console.log('trans: ', this.transformedData)
      });
  }
}

type TransformedPokemon = {
  pokemon: string;
  encounter: {pokemon: string, encounter: string[]}[];
  moves: {
    level: number;
    name: string;
  }[];
};

// let newObj: { [encounterName: string]: string[] } = {};
// // Transformar los datos de ENCOUNTERS
//  ENCOUNTERS.forEach((location) => {
//   const locationName = location.location;

//   for (const encounterType in location) {
//     if (
//       encounterType !== 'location' &&
//       Array.isArray(location[encounterType])
//     ) {
//       const encounters = location[encounterType] as Encounter[];
//       encounters.forEach((encounter) => {
//         if (!newObj[encounter.name as keyof Object]) {
//           newObj[encounter.name.toString().toLowerCase()] = [locationName + ' - ' + encounterType];
//         } else {
//           newObj[encounter.name.toString().toLowerCase() as keyof Object].push(
//             locationName + ' - ' + encounterType
//           );
//         }
//       });
//     }
//   }
// });

// // Resultado transformado
// console.log('Y esto: ', JSON.stringify(newObj));
