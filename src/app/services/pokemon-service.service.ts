import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { Move } from '../models/moves.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://localhost:3000/pokemon/full';

  constructor(private http: HttpClient) { }

  getPokemonByName(name?: string, internalName?: string, exact = false): Observable<Pokemon[]> {
    let params = new HttpParams();

    if (name) {
      params = params.append('name', name);
    }

    if (internalName) {
      params = params.append('internalName', internalName);
    }

    if (exact !== undefined) {
      params = params.append('exact', exact.toString());
    }

    return this.http.get<Pokemon[]>(this.apiUrl, { params });
  }

  fillMoves(pokemon: Pokemon, level: number) {
    const levelUpMoves = pokemon.moves.filter(
      (moveEntry) => moveEntry.level <= level
    );

    levelUpMoves.sort((a, b) => a.level - b.level);

    const lastFourMoves = levelUpMoves.slice(-4);
    const moves: Move[] = lastFourMoves.map((moveEntry) => moveEntry.move);

    return moves;
  }
}
