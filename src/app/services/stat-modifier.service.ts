import { StmtModifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatModifierService {
  private modifierZero: StatsModifier = {
    HP: 0,
    attack: 0,
    defense: 0,
    spAttack: 0,
    spDefense: 0,
    speed: 0
  }
  private myPokemonStatModifierSubject = new BehaviorSubject<StatsModifier>(this.modifierZero);
  private rivalPokemonStatModifierSubject = new BehaviorSubject<StatsModifier>(this.modifierZero);

  myPokemonStatModifier$ = this.myPokemonStatModifierSubject.asObservable();
  rivalPokemonStatModifier$ = this.rivalPokemonStatModifierSubject.asObservable();

  constructor() { }

  updateMyPokemonStatModifier(modifier: StatsModifier) {
    this.myPokemonStatModifierSubject.next(modifier);
  }

  updateRivalPokemonStatModifier(modifier: StatsModifier) {
    this.rivalPokemonStatModifierSubject.next(modifier);
  }

  getMyPokemonStatModifiers() {
    return this.myPokemonStatModifierSubject.getValue()
  }

  getRivalPokemonStatModifiers() {
    return this.rivalPokemonStatModifierSubject.getValue()
  }
}

export interface StatsModifier {
  HP: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number
}