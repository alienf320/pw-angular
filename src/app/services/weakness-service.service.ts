import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.models';
import { Resistances } from '../models/resistances.model';

@Injectable({
  providedIn: 'root'
})
export class WeaknessService {

  private apiUrl = 'http://localhost:3000/types';

  constructor(private http: HttpClient) { }

  getWeaknesses(type1: string, type2?: string): Observable<Resistances> {
    let params = new HttpParams();

    if (type1) {
      params = params.append('type1', type1);
    }

    if (type2) {
      params = params.append('type1', type2);
    }

  
    return this.http.get<Resistances>(this.apiUrl, { params });
  }
}
