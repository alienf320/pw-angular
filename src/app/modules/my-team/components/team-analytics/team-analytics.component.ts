import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.models';
import { WRTABLE } from 'src/app/utils/WRTable';

@Component({
  selector: 'app-team-analytics',
  templateUrl: './team-analytics.component.html',
  styleUrls: ['./team-analytics.component.scss'],
})
export class TeamAnalyticsComponent implements OnInit {
  @Input() set inputTeam(team: Team) {
    if(team) {
      this.analysis(team);
    }
  }

  constructor() {}

  ngOnInit(): void {}

  analysis(team: Team) {
    //console.log('getCellClass: ', value, i, j)
    let weaknesses: Set<string> = new Set();
    let weaknessesObj:{ [key: string]: string[] } = {};
    let resistances = new Set();
    let immunities = new Set();
    for (let pk of team.pokemons) {
      for (let type in WRTABLE) {
        const value1 = WRTABLE[pk.pokemon.type1][type];
        let value2;
        let value;
        if (pk.pokemon.type2) {
          value2 = WRTABLE[pk.pokemon.type2][type];
          value = value1 * value2
          if (value2 > 1) {
            weaknesses.add(type);
            if(!weaknessesObj[type]) {
              weaknessesObj[type] = [pk.pokemon.internalName]
            } else {
              weaknessesObj[type].push(pk.pokemon.internalName)
            }
          } else if (value < 1) {
            resistances.add(type);
          } else if (value === 0) {
            immunities.add(type)
          }
        } else {
          if (value1 === 2) {
            weaknesses.add(type);
            if(!weaknessesObj[type]) {
              weaknessesObj[type] = [pk.pokemon.internalName]
            } else {
              weaknessesObj[type].push(pk.pokemon.internalName)
            }
          } else if (value1 === 0.5) {
            resistances.add(type);
          } else if (value === 0) {
            immunities.add(type)
          }
        }
      }
    }

    // console.log('weak: ', weaknesses);
    // console.log('resistances: ', resistances);
    // console.log('immunities: ', immunities);

    weaknesses.forEach( w => {
      if(resistances.has(w) || immunities.has(w)) {
        weaknesses.delete(w)
      }
    })

    // console.log('final weaknesses: ', weaknesses)
    // console.log('weaknesses object - ANTES: ', weaknessesObj)

    for(let w in weaknessesObj) {
      if(!weaknesses.has(w)) {
        delete weaknessesObj[w]
      }
    }
    console.log('weaknesses object: ', weaknessesObj)
  }
}
