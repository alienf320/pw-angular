import { Injectable } from '@angular/core';
import { myPokemon } from '../models/myPokemon.models';
import { Stats } from '../models/stats.models';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  calculateStats(pokemon: myPokemon): Stats {
    //console.log('calculeStats', pokemon);
    const pk = pokemon.pokemon;
    const level = pokemon.level ?? 1;
    let ivs = pokemon.ivs;
    let evs = pokemon.evs;
    if (!pokemon.ivs?.hasOwnProperty("HP")) {
      ivs = pokemon.ivs ?? {
        HP: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        spAttack: 0,
        spDefense: 0
      };
    }
    if (!pokemon.evs?.hasOwnProperty("HP")) {
      evs = pokemon.evs ?? {
        HP: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        spAttack: 0,
        spDefense: 0
      };
    }
    const nature = pokemon.nature;
  
    //console.log("todos las variables de STATS: ", ivs, evs, pk.baseStats, level);
  
    const hp = Math.floor((((ivs?.HP ?? 0) + 2 * pk.baseStats[0] + (evs?.HP ?? 0) / 4) / 100) * level + 10 + level);
    const attack = Math.floor((((ivs?.attack ?? 0) + 2 * pk.baseStats[1] + (evs?.attack ?? 0) / 4) / 100) * level + 5);
    const defense = Math.floor((((ivs?.defense ?? 0) + 2 * pk.baseStats[2] + (evs?.defense ?? 0) / 4) / 100) * level + 5);
    const spAttack = Math.floor((((ivs?.spAttack ?? 0) + 2 * pk.baseStats[4] + (evs?.spAttack ?? 0) / 4) / 100) * level + 5);
    const spDefense = Math.floor((((ivs?.spDefense ?? 0) + 2 * pk.baseStats[5] + (evs?.spDefense ?? 0) / 4) / 100) * level + 5);
    const speed = Math.floor((((ivs?.speed ?? 0) + 2 * pk.baseStats[3] + (evs?.speed ?? 0) / 4) / 100) * level + 5);
  
    const stats: Stats = {
      hp: Math.floor(hp * this.getNatureModifier('HP', nature!)),
      attack: Math.floor(attack * this.getNatureModifier('Attack', nature!)),
      defense: Math.floor(defense * this.getNatureModifier('Defense', nature!)),
      spAttack: Math.floor(spAttack * this.getNatureModifier('Special Attack', nature!)),
      spDefense: Math.floor(spDefense * this.getNatureModifier('Special Defense', nature!)),
      speed: Math.floor(speed * this.getNatureModifier('Speed', nature!))
    };
  
    //console.log("stats in service: ", stats);
    return stats;
  }
  
  
  getNatureModifier(stat: string, nature: string): number {
    //console.log("GetNatureModifier", stat, nature)
    if(!stat || !nature) {
      return 1
    }
    const natureModifiers: { [key: string]: { increase: string, decrease: string } } = {
      Adamant: { increase: 'Attack', decrease: 'Special Attack' },
      Bashful: { increase: '', decrease: '' },
      Bold: { increase: 'Defense', decrease: 'Attack' },
      Brave: { increase: 'Attack', decrease: 'Speed' },
      Calm: { increase: 'Special Defense', decrease: 'Attack' },
      Careful: { increase: 'Special Defense', decrease: 'Special Attack' },
      Docile: { increase: '', decrease: '' },
      Gentle: { increase: 'Special Defense', decrease: 'Defense' },
      Hardy: { increase: '', decrease: '' },
      Hasty: { increase: 'Speed', decrease: 'Defense' },
      Impish: { increase: 'Defense', decrease: 'Special Attack' },
      Jolly: { increase: 'Speed', decrease: 'Special Attack' },
      Lax: { increase: 'Defense', decrease: 'Special Defense' },
      Lonely: { increase: 'Attack', decrease: 'Defense' },
      Mild: { increase: 'Special Attack', decrease: 'Defense' },
      Modest: { increase: 'Special Attack', decrease: 'Attack' },
      Naive: { increase: 'Speed', decrease: 'Special Defense' },
      Naughty: { increase: 'Attack', decrease: 'Special Defense' },
      Quiet: { increase: 'Special Attack', decrease: 'Speed' },
      Quirky: { increase: '', decrease: '' },
      Rash: { increase: 'Special Attack', decrease: 'Special Defense' },
      Relaxed: { increase: 'Defense', decrease: 'Speed' },
      Sassy: { increase: 'Special Defense', decrease: 'Speed' },
      Serious: { increase: '', decrease: '' },
      Timid: { increase: 'Speed', decrease: 'Attack' }
    };

    const increaseStat = natureModifiers[nature].increase;
    const decreaseStat = natureModifiers[nature].decrease;
  
    if (stat === increaseStat) {
      return 1.1;
    } else if (stat === decreaseStat) {
      return 0.9;
    } else {
      return 1.0;
    }
  }
}
