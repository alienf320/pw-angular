import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { TrainerComponent } from './components/trainer/trainer.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon-info', pathMatch: 'full' },
  { path: 'pokemon-info', component: PokemonInfoComponent },
  { path: 'trainer', component: TrainerComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }