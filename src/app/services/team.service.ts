import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/team.models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { myPokemon } from '../models/myPokemon.models';
import { pokemon1 } from '../modules/battle/components/battle/pokemonDummy';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamZero: Team = {
    _id: '',
    name: '',
    pokemons: []
  }
  pokemonZero: myPokemon = {
    level: 5,
    pokemon: pokemon1,
    moves: []
  }

  private teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  private teamSelected: BehaviorSubject<Team>= new BehaviorSubject(this.teamZero)
  private teamPokemonSelected: BehaviorSubject<myPokemon> = new BehaviorSubject(this.pokemonZero)
  teams$: Observable<Team[]> = this.teamsSubject.asObservable();
  teamSelected$: Observable<Team> = this.teamSelected.asObservable()
  teamPokemonSelected$: Observable<myPokemon> = this.teamPokemonSelected.asObservable()

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
    //console.log('Se debería crear un team: ', name)
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
    this.setTeamSelected(updatedTeam)
  
    this.http.post<any>(this.apiUrl + '/add-pokemon', { teamId: updatedTeam._id, pokemon })
      .subscribe(response => {
        const teamSelectedId = this.teamSelected.value._id
        //console.log('addPokemonToTeam - response: ', response, teamSelectedId)
        if(response._id === teamSelectedId) {
          //console.log('entró al if')
          this.teamSelected.next(response)
        }
        if (response.success) {
          this.teamsSubject.next([...this.teamsSubject.value]); // Emitir una nueva instancia de la lista de equipos
        }
      });
  }

  addPokemonToTeamMomentously(pokemon: myPokemon) {
    let team = this.getTeamSelected()
    team.pokemons.push(pokemon)
    this.setTeamSelected(team)
  }

  deletePokemonFromTeam(pokemon: myPokemon) {
    const teamId = this.teamSelected.value._id
    //console.log('TeamId - PokemonId: ', teamId, pokemon._id)
    const uri = `${this.apiUrl}/${teamId}/pokemons/${pokemon._id}`
    this.http.delete<any>(uri)
      .subscribe(data => {
        console.log('Así queda el team despues del delete: ', data)
        this.setTeamSelected(data)
      });
  }
  

  setTeamSelected(team: Team) {
    this.teamSelected.next(team)
    this.updateTeams(team)
  }

  getTeamSelected() {
    return this.teamSelected.value
  }

  setPokemonInTeam(pk: myPokemon) {
    this.teamPokemonSelected.next(pk)
  }

  updatePokemonInTeam(teamId: string, pokemonData: any) {
    const data = { teamId: teamId, pokemon: pokemonData };
    //console.log('Update pokemon in Team', data);
    this.http.put<Team>(this.apiUrl, data).subscribe(data => {
      //console.log('Esto es un team?: ', data)
      this.teamSelected.next(data)
    });
  }

  updateTeams(team: Team) {
    const newTeams = this.teamsSubject.value.filter( t => t._id !== team._id)
    this.teamsSubject.next([...newTeams, team])
  }
}
