import { Injectable } from '@angular/core';
import { myPokemon } from '../models/myPokemon.models';
import { TeamMember, Trainer } from '../models/trainer.models';
import { Team } from '../models/team.models';

interface SaveState {yourPokemon?: Trainer | null, recentPokemon?: Team}
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keyForBattle = 'battleComponentState';
  private keyForRivalBattle = 'battleRivalComponentState';
  saveState!: SaveState

  loadStateForBattle(): SaveState | null{
    this.saveState = JSON.parse(localStorage.getItem(this.keyForBattle) as string) as SaveState;
    console.log('loadStateForBattle', this.saveState)
    if (this.saveState) {
      const state = this.saveState;
      return state
    }
    return null
  }

  saveStateForBattle(myPokemon?: myPokemon, rivalPokemon?: Trainer) {
    // console.log('saveStateForBattle')
    if(!this.saveState) {
      this.saveState = {yourPokemon: rivalPokemon!}
    } else if(rivalPokemon) {
      this.saveState.yourPokemon = rivalPokemon;
    }
    localStorage.setItem(this.keyForBattle, JSON.stringify(this.saveState));
  }

  loadStateForRivalBattle(): {yourPokemon: Trainer} | null {
    const savedState = localStorage.getItem(this.keyForBattle);
    if (savedState) {
      const state = JSON.parse(savedState);
      return state
    }
    return null
  }

  saveStateForRivalBattle(recentPokemons: Team) {
    // console.log('saveStateForRivalBattle')
    if(!this.saveState) {
      this.saveState = {recentPokemon: recentPokemons}
    } else {
      this.saveState.recentPokemon = recentPokemons;
    }
    localStorage.setItem(this.keyForBattle, JSON.stringify(this.saveState));
  }
}
