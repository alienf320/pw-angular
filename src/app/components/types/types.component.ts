import { Component, OnInit } from '@angular/core';
import { WRTABLE } from 'src/app/utils/WRTable';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent {
  types = Object.keys(WRTABLE).sort();
  typeTable: number[][] = this.generateTypeTable();
  hoveredRowIndex: number = -1;
  hoveredColumnIndex: number = -1;
  typesSelected: string[] = [];

  generateTypeTable(): number[][] {
    return this.types.map((attacker) => {
      return this.types.map((defender) => {
        return WRTABLE[defender][attacker];
      });
    });
  }

  selectType(type: string) {
    this.typesSelected.push(type);
  }

  getEffectiveness(attacker: string) {
    const values = WRTABLE[attacker];
    const arr = [];

    for(let def in values) {
      let value = WRTABLE[def][attacker]
      if(value === 2) {
        arr.push(def)
      }
    }
    
    return arr;
  }

  getNonEffectiveness(attacker: string) {
    const values = WRTABLE[attacker];
    const arr = [];

    for(let entry in values) {
      let value = values[entry]
      if(value === 2) {
        arr.push(entry)
      }
    }
    
    return arr;
  }

  getCellClassDefensive(attacker: string, defender: string): string {
    //console.log('getCellClass: ', value, i, j)
    let cellClasses = '';
    const value = WRTABLE[defender][attacker];

    if (value === 2) {
      cellClasses += 'green-cell ';
    } else if (value === 1) {
      cellClasses += 'white-cell ';
    } else if (value === 0.5) {
      cellClasses += 'red-cell ';
    } else if (value === 0) {
      cellClasses += 'black-cell ';
    }

    return cellClasses.trim();
  }

  getCellClassOffensive(attacker: string, defender: string): string {
    //console.log('getCellClass: ', value, i, j)
    let cellClasses = '';
    const value = WRTABLE[attacker][defender];

    if (value === 2) {
      cellClasses += 'green-cell ';
    } else if (value === 1) {
      cellClasses += 'white-cell ';
    } else if (value === 0.5) {
      cellClasses += 'red-cell ';
    } else if (value === 0) {
      cellClasses += 'black-cell ';
    }

    return cellClasses.trim();
  }

  setHoveredIndexes(row: number, column: number): void {
    this.hoveredRowIndex = row;
    this.hoveredColumnIndex = column;
  }
}
