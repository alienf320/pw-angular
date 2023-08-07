import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPokemonsComponent } from './components/my-pokemons/my-pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStatsOverlayComponent } from './components/edit-stats-overlay/edit-stats-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { PokemonBoxCardComponent } from './components/pokemon-box-card/pokemon-box-card.component';
import { PokemonBoxDetailsComponent } from './components/pokemon-box-details/pokemon-box-details.component';
import { InputAutocompleteComponent } from 'src/app/utils/components/input-autocomplete/input-autocomplete.component';

const routes: Routes = [
  {
    path: '',
    component: MyPokemonsComponent
  }
];

@NgModule({
  declarations: [
    MyPokemonsComponent,
    MyTeamComponent,
    EditStatsOverlayComponent,
    PokemonBoxCardComponent,
    PokemonBoxDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MyTeamModule { }
