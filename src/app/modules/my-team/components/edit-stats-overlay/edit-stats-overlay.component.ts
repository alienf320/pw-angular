import { OverlayRef } from '@angular/cdk/overlay';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Pokemon } from 'src/app/models/pokemon.models';

@Component({
  selector: 'app-edit-stats-overlay',
  templateUrl: './edit-stats-overlay.component.html',
  styleUrls: ['./edit-stats-overlay.component.scss'],
})
export class EditStatsOverlayComponent {
  @Input() overlayRef!: OverlayRef;
  @Input() pokemonName!: Pokemon;
  @Input() myPokemon!: myPokemon;

  form!: FormGroup;
  level: number = 1;
  ability: string = '';
  nature: string = '';
  evs: { stat: string; value: number }[] = [];
  ivs: { stat: string; value: number }[] = [];

  natureOptions: string[] = [
    'Adamant',
    'Bashful',
    'Bold',
    'Brave',
    'Calm',
    'Careful',
    'Docile',
    'Gentle',
    'Hardy',
    'Hasty',
    'Impish',
    'Jolly',
    'Lax',
    'Lonely',
    'Mild',
    'Modest',
    'Naive',
    'Naughty',
    'Quiet',
    'Quirky',
    'Rash',
    'Relaxed',
    'Sassy',
    'Serious',
    'Timid',
  ];

  stats: string[] = [
    'HP',
    'attack',
    'defense',
    'speed',
    'spAttack',
    'spDefense',
  ];

  @Output() savePokemon: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatePokemon: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      level: [1, Validators.required],
      ability: ['', Validators.required],
      nature: ['', Validators.required],
      evs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        attack: [0, Validators.min(0)],
        defense: [0, Validators.min(0)],
        speed: [0, Validators.min(0)],
        spAttack: [0, Validators.min(0)],
        spDefense: [0, Validators.min(0)],
      }),
      ivs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        attack: [0, Validators.min(0)],
        defense: [0, Validators.min(0)],
        speed: [0, Validators.min(0)],
        spAttack: [0, Validators.min(0)],
        spDefense: [0, Validators.min(0)],
      }),
    });
  }

  ngAfterContentInit() {
    if (this.myPokemon) {
      this.form.controls['ability'].setValue(this.myPokemon?.pokemon.abilities);
      this.form.controls['level'].setValue(this.myPokemon.level);
      this.form.controls['nature'].setValue(this.myPokemon.nature);
      this.form.controls['ability'].setValue(this.myPokemon.ability);

      this.stats.forEach((stat) => {
        const evsValue =
          this.myPokemon.evs![stat as keyof typeof this.myPokemon.evs] || 0;
        (this.form.controls['evs'] as FormGroup).controls[stat].setValue(
          evsValue
        );
      });

      this.stats.forEach((stat) => {
        const ivsValue =
          this.myPokemon.ivs![stat as keyof typeof this.myPokemon.ivs] || 0;
        (this.form.controls['ivs'] as FormGroup).controls[stat].setValue(
          ivsValue
        );
      });
    }
  }

  onSave() {
    if (this.form.valid) {
      const evs = this.form.value.evs;
      const ivs = this.form.value.ivs;
      const pokemonData: any = {
        level: this.form.value.level,
        ability: this.form.value.ability,
        nature: this.form.value.nature,
        evs,
        ivs,
        _id: this.myPokemon ? this.myPokemon._id : '',
      };

      if (this.myPokemon) {
        this.updatePokemon.emit(pokemonData);
      } else {
        this.savePokemon.emit(pokemonData);
      }

      this.closeOverlay();
    }
  }

  onCancel() {
    this.closeOverlay();
  }

  private closeOverlay() {
    this.overlayRef.dispose();
  }
}
