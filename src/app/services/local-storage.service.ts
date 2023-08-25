import { Injectable } from '@angular/core';
import { myPokemon } from '../models/myPokemon.models';
import { TeamMember, Trainer } from '../models/trainer.models';
import { Team } from '../models/team.models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keyForBattle = 'battleComponentState';
  private keyForRivalBattle = 'battleRivalComponentState';
  saveState!: {yourPokemon?: Trainer | null, recentPokemon?: Team}

  loadStateForBattle(): {yourPokemon: Trainer, recentPokemon: Team} | null {
    const savedState = localStorage.getItem(this.keyForBattle);
    if (savedState) {
      const state = JSON.parse(savedState);
      return state
    }
    return null
  }

  saveStateForBattle(myPokemon?: myPokemon, rivalPokemon?: Trainer) {
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
    if(!this.saveState) {
      this.saveState = {recentPokemon: recentPokemons}
    } else {
      this.saveState.recentPokemon = recentPokemons;
    }
    localStorage.setItem(this.keyForBattle, JSON.stringify(this.saveState));
  }
}
