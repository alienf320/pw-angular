import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map, tap } from 'rxjs';
import { Trainer } from 'src/app/models/trainer.models';
import { MoveService } from 'src/app/services/move.service';
import { TrainerService } from 'src/app/services/trainer.service';
import { Constants } from '../../constants';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
})
export class InputAutocompleteComponent implements OnInit {
  inputControl = new FormControl();
  filteredSuggestions: Observable<string[]>;
  trainers: Trainer[] = []
  suggestions: string[] = [];
  loaded = false;
  @Input() inputType: 'default' | 'moves' = 'default';

  @Output() suggestionSelected = new EventEmitter<any>();

  constructor(private trainerService: TrainerService, private moveService: MoveService) {
    this.filteredSuggestions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterSuggestions(value))
    );
  }

  ngOnInit(): void {
    console.log('autocomplete type:', this.inputType)
    if(this.inputType === 'default') {
      this.trainerService.getTrainers().subscribe((data) => {
        this.trainers = data;
        this.suggestions = data.map((trainer) => trainer.name);
        if(data) {
          this.loaded = true
          console.log('data', this.suggestions)
        }
      });
    } else {
      console.log('Entro al else')
      this.loaded = true;
      this.suggestions = Constants.movesNames;

      // this.moveService.getMoveByName.subscribe((data) => {
      //   this.trainers = data;
      //   this.suggestions = data.map((trainer) => trainer.name);
      //   if(data) {
      //     this.loaded = true
      //     console.log('data', this.suggestions)
      //   }
      // });
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
    if(this.inputType === 'default') {
      data = this.trainers.find( t => t.name === suggestion)
    } else {
      data = suggestion
    }
    this.suggestionSelected.emit(data)
  }
}
