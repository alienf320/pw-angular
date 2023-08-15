import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { myPokemon } from '../models/myPokemon.models';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private BoxZero: myPokemon[] = []

  private currentBox: BehaviorSubject<myPokemon[]> = new BehaviorSubject(this.BoxZero);
  currentBox$ = this.currentBox.asObservable()
  
  private baseUrl = 'http://localhost:3000/box';
  private allBoxesUrl = 'http://localhost:3000/box/all';
  private rivalUrl = 'http://localhost:3000/box/rival';

  constructor(private http: HttpClient) {
    this.http.get<myPokemon[]>(this.baseUrl).subscribe( data => {
      //console.log('Es una box?: ', data)
      this.currentBox.next(data)
    })

   }

  getBox(): myPokemon[] {
    return this.currentBox.value
  }

  getAllBox(): Observable<any> {
    return this.http.get(this.allBoxesUrl);
  }

  savePokemon(pokemon: string, pokemonData?: any): Observable<any> {
    return this.http.post(this.baseUrl, { displayName: pokemon, ...pokemonData });
  }

  updatePokemon(pkID: string, pokemonData: any): Observable<any> {
    const data = { ...pokemonData, _id: pkID};
    //console.log('data que envío', pkID, pokemonData);
    return this.http.patch(this.baseUrl, data);
  }

  deletePokemon(pkID: string): Observable<any> {
    const url = `${this.baseUrl}/${pkID}`;
    return this.http.delete(url);
  }

  saveRivalBox(box: Box): Observable<any> {
    //console.log("Eso es lo que enviamos a backend:", JSON.stringify(box))
    return this.http.post(this.rivalUrl, box);
  }
}

export interface Box {
  trainerName: string,
  pokemons: myPokemon[]
}