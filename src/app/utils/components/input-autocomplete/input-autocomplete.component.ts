import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map, tap } from 'rxjs';
import { Trainer } from 'src/app/models/trainer.models';
import { TrainerService } from 'src/app/services/trainer.service';

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

  @Output() suggestionSelected = new EventEmitter<Trainer>();

  constructor(private trainerService: TrainerService) {
    this.filteredSuggestions = this.inputControl.valueChanges.pipe(
      tap(val => console.log(val)),
      startWith(''),
      map((value) => this.filterSuggestions(value))
    );
  }

  ngOnInit(): void {
    this.trainerService.getTrainers().subscribe((data) => {
      this.trainers = data;
      this.suggestions = data.map((trainer) => trainer.name);
      if(data) {
        this.loaded = true
        console.log('data', this.suggestions)
      }
    });
  }

  filterSuggestions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(filterValue)
    );
  }

  onClickItem(suggestion: string) {
    const trainer = this.trainers.find( t => t.name === suggestion)
    this.suggestionSelected.emit(trainer)
  }
}
