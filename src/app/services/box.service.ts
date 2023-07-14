import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  
  private baseUrl = 'http://localhost:3000/box';

  constructor(private http: HttpClient) { }

  getBox(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  savePokemon(pokemon: any): Observable<any> {
    return this.http.post(this.baseUrl, {displayName: pokemon});
  }
}
