import { Component } from '@angular/core';
import { WRTABLE } from 'src/app/utils/WRTable';

@Component({
  selector: 'app-type-table',
  templateUrl: './type-table.component.html',
  styleUrls: ['./type-table.component.scss']
})
export class TypeTableComponent {
  types = Object.keys(WRTABLE).sort();
  typeTable: number[][] = this.generateTypeTable();
  hoveredRowIndex: number = -1;
  hoveredColumnIndex: number = -1;

  generateTypeTable(): number[][] {
    return this.types.map(attacker => {
      return this.types.map(defender => {
        return WRTABLE[defender][attacker];
      });
    });
  }

  getCellClass(value: number, i: number, j: number): string {
    let cellClasses = '';
  
    if (value === 2) {
      cellClasses += 'green-cell ';
    } else if (value === 1) {
      cellClasses += 'white-cell ';
    } else if (value === 0.5) {
      cellClasses += 'red-cell ';
    } else if (value === 0) {
      cellClasses += 'black-cell ';
    }
  
    if (i === this.hoveredRowIndex || j === this.hoveredColumnIndex) {
      cellClasses += 'row-column-highlight ';
    }
  
    if (j === this.hoveredColumnIndex) {
      cellClasses += 'column-highlight ';
    }
  
    return cellClasses.trim();
  }
  

  setHoveredIndexes(row: number, column: number): void {
    this.hoveredRowIndex = row;
    this.hoveredColumnIndex = column;
  }
  
}
