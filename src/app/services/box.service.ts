import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { myPokemon } from '../models/myPokemon.models';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  
  private baseUrl = 'http://localhost:3000/box';
  private allBoxesUrl = 'http://localhost:3000/box/all';
  private rivalUrl = 'http://localhost:3000/box/rival';

  constructor(private http: HttpClient) { }

  getBox(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getAllBox(): Observable<any> {
    return this.http.get(this.allBoxesUrl);
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

  saveRivalBox(box: Box): Observable<any> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };

    console.log("Eso es lo que enviamos a backend:", JSON.stringify(box))

    return this.http.post(this.rivalUrl, box);
  }
}

export interface Box {
  trainerName: string,
  pokemons: myPokemon[]
}