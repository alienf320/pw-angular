import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';

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
}
