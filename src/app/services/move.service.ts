import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private apiUrl = 'http://localhost:3000/moves';

  constructor(private http: HttpClient) { }

  getMoveByName(name?: string, internalName?: string): Observable<any> {
    let params = new HttpParams();
    
    if (name) {
      params = params.set('name', name);
    }
    
    if (internalName) {
      params = params.set('internalName', internalName);
    }
    
    return this.http.get<any>(this.apiUrl, { params });
  }
  
}  