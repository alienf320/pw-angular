import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';

@Injectable({
  providedIn: 'root'
})
export class WeaknessService {

  private apiUrl = 'http://localhost:3000/types';

  constructor(private http: HttpClient) { }

  getWeaknesses(type1: string, type2: string): Observable<any> {
    const params = {
      type1: type1,
      type2: type2
    };
    return this.http.get<any>(this.apiUrl, { params: params });
  }
}
