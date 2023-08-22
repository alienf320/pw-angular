import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { myPokemon } from '../models/myPokemon.models';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private BoxZero: Box = {_id: '', name: '', pokemons: []};

  private currentBox: BehaviorSubject<Box> = new BehaviorSubject(this.BoxZero);
  currentBox$ = this.currentBox.asObservable()
  
  private baseUrl = 'http://localhost:3000/box';
  private allBoxesUrl = 'http://localhost:3000/box/all';
  private rivalUrl = 'http://localhost:3000/box/rival';

  constructor(private http: HttpClient) {
    this.http.get<Box[]>(this.allBoxesUrl).subscribe( data => {
      //console.log('Es una box?: ', data)
      this.currentBox.next(data[0])
    })

   }

  getBox(): Box {
    return this.currentBox.value
  }

  getAllBox(): Observable<any> {
    return this.http.get(this.allBoxesUrl);
  }

  savePokemon(pokemon: string, boxId: string, pokemonData?: any): Observable<any> {
    return this.http.post(this.baseUrl + '/add-pokemon', { displayName: pokemon, ...pokemonData, boxId: boxId });
  }

  updatePokemon(pkID: string, pokemonData: any): Observable<any> {
    const data = { ...pokemonData, _id: pkID};
    //console.log('data que envío', pkID, pokemonData);
    return this.http.patch(this.baseUrl, data);
  }

  deletePokemon(pkID: string): Observable<any> {
    const url = `${this.baseUrl}/pokemon/${pkID}`;
    return this.http.delete(url);
  }

  saveRivalBox(box: Box): Observable<any> {
    //console.log("Eso es lo que enviamos a backend:", JSON.stringify(box))
    return this.http.post(this.rivalUrl, box);
  }
}

export interface Box {
  _id?: string,
  name: string,
  pokemons: myPokemon[]
}