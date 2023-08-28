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
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
  recentPokemon: Team = {_id: '1', name: 'recent', pokemons: []};
  teams: Team[] = [];
  teamSelected!: Team;
  pokemonSelected!: myPokemon;

  constructor(
    private boxService: BoxService,
    private battleService: PokemonBattleService,
    private pokemonService: PokemonService,
    private moveService: MoveService,
    private teamService: TeamService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if (currentRoute === '/battle') {
      this.update();
    }

    this.teamService.teams$.subscribe (teams => {
      this.teams = teams;
    })

    this.teamService.teamSelected$.subscribe( team => {
      this.teamSelected = team;
      console.log("Battle component - ngOnInit - team: ", team)
      this.pokemonSelected = team.pokemons[0];
      // if(!this.pokemonSelected) {
      //   setTimeout(() => {
      //     this.battleService.updateMyPokemon(team.pokemons[0])        
      //   }, 0);
      // }
    })

    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const data = this.localStorageService.loadStateForBattle()
    console.log('Trainer loaded?: ', data?.yourPokemon)
    if(data?.yourPokemon) {
      this.loadTrainer(undefined, data.yourPokemon)
    }
    if(data?.recentPokemon) {
      this.recentPokemon = data.recentPokemon;
    }
  }

  update() {
    this.boxService.currentBox$.subscribe((data) => {
      this.box = data.pokemons;
    });
    this.boxService.getAllBox().subscribe((data) => {
      //console.log('allBoxes:', data);
      this.allBoxes = data;
    });
  }

  selectPokemon(event: any, pokemon?: myPokemon) {
    const pokemonName = event.target.value;
    const pk = this.box.find((pk) => pk.pokemon.internalName === pokemonName)!;

    //console.log("Acá cambia el pokemon seleccionado: ", this.pokemonSelected)
    this.pokemonSelected = pk;
      //console.log("Cambió: ", this.pokemonSelected)
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
    this.recentPokemon.pokemons.push(pk)
    this.battleService.updateRivalPokemon(pk);
  }

  selectTeam(event: any) {
    const teamId = event.target.value;
    const team = this.teams.find( t => t._id === teamId)
    //console.log('selecTeam: ', this.teams, team)
    this.teamService.setTeamSelected(team!)
  }

  async loadTrainer(event?: Trainer, dataStorage?: Trainer) {
    let trainer;
    if(event) {
      this.localStorageService.saveStateForBattle(undefined, event)
    }
    if(dataStorage) {
      trainer = dataStorage
    } else {
      trainer = event
    }
    console.log("team de trainer: ", trainer!.team)
    const team = (trainer as Trainer).team;
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
          item: pk.item,
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
    this.pokemonSelected = pokemon;
    this.battleService.updateMyPokemon(pokemon)
  }

  async loadRivalPokemon(pokemon: Pokemon) {
    const fullPokemon: myPokemon = {
      pokemon: pokemon,
      moves: []
    }
    this.battleService.updateRivalPokemon(fullPokemon);
  }

  addRecentPokemon(event: myPokemon) {
    if(this.recentPokemon.pokemons.length === 6) {
      this.recentPokemon.pokemons.shift()
    }
    this.recentPokemon.pokemons.push(event);
    this.localStorageService.saveStateForRivalBattle(this.recentPokemon)
  }

  loadRecentPokemon(event: myPokemon) {
    this.battleService.updateRivalPokemon(event)
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
