import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { BoxService } from 'src/app/services/box.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { EditStatsOverlayComponent } from '../edit-stats-overlay/edit-stats-overlay.component';
import { Pokemon } from 'src/app/models/pokemon.models';


@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.component.html',
  styleUrls: ['./my-pokemons.component.scss']
})
export class MyPokemonsComponent implements OnInit {
  pokemonName: string = "aron";
  pokemons!: string[];
  pokemonsFiltered!: Pokemon[];
  box!: myPokemon[]
  overlayRef: OverlayRef | null = null;


  constructor(
    private pokemonService: PokemonService,
    private boxService: BoxService,
    private overlay: Overlay
  ) {}

  ngOnInit() {
    this.searchPokemon()
    this.loadBox()
  }

  searchPokemon() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe(
        (pokemon) => {
          console.log(pokemon)
          this.pokemonsFiltered = pokemon;
          this.pokemons = pokemon.map( i => i.internalName);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  loadBox() {
    this.boxService.getBox().subscribe(
      box => {
        console.log('box', box)
        this.box = box
      }
    )
  }

  addToBox(event: any) {
    const pokemonName = event.target.innerText;
    this.openOverlay(pokemonName);
    // this.boxService.savePokemon(pokemonName).subscribe( data => {
    //   console.log('data', data)
    //   this.box = data
    // })
  }

  openOverlay(pokemonName: string) {
    // Cerrar el overlay si ya está abierto
    this.closeOverlay();
  
    // Crear el overlay
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  
    this.overlayRef = this.overlay.create({ positionStrategy });
  
    // Adjuntar el componente del formulario al overlay
    const portal = new ComponentPortal(EditStatsOverlayComponent);
    const componentRef = this.overlayRef.attach(portal);
  
    // Pasar el nombre del Pokémon al componente del overlay
    componentRef.instance.pokemonName = pokemonName;
    componentRef.instance.overlayRef = this.overlayRef;
  
    // Escuchar el evento de cierre del overlay
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeOverlay();
    });

    componentRef.instance.savePokemon.subscribe((pokemonData: any) => {
      console.log('data:', pokemonData)
      this.handleSavePokemon(pokemonData, pokemonName);
    });
  }
  
  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }  

  handleSavePokemon(pokemonData: any, pkName: string) {
    const pk = this.pokemonsFiltered.find( p => p.internalName === pkName)

    console.log('Datos del Pokémon:', pokemonData);
    //pokemonData['pokemon'] = pk;
    this.boxService.savePokemon(pkName, pokemonData).subscribe((data) => {
      this.box = data;
    });
  }    
}
