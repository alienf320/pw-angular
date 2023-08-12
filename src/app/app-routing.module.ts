import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TypeTableComponent } from './components/type-table/type-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-info', pathMatch: 'full' },
  { path: 'pokemon-info', component: PokemonInfoComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'types', component: TypeTableComponent },
  { path: 'user', loadChildren: () => import('./modules/my-team/my-team.module').then(m => m.MyTeamModule) },
  { path: 'battle', loadChildren: () => import('./modules/battle/battle.module').then(m => m.BattleModule) },
  { path: 'tests', loadChildren: () => import('./modules/tests/tests.module').then(m => m.TestsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }