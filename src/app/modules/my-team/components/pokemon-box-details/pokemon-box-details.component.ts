import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Pokemon } from 'src/app/models/pokemon.models';
import { Stats } from 'src/app/models/stats.models';

@Component({
  selector: 'app-pokemon-box-details',
  templateUrl: './pokemon-box-details.component.html',
  styleUrls: ['./pokemon-box-details.component.scss']
})
export class PokemonBoxDetailsComponent {

  @Input() overlayRef!: OverlayRef;
  @Input() pokemonName!: Pokemon;
  @Input() myPokemon!: myPokemon;
  stats!: Stats

  level: number = 1;
  ability: string = '';
  nature: string = '';
  evs: { stat: string, value: number }[] = [];
  ivs: { stat: string, value: number }[] = [];

  natureOptions: string[] = ['Adamant', 'Bold', 'Brave', 'Calm', 'Careful', 'Gentle', 'Hasty', 'Impish', 'Jolly', 'Lax', 'Lonely', 'Mild', 'Modest', 'Naive', 'Naughty', 'Quiet', 'Rash', 'Relaxed', 'Sassy', 'Timid'];

  ngOnInit() {
    this.calculateStats()
  }

  calculateStats() {
    const pokemon = this.myPokemon.pokemon;
    const level = this.myPokemon.level;
    const ivs = this.myPokemon.ivs;
    const evs = this.myPokemon.evs;
    const nature = this.myPokemon.nature;
    console.log(ivs)
    console.log(evs)
  
    const hp = Math.floor((((ivs!.HP + 2 * pokemon.baseStats[0] + evs!.HP / 4) / 100) * level!) + 10 + level!);
    const attack = Math.floor((((ivs!.attack + 2 * pokemon.baseStats[1] + evs!.attack / 4) / 100) * level!) + 5);
    const defense = Math.floor((((ivs!.defense + 2 * pokemon.baseStats[2] + evs!.defense / 4) / 100) * level!) + 5);
    const spAttack = Math.floor((((ivs!.spAttack + 2 * pokemon.baseStats[4] + evs!.spAttack / 4) / 100) * level!) + 5);
    const spDefense = Math.floor((((ivs!.spDefense + 2 * pokemon.baseStats[5] + evs!.spDefense / 4) / 100) * level!) + 5);
    const speed = Math.floor((((ivs!.speed + 2 * pokemon.baseStats[3] + evs!.speed / 4) / 100) * level!) + 5);
  
    this.stats = {
      hp: Math.floor(hp * this.getNatureModifier('HP', nature!)),
      attack: Math.floor(attack * this.getNatureModifier('Attack', nature!)),
      defense: Math.floor(defense * this.getNatureModifier('Defense', nature!)),
      spAttack: Math.floor(spAttack * this.getNatureModifier('Special Attack', nature!)),
      spDefense: Math.floor(spDefense * this.getNatureModifier('Special Defense', nature!)),
      speed: Math.floor(speed * this.getNatureModifier('Speed', nature!))
    };
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
  
  onExit() {
    this.closeOverlay();
  }

  private closeOverlay() {
    this.overlayRef.dispose();
  }

}
