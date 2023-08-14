import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/team.models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { myPokemon } from '../models/myPokemon.models';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamZero: Team = {
    _id: '',
    name: '',
    pokemons: []
  }

  private teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  private teamSelected: BehaviorSubject<Team>= new BehaviorSubject(this.teamZero)
  teams$: Observable<Team[]> = this.teamsSubject.asObservable();
  teamSelected$: Observable<Team> = this.teamSelected.asObservable()

  private apiUrl = 'http://localhost:3000/team';

  constructor(private http: HttpClient) {
    this.loadTeamsFromServer(); // Cargar los equipos al inicializar el servicio
  }

  private loadTeamsFromServer() {
    this.http.get<Team[]>(this.apiUrl + '/all').subscribe(teams => {
      this.teamsSubject.next(teams);
      this.teamSelected.next(teams[0])
    });
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl + '/all')
  }

  createTeam(name: string) {
    console.log('Se debería crear un team: ', name)
    return this.http.post<any>(this.apiUrl, { name }).pipe(
      tap(() => {
        // Después de crear un equipo, puedes emitir una nueva actualización
        this.teamSelected.next(this.teamZero);
      })
    );
  }

  addPokemonToTeam(pokemon: myPokemon) {
    const updatedTeam = this.teamSelected.value;
    updatedTeam.pokemons.push(pokemon);
  
    this.http.post<any>(this.apiUrl + '/add-pokemon', { name: updatedTeam.name, pokemon })
      .subscribe(response => {
        if (response.success) {
          this.teamsSubject.next([...this.teamsSubject.value]); // Emitir una nueva instancia de la lista de equipos
        }
      });
  }
  

  setTeamSelected(team: Team) {
    this.teamSelected.next(team)
  }

  getTeamSelected() {
    return this.teamSelected.value
  }

  updatePokemonInTeam(teamId: string, pokemonData: any): Observable<any> {
    const data = { teamId: teamId, pokemon: pokemonData };
    console.log('Update pokemon in Team', data);
    return this.http.put(this.apiUrl, data);
  }
}
