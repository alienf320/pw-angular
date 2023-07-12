import { Component, Input, OnInit } from '@angular/core';
import { Resistances } from 'src/app/models/resistances.model';

@Component({
  selector: 'app-table-types',
  templateUrl: './table-types.component.html',
  styleUrls: ['./table-types.component.scss']
})
export class TableTypesComponent implements OnInit {

  @Input() typesWR!: Resistances

  constructor() { }

  ngOnInit(): void {
  }

}
