import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { myPokemon } from '../models/myPokemon.models';
import { PIKACHU } from '../utils/myPokemon0';
import { BoxService } from './box.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonBattleService {

  private myPokemonSubject: BehaviorSubject<myPokemon> = new BehaviorSubject<myPokemon>(PIKACHU);
  private rivalPokemonSubject: BehaviorSubject<myPokemon> = new BehaviorSubject<myPokemon>(PIKACHU);  

  constructor(private boxService: BoxService) {}

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

  updatePokemonBasic(pokemon: myPokemon, values?: any, type = 'Mine'): void {
    const pk: myPokemon = {
      ...pokemon,
      level: values.level,
      nature: values.nature,
    }
    if (type === 'Mine') {
      this.updateMyPokemon(pk);
    } else {
      this.updateRivalPokemon(pk);
    }
  }

  updatePokemonStats(pokemon: myPokemon, values?: any, type = 'Mine'): void {
    const pk: myPokemon = {
      ...pokemon,
      ivs: {
        HP: values.ivHP,
        attack: values.ivAttack,
        defense: values.ivDefense,
        spAttack: values.ivSpAttack,
        spDefense: values.ivSpDefense,
        speed: values.ivSpeed,
      },
      evs: {
        HP: values.evHP,
        attack: values.evAttack,
        defense: values.evDefense,
        spAttack: values.evSpAttack,
        spDefense: values.evSpDefense,
        speed: values.evSpeed,
      },
    };
    if (type === 'Mine') {
      this.updateMyPokemon(pk);
    } else {
      this.updateRivalPokemon(pk);
    }
  }

  updatePokemonFull(pokemon: myPokemon, type = 'Mine'): void {
    this.boxService.updatePokemon(pokemon._id!, pokemon).pipe(take(1)).subscribe()
  }
}
