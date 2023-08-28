import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { myPokemon } from '../models/myPokemon.models';
import { PIKACHU } from '../utils/myPokemon0';
import { BoxService } from './box.service';
import { TeamService } from './team.service';
import { Mega } from '../utils/megaevolutions';
import { Pokemon } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonBattleService {

  private myPokemonSubject: BehaviorSubject<myPokemon> = new BehaviorSubject<myPokemon>(PIKACHU);
  private rivalPokemonSubject: BehaviorSubject<myPokemon> = new BehaviorSubject<myPokemon>(PIKACHU);  

  myPokemonSubject$ = this.myPokemonSubject.asObservable();
  rivalPokemonSubject$ = this.rivalPokemonSubject.asObservable();

  constructor(private boxService: BoxService, private teamService: TeamService) {}

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

  updatePokemonStats(pokemon: myPokemon, values?: any, type = 'Mine', mega?: Mega): void {
    let poke: myPokemon = pokemon;
    if(mega) {
      poke["pokemon"] = {...pokemon.pokemon, baseStats: mega.stats!}
      poke["ability"] = mega.ability!
    }
    const pk: myPokemon = {
      ...poke,
      ivs: {
        HP: values?.ivHP ?? 0,
        attack: values?.ivAttack ?? 0,
        defense: values?.ivDefense ?? 0,
        spAttack: values?.ivSpAttack ?? 0,
        spDefense: values?.ivSpDefense ?? 0,
        speed: values?.ivSpeed ?? 0,
      },
      evs: {
        HP: values?.evHP ?? 0,
        attack: values?.evAttack ?? 0,
        defense: values?.evDefense ?? 0,
        spAttack: values?.evSpAttack ?? 0,
        spDefense: values?.evSpDefense ?? 0,
        speed: values?.evSpeed ?? 0,
      },
    };
    if (type === 'Mine') {
      this.updateMyPokemon(pk);
    } else {
      this.updateRivalPokemon(pk);
    }
  }

  updatePokemonFull(pokemon: myPokemon, type = 'Mine'): void {
    this.teamService.updatePokemonInTeam(this.teamService.getTeamSelected()._id, pokemon)
    this.boxService.updatePokemon(pokemon.pokemon._id!, pokemon).pipe(take(1)).subscribe()
  }
}
