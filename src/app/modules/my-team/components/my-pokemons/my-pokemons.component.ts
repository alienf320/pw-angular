import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { Pokemon } from 'src/app/models/pokemon.models';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team.models';
import { take } from 'rxjs';
import { Box, BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss'],
})
export class MyPokemonsComponent implements OnInit {
  pokemonName: string = 'aron';
  pokemons!: string[];
  pokemonsFiltered!: Pokemon[];
  box!: myPokemon[];
  boxes: Box[] = [];
  teams!: Team[];
  overlayRef: OverlayRef | null = null;
  pokemonSelected!: Pokemon;
  inputVisible = false;
  inputValue = '';
  selectedTeam!: Team;

  constructor(private pokemonService: PokemonService, private teamService: TeamService, private boxService: BoxService) {}

  ngOnInit() {
    this.searchPokemon();
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.teams$.subscribe( data => {
      this.teams = data;
      this.teamService.setTeamSelected(data[0])
    })

    this.teamService.teamSelected$.subscribe( t => {
      this.selectedTeam = t;
    })

    this.boxService.getAllBox().subscribe( data => {
      this.boxes = data
    })
  }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
        (pokemon) => {
          //console.log(pokemon);
          this.pokemonsFiltered = pokemon;
          this.pokemons = pokemon.map((i) => i.internalName);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  addToBox(event: any) {
    const boxId = this.boxService.getBox()
    const pokemonName = event.target.innerText;
    const pokemonFull = this.pokemonsFiltered.find(
      (p) => p.internalName === pokemonName
    );
    this.pokemonSelected = pokemonFull!;
    this.boxService.savePokemon(pokemonName, boxId._id!, {pokemon: pokemonFull}).pipe(take(1)).subscribe()
  }

  selectTeam(team: Team) {
    this.selectedTeam = team;
    this.teamService.setTeamSelected(team);
  }

  deletePokemonFromTeam(pk: myPokemon) {
    this.teamService.deletePokemonFromTeam(pk)
  }

  showInput() {
    this.inputVisible = true;
  }

  hideInput() {
    this.inputVisible = false;
  }

  onInputEnter() {
    if (this.inputValue.trim() !== '') {
      this.teamService.createTeam(this.inputValue.trim()).pipe(take(1)).subscribe()
      this.inputValue = '';
      this.hideInput();
    }
  }
}
