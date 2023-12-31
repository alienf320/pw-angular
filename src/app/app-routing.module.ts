import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TypeTableComponent } from './components/type-table/type-table.component';
import { TypesComponent } from './components/types/types.component';
import { TMsComponent } from './modules/moves/components/tms/tms.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-info', pathMatch: 'full' },
  { path: 'pokemon-info', component: PokemonInfoComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'types', component: TypesComponent },
  { path: 'tms', loadChildren: () => import('./modules/moves/moves.module').then(m => m.MovesModule)},
  { path: 'user', loadChildren: () => import('./modules/my-team/my-team.module').then(m => m.MyTeamModule) },
  { path: 'battle', loadChildren: () => import('./modules/battle/battle.module').then(m => m.BattleModule) },
  { path: 'tests', loadChildren: () => import('./modules/tests/tests.module').then(m => m.TestsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }