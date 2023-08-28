import { Component, Input, OnInit } from '@angular/core';
import { Resistances } from 'src/app/models/resistances.model';
import { WeaknessService } from 'src/app/services/weakness-service.service';
import { WRTABLE } from 'src/app/utils/WRTable';

@Component({
  selector: 'app-table-types',
  templateUrl: './table-types.component.html',
  styleUrls: ['./table-types.component.scss'],
})
export class TableTypesComponent implements OnInit {
  @Input() type1!: string;
  @Input() type2!: string;
  typesWR: Resistances = {
    immunities: [],
    weak: [],
    superWeak: [],
    resistance: [],
    superResistance: [],
  };

  constructor(private weaknessService: WeaknessService) {}

  ngOnInit(): void {
    // if (this.type1) {
    //   this.weaknessService
    //     .getWeaknesses(this.type1, this.type2)
    //     .subscribe((data) => {
    //       console.log('Weakness service - data: ', data);
    //       this.typesWR = data;
    //     });
    // }

    if (this.type1) {
      for (let attacker in WRTABLE[this.type1]) {
        const value =
          WRTABLE[this.type1][attacker] * WRTABLE[this.type2][attacker] ?? 1;
        switch (value) {
          case 0:
            this.typesWR.immunities.push(attacker);
            break;
          case 0.25:
            this.typesWR.superResistance.push(attacker);
            break;
          case 0.5:
            this.typesWR.resistance.push(attacker);
            break;
          case 2:
            this.typesWR.weak.push(attacker);
            break;
          case 4:
            this.typesWR.superWeak.push(attacker);
            break;
          default:
            break;
        }
      }
    }
  }
}
