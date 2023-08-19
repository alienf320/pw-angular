import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { TM } from '../models/tm.models';
import { pokemonTypes } from '../utils/colors';

@Injectable({
  providedIn: 'root'
})
export class TmsService {

  uri = 'http://localhost:3000/tm';
  private tmsInBag: BehaviorSubject<TM[]> = new BehaviorSubject<TM[]>([]);
  tmsInBag$ = this.tmsInBag.asObservable();

  constructor(private http: HttpClient) { this.getTMsInBag() }

  getTMsInBag() {
    return this.http.get<TM[]>(this.uri + '/in-bag').subscribe(data => {
      this.tmsInBag.next(data); 
    });
  }

  addTMToBag(tm: string) {
    this.http.patch(this.uri + '/add-to-bag', {tm}).pipe(take(1)).subscribe()
  }

  getLearnableTMs(pokemonId: string): Observable<TM[]> {
    return this.http.get<TM[]>(`${this.uri}/learnable-tms/${pokemonId}`)
  }
}
