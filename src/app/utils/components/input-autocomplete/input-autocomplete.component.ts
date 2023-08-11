import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable, startWith, map, tap, take } from 'rxjs';
import { Trainer } from 'src/app/models/trainer.models';
import { MoveService } from 'src/app/services/move.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { Constants } from '../../constants';
import { TRAINERS } from '../../trainers';
import { POKEMON_INTERNAL_NAMES } from '../../pokemonNames';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAutocompleteComponent),
      multi: true,
    },
  ],
})
export class InputAutocompleteComponent
  implements ControlValueAccessor
{
  @Input() inputControl = new FormControl();
  @Input() label = '';
  filteredSuggestions!: Observable<string[]>;
  trainers: Trainer[] = [];
  pokemonNames: string[] = POKEMON_INTERNAL_NAMES;
  suggestions: string[] = [];
  loaded = false;
  @Input() inputType: 'default' | 'moves' | 'pokemon' | 'moves' = 'default';

  private onChange: (value: any) => void = () => {};
  private onTouch: () => void = () => {};
  @Output() suggestionSelected = new EventEmitter<any>();

  constructor(
    private trainerService: TrainerService,
    private moveService: MoveService,
    private pokemonService: PokemonService
  ) {
  }
  
  ngOnInit() {
    this.filteredSuggestions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterSuggestions(value))
    );
  }

  writeValue(value: any): void {
    this.inputControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.inputControl.disable() : this.inputControl.enable();
  }

  onInputFocus(): void {
    if (this.inputType === 'default') {
      this.suggestions = TRAINERS;
      this.loaded = true;
      this.trainerService
        .getTrainers()
        .pipe(take(1))
        .subscribe((data) => {
          this.trainers = data;
        });
    } else if (this.inputType === 'pokemon') {
      this.suggestions = this.pokemonNames;
      this.loaded = true;
    } else if (this.inputType === 'moves') {
      this.suggestions = Constants.movesNames;
      this.loaded = true;
    } else {
      this.loaded = true;
      this.suggestions = Constants.movesNames;
    }
  }

  filterSuggestions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(filterValue)
    );
  }

  onClickItem(suggestion: string) {
    let data;

    this.inputControl.setValue(suggestion);
    this.onChange(suggestion);
    this.onTouch();
    //console.log('inputControl value: ', this.inputControl.value, suggestion);

    if (this.inputType === 'default') {
      data = this.trainers.find((t) => t.name === suggestion);
      this.suggestionSelected.emit(data);
    } else if (this.inputType === 'pokemon') {
      this.pokemonService
        .getPokemonByName('', suggestion, true)
        .pipe(take(1))
        .subscribe((pokemon) => {
          data = pokemon[0];
          this.suggestionSelected.emit(data);
        });
    } else if (this.inputType === 'moves') {
      this.moveService
        .getMoveByName(suggestion)
        .pipe(take(1))
        .subscribe((move) => {
          this.suggestionSelected.emit(move);
        });
    } else {
      data = suggestion;
      this.suggestionSelected.emit(data);
    }
  }
}
