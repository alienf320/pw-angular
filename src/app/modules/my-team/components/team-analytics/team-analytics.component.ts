import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.models';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Team } from 'src/app/models/team.models';
import { WRTABLE } from 'src/app/utils/WRTable';

interface ResistanceData {
  [key: string]: string[];
}

@Component({
  selector: 'app-team-analytics',
  templateUrl: './team-analytics.component.html',
  styleUrls: ['./team-analytics.component.scss'],
})
export class TeamAnalyticsComponent implements OnInit {
  @Input() set inputTeam(team: Team) {
    if (team) {
      this.team = team;
      this.createResistanceObject(team);
      this.analysis(team);
    }
  }
  @Input() set pokemonSelected(pk: myPokemon) {
    this.moves = pk.moves
    this.effective = this.moveCoverage(pk);
    this.resistances = this.getResistances(pk)
  }
  team!: Team;
  resistances!: Set<string>;
  moves: Move[] = [];
  effective: {[type: string]: string[]} = {}

  constructor() {}

  ngOnInit(): void {}

  analysis(team: Team) {
    //console.log('getCellClass: ', value, i, j)
    let weaknesses: Set<string> = new Set();
    let weaknessesObj: { [key: string]: string[] } = {};
    let resistances = new Set();
    let immunities = new Set();
    for (let pk of team.pokemons) {
      for (let type in WRTABLE) {
        const value1 = WRTABLE[pk.pokemon.type1][type];
        let value2;
        let value;
        if (pk.pokemon.type2) {
          value2 = WRTABLE[pk.pokemon.type2][type];
          value = value1 * value2;
          if (value2 > 1) {
            weaknesses.add(type);
            if (!weaknessesObj[type]) {
              weaknessesObj[type] = [pk.pokemon.internalName];
            } else {
              weaknessesObj[type].push(pk.pokemon.internalName);
            }
          } else if (value < 1) {
            resistances.add(type);
          } else if (value === 0) {
            immunities.add(type);
          }
        } else {
          if (value1 === 2) {
            weaknesses.add(type);
            if (!weaknessesObj[type]) {
              weaknessesObj[type] = [pk.pokemon.internalName];
            } else {
              weaknessesObj[type].push(pk.pokemon.internalName);
            }
          } else if (value1 === 0.5) {
            resistances.add(type);
          } else if (value === 0) {
            immunities.add(type);
          }
        }
      }
    }

    // console.log('weak: ', weaknesses);
    // console.log('resistances: ', resistances);
    // console.log('immunities: ', immunities);

    weaknesses.forEach((w) => {
      if (resistances.has(w) || immunities.has(w)) {
        weaknesses.delete(w);
      }
    });

    // console.log('final weaknesses: ', weaknesses)
    // console.log('weaknesses object - ANTES: ', weaknessesObj)

    for (let w in weaknessesObj) {
      if (!weaknesses.has(w)) {
        delete weaknessesObj[w];
      }
    }
    console.log('weaknesses object: ', weaknessesObj);
  }

  createResistanceObject = (team: Team) => {
    const resistanceObject: ResistanceData = {};

    for (const type of Object.keys(WRTABLE)) {
      resistanceObject[type] = [];

      for (const pokemon of team.pokemons) {
        if (
          (pokemon.pokemon.type2 &&
            WRTABLE[pokemon.pokemon.type1][type] *
              WRTABLE[pokemon.pokemon.type2][type] <
              1) ||
          (!pokemon.pokemon.type2! && WRTABLE[pokemon.pokemon.type1][type] < 1)
        ) {
          resistanceObject[type].push(pokemon.pokemon.internalName);
        }
      }
    }

    console.log('resistanceObject: ', resistanceObject);
    //return resistanceObject;
  };

  moveCoverage(pk: myPokemon) {
    const obj: {[type: string]: string[]} = {}
    for (let move of pk.moves) {
      if(move.category !== 'status') {
        // console.log(
        //   'Effectiveness: ',
        //   move.displayName,
        //   this.getEffectiveness(move.type)
        // );

        obj[move.displayName] = this.getEffectiveness(move.type)
      }
    }
    return obj
  }

  getEffectiveness(attacker: string) {
    const values = WRTABLE[attacker];
    const arr = [];

    for (let def in values) {
      let value = WRTABLE[def][attacker];
      if (value === 2) {
        arr.push(def);
      }
    }

    return arr;
  }

  getResistances(pk: myPokemon) {
    const {type1, type2} = pk.pokemon
    const values = WRTABLE[type1];
    const arr = new Set<string>();

    for(let defender of [type1, type2]) {
      if(defender) {
        for (let attacker in values) {
          let value = WRTABLE[defender][attacker];
          if (value < 1) {
            arr.add(attacker);
          }
        }
    
        console.log('resistance of PK: ', arr)
        return arr;
      }
    }
    return arr;
  }
}
