import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take } from 'rxjs';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Pokemon } from 'src/app/models/pokemon.models';
import { Box, BoxService } from 'src/app/services/box.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { EditStatsOverlayComponent } from '../edit-stats-overlay/edit-stats-overlay.component';
import { PokemonBoxDetailsComponent } from '../pokemon-box-details/pokemon-box-details.component';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-box-small',
  templateUrl: './box-small.component.html',
  styleUrls: ['./box-small.component.scss']
})
export class BoxSmallComponent {
  box!: myPokemon[]
  boxFull!: myPokemon[];
  overlayRef: OverlayRef | null = null;
  @Input() set pokemon(pk: Pokemon) {
    if(pk) {
      this.openOverlay(pk);
    }
  }

  constructor(
    private teamService: TeamService,
    private boxService: BoxService,
    private overlay: Overlay
  ) {}

  ngOnInit() {
    console.log('ngOnInit de box-small')
    this.loadBox()
  }

  loadBox() {
    this.boxService.currentBox$.subscribe( data => {
      this.box = data.pokemons;
      this.boxFull = data.pokemons;
    })
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
      //console.log('save data:', pokemonData)
      this.handleSavePokemon(pokemonData, pokemonFull.internalName);
    });

    componentRef.instance.updatePokemon.subscribe((pokemonData: any) => {
      //console.log('update data:', pokemonData)
      this.handleUpdatePokemon(pokemonData, pokemonData._id);
    });
  }
  
  deletePokemon(pkID: any) {
    //console.log('deletePokemon', pkID)
    const pokemon = this.box.find( pk => pk._id === pkID)
    //console.log('Esto es un ID?', pokemon?._id)
    if(pokemon) {
      this.boxService.deletePokemon(pokemon._id!).subscribe( data => {
        //console.log("delete data", data);
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
    this.boxService.savePokemon(pkName, this.boxService.getCurrentBoxId(), pokemonData).subscribe((data) => {
      this.box = data;
    });
  }    

  handleUpdatePokemon(pokemonData: any, pkID: string) {
    // console.log('Datos del Pokémon que actualizo:', pokemonData);

    this.boxService.updatePokemon(pkID, pokemonData).subscribe((data) => {
      //console.log('Respuesta del server: ', data)
      this.box = data;
    });
  }
  
  addPokemonToTeam(event: myPokemon) {
    this.teamService.addPokemonToTeam(event)
  }

  orderBox(event: any) {
    const order = event.checked
    if(order) {
      this.box.sort( (a,b) => a.level! - b.level!)
    } else {
      this.box.sort( (a,b) => b.level! - a.level!)
    }
  }

  filterBox(event: any) {
    const input = event.target.value
    if(input) {
      this.box = this.box.filter( b => b.pokemon.name.includes(input) )
    } else {
      this.box = this.boxFull
    }
  }

  modifyPokemon(pk: myPokemon) {
    this.openOverlay(pk.pokemon, pk)
  }

  openDetails(event: myPokemon) {
    this.openOverlayDetails(event)  
  }

  openOverlayDetails(myPokemon: myPokemon) {
    this.closeOverlay();
  
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
  
    this.overlayRef = this.overlay.create({ positionStrategy });
  

    const portal = new ComponentPortal(PokemonBoxDetailsComponent);
    const componentRef = this.overlayRef.attach(portal);
  
    componentRef.instance.myPokemon = myPokemon
    componentRef.instance.overlayRef = this.overlayRef;
  
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeOverlay();
    });
  }
}
