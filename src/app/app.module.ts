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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
