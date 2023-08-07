import { Component } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { myPokemon1, myPokemon2 } from './pokemonDummy';
import { Box, BoxService } from 'src/app/services/box.service';
import { PokemonBattleService } from 'src/app/services/pokemon-battle.service';
import { Router } from '@angular/router';
import { TeamMember, Trainer } from 'src/app/models/trainer.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { forkJoin, map } from 'rxjs';
import { Move } from 'src/app/models/moves.models';
import { MoveService } from 'src/app/services/move.service';
import { Pokemon } from 'src/app/models/pokemon.models';

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

  constructor(
    private boxService: BoxService,
    private battleService: PokemonBattleService,
    private pokemonService: PokemonService,
    private moveService: MoveService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/battle') {
      this.update();
    }
  }

  update() {
    console.log('update');
    this.boxService.getBox().subscribe((data) => {
      this.box = data;
    });
    this.boxService.getAllBox().subscribe((data) => {
      console.log('allBoxes:', data);
      this.allBoxes = data;
    });
  }

  pokemonSelected(event: any) {
    const pokemonName = event.target.value;
    const pk = this.box.find((pk) => pk.pokemon.internalName === pokemonName)!;

    //console.log(pk)
    console.log('Ahí te lo envío', pk);
    this.battleService.updateMyPokemon(pk);
  }

  rivalBoxSelected(event: any) {
    if (event.target.selectedIndex !== 1) {
      this.rivalPokemons = this.allBoxes[event.target.selectedIndex - 1];
    }
    //console.log("RivalBoxSelected", this.rivalPokemons.pokemons)
  }

  pokemonRivalSelected(event: any) {
    const pokemonName = event.target.value;
    const pk = this.rivalPokemons.pokemons.find((pk) => {
      //console.log("cada poke", pk.pokemon.internalName, pokemonName)
      return pk.pokemon.internalName === pokemonName;
    })!;

    //console.log(pk)
    //console.log('Ahí te envío rival', pk)
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
      .getPokemonByName('', pk.name)
      .toPromise();

      if (pk.moves.length === 0) {
        //console.log("Estos deberían ser los moves: ", pokemonData![0].moves)
        moves = this.fillMoves(pokemonData![0], pk.level);
        console.log("Moves completados: ", moves)
      } else {
        for (const move of pk.moves) {
          movePromises.push(this.moveService.getMoveByName(move).toPromise());
        }
  
        const movesData = await Promise.all(movePromises);
        moves = movesData.map((moveArray) => {
          const move = moveArray[0]; // Extract the first element from the array
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
  }

  fillMoves(pokemon: Pokemon, level: number) {
    // Retrieve all moves that the Pokemon can learn by leveling up

    const levelUpMoves = pokemon.moves.filter(
      (moveEntry) => moveEntry.level <= level
    );

    // Sort the moves by level in ascending order
    levelUpMoves.sort((a, b) => a.level - b.level);

    // Get the last four moves (or less if there are fewer than four moves available)
    const lastFourMoves = levelUpMoves.slice(-4);

    // Extract the Move objects from the move entries
    const moves: Move[] = lastFourMoves.map((moveEntry) => moveEntry.move);

    return moves;
  }
}
