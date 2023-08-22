import { Injectable } from '@angular/core';
import { myPokemon } from '../models/myPokemon.models';
import { TeamMember, Trainer } from '../models/trainer.models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keyForBattle = 'battleComponentState';

  loadStateForBattle(): {yourPokemon: Trainer} | null {
    const savedState = localStorage.getItem(this.keyForBattle);
    if (savedState) {
      const state = JSON.parse(savedState);
      return state
    }
    return null
  }

  saveStateForBattle(myPokemon?: myPokemon, rivalPokemon?: Trainer) {
    const stateToSave = {
      yourPokemon: rivalPokemon,
    };
    localStorage.setItem(this.keyForBattle, JSON.stringify(stateToSave));
  }
}
