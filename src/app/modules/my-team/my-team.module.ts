import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MyPokemonsComponent
  }
];

@NgModule({
  declarations: [
    MyPokemonsComponent,
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MyTeamModule { }
