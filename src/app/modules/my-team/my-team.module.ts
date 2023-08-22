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
import { SharedModule } from 'src/app/utils/modules/shared.module';
import { BoxSmallComponent } from './components/box-small/box-small.component';
import { TeamSelectComponent } from 'src/app/utils/components/input-autocomplete/team-select/team-select.component';
import { TeamAnalyticsComponent } from './components/team-analytics/team-analytics.component';
import { MatSidenavModule } from '@angular/material/sidenav';

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
    PokemonBoxDetailsComponent,
    BoxSmallComponent,
    TeamAnalyticsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,
    SharedModule,
    MatSidenavModule,
    RouterModule.forChild(routes)
  ]
})
export class MyTeamModule { }
