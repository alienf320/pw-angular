import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer.models';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl = 'http://localhost:3000/trainer';

  constructor(private http: HttpClient) {}

  getTrainers(name?: string, type?: string, pokemon?: string): Observable<Trainer[]> {
    let params = new HttpParams();

    if (name) {
      params = params.append('name', name);
    }

    if (type) {
      params = params.append('type', type);
    }

    if (pokemon) {
      params = params.append('team.name', pokemon);
    }
  
    return this.http.get<Trainer[]>(this.apiUrl, { params });
  }
}
