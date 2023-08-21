import { Injectable } from '@angular/core';
import { ENCOUNTERS_BY_POKEMON } from '../utils/encountersByPokemons';
import { EVOLUTION_STARTERS } from '../utils/pokemonStarters';
import { FAMILY_POKEMON } from '../utils/pokemonFamily';

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  constructor() {}

  findEncounter(pkName: string) {
    const family = this.findFamily(pkName)
    // console.log('family: ', pkName, family)
    let encounters: {pokemon: string, encounter: string[]}[] = []
    if(family && family.length > 0) {
      for(let pk of family) {
        const enc = ENCOUNTERS_BY_POKEMON[pk]
        //console.log('pk y enc: ', pk, enc)
        if(enc) {
          encounters.push({pokemon: pk, encounter: enc})
        }
      }
    }
    // console.log('encounters: ', encounters)
    return encounters
  }

  findFamily(pkName: string): string[] {
    if(FAMILY_POKEMON[pkName]) {
      return [pkName, ...FAMILY_POKEMON[pkName]]
    } else if(EVOLUTION_STARTERS[pkName]) {
      return [EVOLUTION_STARTERS[pkName], ...FAMILY_POKEMON[EVOLUTION_STARTERS[pkName]]]      
    } else {
      return []
    }
  }
}
