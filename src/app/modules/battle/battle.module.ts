import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './components/battle/battle.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TooltipComponent } from 'src/app/utils/components/tooltip/tooltip.component';
import { TooltipDirective } from 'src/app/utils/directives/tooltip.directive';

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [TooltipComponent],
})
export class BattleModule { }
