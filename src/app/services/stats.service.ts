import { Injectable } from '@angular/core';
import { myPokemon } from '../models/myPokemon.models';
import { Stats } from '../models/stats.models';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  calculateStats(pokemon: myPokemon): Stats {
    const pk = pokemon.pokemon;
    const level = pokemon.level;
    const ivs = pokemon.ivs;
    const evs = pokemon.evs;
    const nature = pokemon.nature;
  
    const hp = Math.floor((((ivs!.HP + 2 * pk.baseStats[0] + evs!.HP / 4) / 100) * level!) + 10 + level!);
    const attack = Math.floor((((ivs!.attack + 2 * pk.baseStats[1] + evs!.attack / 4) / 100) * level!) + 5);
    const defense = Math.floor((((ivs!.defense + 2 * pk.baseStats[2] + evs!.defense / 4) / 100) * level!) + 5);
    const spAttack = Math.floor((((ivs!.spAttack + 2 * pk.baseStats[4] + evs!.spAttack / 4) / 100) * level!) + 5);
    const spDefense = Math.floor((((ivs!.spDefense + 2 * pk.baseStats[5] + evs!.spDefense / 4) / 100) * level!) + 5);
    const speed = Math.floor((((ivs!.speed + 2 * pk.baseStats[3] + evs!.speed / 4) / 100) * level!) + 5);
  
    const stats: Stats = {
      hp: Math.floor(hp * this.getNatureModifier('HP', nature!)),
      attack: Math.floor(attack * this.getNatureModifier('Attack', nature!)),
      defense: Math.floor(defense * this.getNatureModifier('Defense', nature!)),
      spAttack: Math.floor(spAttack * this.getNatureModifier('Special Attack', nature!)),
      spDefense: Math.floor(spDefense * this.getNatureModifier('Special Defense', nature!)),
      speed: Math.floor(speed * this.getNatureModifier('Speed', nature!))
    };

    return stats;
  }
  
  getNatureModifier(stat: string, nature: string): number {
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
      console.log(stat, 'incrementa')
      return 1.1;
    } else if (stat === decreaseStat) {
      console.log(stat, 'decrementa')
      return 0.9;
    } else {
      console.log(stat, 'se mantiene')
      return 1.0;
    }
  }
}
