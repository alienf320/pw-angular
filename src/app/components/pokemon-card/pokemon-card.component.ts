import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;

  getPokemonMoves(moves: { level: number; move: string; _id: string }[]): string {
    // Implementa la lógica para obtener una representación de los movimientos del Pokémon
    return moves.map(move => move.move).join(', ');
  }

  getPokemonEvolutions(evolutions: { to: string; method: string; parameter: string; _id: string }[]): string {
    // Implementa la lógica para obtener una representación de las evoluciones del Pokémon
    return evolutions.map(evolution => evolution.to).join(', ');
  }
}
