import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './components/battle/battle.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { RouterModule, Routes } from '@angular/router';
import { TooltipComponent } from 'src/app/utils/components/tooltip/tooltip.component';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [TooltipComponent],
  
})
export class BattleModule { }
