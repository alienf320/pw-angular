import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './components/battle/battle.component';
import { PokemonBattleComponent } from './components/pokemon-battle/pokemon-battle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BattleComponent
  }
];

@NgModule({
  declarations: [
    BattleComponent,
    PokemonBattleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)    
  ]
})
export class BattleModule { }
