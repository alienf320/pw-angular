import { NgModule } from '@angular/core';
import { InputAutocompleteComponent } from '../components/input-autocomplete/input-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeamSelectComponent } from '../components/input-autocomplete/team-select/team-select.component';
import { SentenceFormatPipe } from '../pipes/sentence-format';

@NgModule({
  declarations: [InputAutocompleteComponent, TeamSelectComponent, SentenceFormatPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    TeamSelectComponent,
    SentenceFormatPipe,
    InputAutocompleteComponent, // También exportamos el componente para que pueda ser utilizado fuera de este módulo.
  ],
})
export class SharedModule {}