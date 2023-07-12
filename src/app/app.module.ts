import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TableTypesComponent } from './components/table-types/table-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonInfoComponent,
    PokemonCardComponent,
    TableTypesComponent
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
