import { OverlayRef } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myPokemon } from 'src/app/models/myPokemon.models';

@Component({
  selector: 'app-edit-stats-overlay',
  templateUrl: './edit-stats-overlay.component.html',
  styleUrls: ['./edit-stats-overlay.component.scss']
})
export class EditStatsOverlayComponent {
  @Input() overlayRef!: OverlayRef;
  @Input() pokemonName!: string;

  form!: FormGroup;
  level: number = 1;
  ability: string = '';
  nature: string = '';
  evs: { stat: string, value: number }[] = [];
  ivs: { stat: string, value: number }[] = [];

  natureOptions: string[] = ['Adamant', 'Bold', 'Brave', 'Calm', 'Careful', 'Gentle', 'Hasty', 'Impish', 'Jolly', 'Lax', 'Lonely', 'Mild', 'Modest', 'Naive', 'Naughty', 'Quiet', 'Rash', 'Relaxed', 'Sassy', 'Timid'];

  stats: string[] = ['HP', 'Ataque', 'Defensa', 'Velocidad', 'Ataque Especial', 'Defensa Especial'];

  @Output() savePokemon: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      level: [1, Validators.required],
      ability: ['', Validators.required],
      nature: ['', Validators.required],
      evs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        Ataque: [0, Validators.min(0)],
        Defensa: [0, Validators.min(0)],
        Velocidad: [0, Validators.min(0)],
        'Ataque Especial': [0, Validators.min(0)],
        'Defensa Especial': [0, Validators.min(0)]
      }),
      ivs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        Ataque: [0, Validators.min(0)],
        Defensa: [0, Validators.min(0)],
        Velocidad: [0, Validators.min(0)],
        'Ataque Especial': [0, Validators.min(0)],
        'Defensa Especial': [0, Validators.min(0)]
      })
    });
    console.log('fomr:', this.form)
  }

  ngOnInit() {
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      level: [1, Validators.required],
      ability: ['', Validators.required],
      nature: ['', Validators.required],
      evs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        Ataque: [0, Validators.min(0)],
        Defensa: [0, Validators.min(0)],
        Velocidad: [0, Validators.min(0)],
        'Ataque Especial': [0, Validators.min(0)],
        'Defensa Especial': [0, Validators.min(0)]
      }),
      ivs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        Ataque: [0, Validators.min(0)],
        Defensa: [0, Validators.min(0)],
        Velocidad: [0, Validators.min(0)],
        'Ataque Especial': [0, Validators.min(0)],
        'Defensa Especial': [0, Validators.min(0)]
      })
    });
  }

  onSave() {
    if (this.form.valid) {
      const evs = this.form.value.evs;
      const ivs = this.form.value.ivs;
      const pokemonData: Omit<myPokemon, 'pokemon'> = {
        level: this.form.value.level,
        nature: this.form.value.nature,
        evs,
        ivs
      };
      console.log('OnSave')
      this.savePokemon.emit(pokemonData);
      this.closeOverlay();
    }
  }

  onCancel() {
    this.closeOverlay();
  }

  private closeOverlay() {
    this.overlayRef.dispose();
  }

  getValueByStat(stat: string): number {
    return this.form.get(`evs.${stat}`)?.value;
  }
  

  updateValueByStat(stat: string, value: number) {
    this.form.get(`evs.${stat}`)?.setValue(value);
  }
  
}

