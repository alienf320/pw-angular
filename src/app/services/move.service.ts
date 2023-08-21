import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, last, throwError } from 'rxjs';
import { EVOLUTION_STARTERS } from '../utils/pokemonStarters';
import { Pokemon } from '../models/pokemon.models';
import { Move } from '../models/move.models';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  private apiUrl = 'http://localhost:3000/moves';
  private urlEgg = 'http://localhost:3000/pokemon/egg-moves-compatibility';
  private urlPokemon = 'http://localhost:3000/pokemon/egg-moves';

  constructor(private http: HttpClient) {}

  getMoveByName(name?: string, internalName?: string): Observable<any> {
    let params = new HttpParams();

    if (name) {
      params = params.set('name', name);
    }

    if (internalName) {
      params = params.set('internalName', internalName);
    }

    return this.http.get<any>(this.apiUrl, { params });
  }

  getEggMovesCompatibility(eggMove: string, type: string[]): Observable<Pokemon[]> {
    let params = new HttpParams();

    if (eggMove) {
      params = params.set('eggMove', eggMove);
    }

    if (type) {
      params = params.set('compatibilityType', type.join(','));
    }

    return this.http.get<Pokemon[]>(this.urlEgg, { params });
  }

  getEggMoves(pk: string): Observable<Move[]> {
    let starter = EVOLUTION_STARTERS[pk];
    if(!starter) {
      starter = pk
    }
    let params = new HttpParams();
    params = params.set('internalName', starter);
    //params = params.set('exact', 'true')

    return this.http.get<Move[]>(this.urlPokemon, { params }).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
      })
    );;
  }
}
