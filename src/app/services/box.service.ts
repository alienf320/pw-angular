import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { myPokemon } from '../models/myPokemon.models';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  
  private baseUrl = 'http://localhost:3000/box';

  constructor(private http: HttpClient) { }

  getBox(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  savePokemon(pokemon: string, pokemonData?: any): Observable<any> {
    return this.http.post(this.baseUrl, { displayName: pokemon, ...pokemonData });
  }

  updatePokemon(pkID: string, pokemonData: any): Observable<any> {
    const data = { _id: pkID, ...pokemonData };
    console.log('data que envío', data);
    return this.http.patch(this.baseUrl, data);
  }

  deletePokemon(pkID: string): Observable<any> {
    const url = `${this.baseUrl}/${pkID}`;
    return this.http.delete(url);
  }
}

