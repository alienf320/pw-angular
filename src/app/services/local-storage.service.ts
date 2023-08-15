import { Injectable } from '@angular/core';
import { myPokemon } from '../models/myPokemon.models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private keyForBattle = 'battleComponentState';

  loadStateForBattle(): {yourPokemon: myPokemon} | null {
    const savedState = localStorage.getItem(this.keyForBattle);
    if (savedState) {
      const state = JSON.parse(savedState);
      return state
    }
    return null
  }

  saveStateForBattle(myPokemon?: myPokemon, rivalPokemon?: myPokemon) {
    const stateToSave = {
      yourPokemon: rivalPokemon,
    };
    localStorage.setItem(this.keyForBattle, JSON.stringify(stateToSave));
  }
}
