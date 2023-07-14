import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';

@Component({
  selector: 'app-edit-stats-overlay',
  templateUrl: './edit-stats-overlay.component.html',
  styleUrls: ['./edit-stats-overlay.component.scss']
})
export class EditStatsOverlayComponent {
  @Input() overlayRef!: OverlayRef;
  @Input() pokemonName!: string;

  level: number = 1;
  ability: string = '';
  nature: string = '';
  evs: { stat: string, value: number }[] = [];
  ivs: { stat: string, value: number }[] = [];

  natureOptions: string[] = ['Adamant', 'Bold', 'Brave', 'Calm', 'Careful', 'Gentle', 'Hasty', 'Impish', 'Jolly', 'Lax', 'Lonely', 'Mild', 'Modest', 'Naive', 'Naughty', 'Quiet', 'Rash', 'Relaxed', 'Sassy', 'Timid'];

  stats: string[] = ['HP', 'Ataque', 'Defensa', 'Velocidad', 'Ataque Especial', 'Defensa Especial'];

  @Output() savePokemon: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.initializeEvs()
  }

  onSave() {
    const evs = {
      attack: this.evs.find(e => e.stat === 'Ataque')?.value || 0,
      defend: this.evs.find(e => e.stat === 'Defensa')?.value || 0,
      speed: this.evs.find(e => e.stat === 'Velocidad')?.value || 0,
      spattack: this.evs.find(e => e.stat === 'Ataque Especial')?.value || 0,
      spdefend: this.evs.find(e => e.stat === 'Defensa Especial')?.value || 0
    };
  
    const ivs = {
      attack: this.ivs.find(i => i.stat === 'Ataque')?.value || 0,
      defend: this.ivs.find(i => i.stat === 'Defensa')?.value || 0,
      speed: this.ivs.find(i => i.stat === 'Velocidad')?.value || 0,
      spattack: this.ivs.find(i => i.stat === 'Ataque Especial')?.value || 0,
      spdefend: this.ivs.find(i => i.stat === 'Defensa Especial')?.value || 0
    };
  
    const pokemonData: Omit<myPokemon, 'pokemon'> = {
      level: this.level,
      nature: this.nature,
      evs,
      ivs
    };
  
    this.savePokemon.emit(pokemonData);
    this.closeOverlay();
  }

  onCancel() {
    this.closeOverlay();
  }

  private closeOverlay() {
    this.overlayRef.dispose();
  }

  getValueByStat(stat: string): number | undefined {
    const ev = this.evs.find(e => e.stat === stat);
    return ev ? ev.value : undefined;
  }

  updateValueByStat(stat: string, value: number) {
    const ev = this.evs.find(e => e.stat === stat);
    if (ev) {
      ev.value = value;
      console.log('ev.value:', ev?.value, value)
    }
  }

  initializeEvs() {
    // Initialize the evs array with default values for each stat
    this.stats.forEach(stat => {
      this.evs.push({ stat: stat, value: 0 });
    });
  }
  
}

