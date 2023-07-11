import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://localhost:3000/pokemon/full';

  constructor(private http: HttpClient) { }

  getPokemonByName(name: string): Observable<Pokemon[]> {
    const url = `${this.apiUrl}?name=${name}`;
    return this.http.get<any>(url);
  }
}
