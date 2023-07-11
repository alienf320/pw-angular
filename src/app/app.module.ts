import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainerCardComponent,
    PokemonCardComponent
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
