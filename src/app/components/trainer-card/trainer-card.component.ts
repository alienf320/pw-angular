import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { merge } from 'rxjs';
import { Move } from 'src/app/models/move.models';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Pokemon } from 'src/app/models/pokemon.models';
import { Trainer } from 'src/app/models/trainer.models';
import { Box, BoxService } from 'src/app/services/box.service';
import { MoveService } from 'src/app/services/move.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent  {

  @Input() trainer!: Trainer;
  @Output() trainerClicked: EventEmitter<Trainer> = new EventEmitter<Trainer>();

  team: myPokemon[] = [];

  constructor(private boxService: BoxService, private pokemonService: PokemonService, private moveService: MoveService) {}

  async addToRivalBox() {
    let box: myPokemon[] = [];
  
    for (const pk of this.trainer.team) {
      let pokemonFull: myPokemon;
      let moves: Move[] = [];
      const movePromises: Promise<Move>[] = [];

      console.log("NIVEEEL: ", pk.level)
  
      for (const move of pk.moves) {
        movePromises.push(this.moveService.getMoveByName(move).toPromise());
      }
  
      const movesData = await Promise.all(movePromises);
      moves = movesData.map(move => move as Move);
  
      const pokemonData = await this.pokemonService.getPokemonByName(pk.name).toPromise();
  
      if (pokemonData) {
        pokemonFull = {
          pokemon: pokemonData[0] as Pokemon,
          level: pk.level,
          moves: moves,
          _id: `${pk._id}`
        };
        box.push(pokemonFull);
      }
    }
    const boxFilled: Box = {
      name: this.trainer.name,
      pokemons: box
    }
    
    console.log('Enviamos rival Box: ', boxFilled);
    await this.boxService.saveRivalBox(boxFilled).toPromise();
    console.log('Rival Box guardado correctamente');
  }
  
  
  

  onCardClicked() {
    this.trainerClicked.emit(this.trainer);
  }

  getCleanMoves(moves: string[]): string[] {
    const cleanedMoves = moves.filter(move => move.length > 3);

    return cleanedMoves;
  }

}
