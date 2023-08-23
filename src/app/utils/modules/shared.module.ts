import { NgModule } from '@angular/core';
import { InputAutocompleteComponent } from '../components/input-autocomplete/input-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TeamSelectComponent } from '../components/input-autocomplete/team-select/team-select.component';
import { SentenceFormatPipe } from '../pipes/sentence-format';
import { TypeTagComponent } from '../components/type-tag/type-tag.component';
import { TooltipDirective } from '../directives/tooltip.directive';

@NgModule({
  declarations: [
    InputAutocompleteComponent,
    TeamSelectComponent,
    SentenceFormatPipe,
    TypeTagComponent,
    TooltipDirective
  ],
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
    InputAutocompleteComponent,
    TypeTagComponent,
    TooltipDirective
  ],
})
export class SharedModule {}
