import { Component } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { myPokemon1, myPokemon2 } from './pokemonDummy';
import { Box, BoxService } from 'src/app/services/box.service';
import { PokemonBattleService } from 'src/app/services/pokemon-battle.service';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { Move } from 'src/app/models/moves.models';
import { MoveService } from 'src/app/services/move.service';
import { Pokemon } from 'src/app/models/pokemon.models';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team.models';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent {
  myPokemon: myPokemon = myPokemon1;
  yourPokemon: myPokemon = myPokemon2;
  box!: myPokemon[];
  pokemonName!: string;
  allBoxes: Box[] = [];
  rivalPokemons!: { pokemons: myPokemon[] };
  teamSelected!: Team;
  pokemonSelected!: myPokemon;

  constructor(
    private boxService: BoxService,
    private battleService: PokemonBattleService,
    private pokemonService: PokemonService,
    private moveService: MoveService,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/battle') {
      this.update();
    }

    this.teamService.teamSelected$.subscribe( team => {
      this.teamSelected = team;
      this.pokemonSelected = team.pokemons[0];
    })
  }

  update() {
    this.boxService.getBox().subscribe((data) => {
      this.box = data;
    });
    this.boxService.getAllBox().subscribe((data) => {
      //console.log('allBoxes:', data);
      this.allBoxes = data;
    });
  }

  selectPokemon(event: any) {
    const pokemonName = event.target.value;
    const pk = this.box.find((pk) => pk.pokemon.internalName === pokemonName)!;

    this.pokemonSelected = pk;
    this.battleService.updateMyPokemon(pk);
  }

  rivalBoxSelected(event: any) {
    if (event.target.selectedIndex !== 1) {
      this.rivalPokemons = this.allBoxes[event.target.selectedIndex - 1];
    }
    //console.log("RivalBoxSelected", this.rivalPokemons.pokemons)
  }

  pokemonRivalSelected(event?: any, index = 0) {
    let pk;
    if(event) {
      const pokemonName = event.target.value;
      pk = this.rivalPokemons.pokemons.find((pk) => {
        //console.log("cada poke", pk.pokemon.internalName, pokemonName)
        return pk.pokemon.internalName === pokemonName;
      })!;      
    } else {
      pk = this.rivalPokemons.pokemons[index]
    }

    //console.log(pk)
    console.log('Ahí te envío rival', pk)
    this.battleService.updateRivalPokemon(pk);
  }

  async loadTrainer(event: any) {
    const team = (event as Trainer).team;
    let box: myPokemon[] = [];

    for (const pk of team) {
      let pokemonFull: myPokemon;
      let moves: Move[] = [];
      const movePromises: Promise<Move[]>[] = [];
      
      const pokemonData = await this.pokemonService
      .getPokemonByName('', pk.name, true)
      .toPromise();

      if (pk.moves.length === 0) {
        //console.log("Estos deberían ser los moves: ", pokemonData![0].moves)
        moves = this.fillMoves(pokemonData![0], pk.level);
        //console.log("Moves completados: ", moves)
      } else {
        for (const move of pk.moves) {
          if(move.length > 2) {
            movePromises.push(this.moveService.getMoveByName(move).toPromise());
          }
        }
  
        const movesData = await Promise.all(movePromises);
        moves = movesData.map((moveArray) => {
          const move = moveArray[0];
          return move;
        });

      }

      if (pokemonData && pokemonData.length > 0) {
        pokemonFull = {
          pokemon: pokemonData[0] as Pokemon,
          level: pk.level,
          moves: moves,
          _id: `${pk._id}`,
        };
        //console.log('pokemonFull', pokemonFull);
        box.push(pokemonFull);
      }
    }

    this.rivalPokemons = { pokemons: box };
    this.pokemonRivalSelected()
  }

  async loadMyPokemon(pokemon: myPokemon) {
    this.battleService.updateMyPokemon(pokemon)
  }

  async loadRivalPokemon(pokemon: Pokemon) {
    const fullPokemon: myPokemon = {
      pokemon: pokemon,
      moves: []
    }
    this.battleService.updateRivalPokemon(fullPokemon);
  }

  fillMoves(pokemon: Pokemon, level: number) {
    const levelUpMoves = pokemon.moves.filter(
      (moveEntry) => moveEntry.level <= level
    );

    levelUpMoves.sort((a, b) => a.level - b.level);

    const lastFourMoves = levelUpMoves.slice(-4);
    const moves: Move[] = lastFourMoves.map((moveEntry) => moveEntry.move);

    return moves;
  }
}
