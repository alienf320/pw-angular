import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { myPokemon } from '../models/myPokemon.models';
import { PIKACHU } from '../utils/myPokemon0';

@Injectable({
  providedIn: 'root'
})
export class PokemonBattleService {

  private myPokemonSubject: BehaviorSubject<myPokemon> = new BehaviorSubject<myPokemon>(PIKACHU);
  private rivalPokemonSubject: BehaviorSubject<myPokemon> = new BehaviorSubject<myPokemon>(PIKACHU);  

  getRivalPokemon(): Observable<myPokemon> {
    return this.rivalPokemonSubject.asObservable();
  }

  updateRivalPokemon(pokemon: myPokemon) {
    this.rivalPokemonSubject.next(pokemon);
  }
  
  getMyPokemon(): Observable<myPokemon> {
    return this.myPokemonSubject.asObservable();
  }

  updateMyPokemon(pokemon: myPokemon) {
    this.myPokemonSubject.next(pokemon);
  }
}
