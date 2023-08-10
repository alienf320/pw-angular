import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './components/battle/battle.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TooltipComponent } from 'src/app/utils/components/tooltip/tooltip.component';
import { TooltipDirective } from 'src/app/utils/directives/tooltip.directive';
import { InputAutocompleteComponent } from 'src/app/utils/components/input-autocomplete/input-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/utils/modules/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BattleComponent
  }
];

@NgModule({
  declarations: [
    BattleComponent,
    PokemonBattleComponent,
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    RouterModule.forChild(routes),

    SharedModule
  ],
  entryComponents: [TooltipComponent],
})
export class BattleModule { }
