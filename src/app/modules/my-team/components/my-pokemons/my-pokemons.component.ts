import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { BoxService } from 'src/app/services/box.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { EditStatsOverlayComponent } from '../edit-stats-overlay/edit-stats-overlay.component';
import { Pokemon } from 'src/app/models/pokemon.models';
import { PokemonBoxDetailsComponent } from '../pokemon-box-details/pokemon-box-details.component';


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
    const pokemonFull = this.pokemonsFiltered.find(p => p.internalName === pokemonName)
    this.openOverlay(pokemonFull!);
  }

  openOverlay(pokemonFull: Pokemon, pokemonStats?: myPokemon) {
    // Cerrar el overlay si ya está abierto
    this.closeOverlay();
  
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  
    this.overlayRef = this.overlay.create({ positionStrategy });
  
    // Adjuntar el componente del formulario al overlay
    const portal = new ComponentPortal(EditStatsOverlayComponent);
    const componentRef = this.overlayRef.attach(portal);
  
    // Pasar el nombre del Pokémon al componente del overlay
    if(pokemonStats) {
      componentRef.instance.myPokemon = pokemonStats
    }
    componentRef.instance.pokemonName = pokemonFull;
    componentRef.instance.overlayRef = this.overlayRef;
  
    // Escuchar el evento de cierre del overlay
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeOverlay();
    });

    componentRef.instance.savePokemon.subscribe((pokemonData: any) => {
      console.log('save data:', pokemonData)
      this.handleSavePokemon(pokemonData, pokemonFull.internalName);
    });

    componentRef.instance.updatePokemon.subscribe((pokemonData: any) => {
      //console.log('update data:', pokemonData)
      this.handleUpdatePokemon(pokemonData, pokemonData._id);
    });
  }
  
  deletePokemon(pkID: string) {
    const pokemon = this.box.find( pk => pk._id === pkID)
    console.log('Esto es un ID?', pokemon?._id)
    if(pokemon) {
      this.boxService.deletePokemon(pokemon._id).subscribe( data => {
        console.log("delete data", data);
        this.box = data
      })  
    }
  }
  
  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }  

  handleSavePokemon(pokemonData: any, pkName: string) {
    //console.log('Datos del Pokémon:', pokemonData);
    this.boxService.savePokemon(pkName, pokemonData).subscribe((data) => {
      this.box = data;
    });
  }    

  handleUpdatePokemon(pokemonData: any, pkID: string) {
    //console.log('Datos del Pokémon:', pokemonData);
    this.boxService.updatePokemon(pkID, pokemonData).subscribe((data) => {
      //console.log('respuesta del server: ', data)
      this.box = data;
    });
  }  

  modifyPokemon(pk: myPokemon) {
    this.openOverlay(pk.pokemon, pk)
  }

  openDetails(event: myPokemon) {
    console.log('target', event)

    this.openOverlayDetails(event)
  
  }

  openOverlayDetails(myPokemon: myPokemon) {
    // Cerrar el overlay si ya está abierto
    this.closeOverlay();
  
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  
    this.overlayRef = this.overlay.create({ positionStrategy });
  
    // Adjuntar el componente del formulario al overlay
    const portal = new ComponentPortal(PokemonBoxDetailsComponent);
    const componentRef = this.overlayRef.attach(portal);
  
    // Pasar el nombre del Pokémon al componente del overlay

    componentRef.instance.myPokemon = myPokemon
    componentRef.instance.overlayRef = this.overlayRef;
  
    // Escuchar el evento de cierre del overlay
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeOverlay();
    });
  }
}
