import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TableTypesComponent } from './components/table-types/table-types.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { TrainerInfoComponent } from './components/trainer-info/trainer-info.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipAbilityComponent } from './utils/components/tooltip-ability/tooltip-ability.component';
import { SentenceFormatPipe } from './utils/pipes/sentence-format';
import { TypeTableComponent } from './components/type-table/type-table.component';
import { TeamSelectComponent } from './utils/components/input-autocomplete/team-select/team-select.component';
import { TypesComponent } from './components/types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonInfoComponent,
    PokemonCardComponent,
    TableTypesComponent,
    TrainerComponent,
    NavbarComponent,
    TrainerCardComponent,
    TrainerInfoComponent,
    TooltipAbilityComponent,
    SentenceFormatPipe,
    TypeTableComponent,
    TypesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule,
    HttpClientModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
