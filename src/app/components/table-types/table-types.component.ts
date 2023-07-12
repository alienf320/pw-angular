import { Component, Input, OnInit } from '@angular/core';
import { Resistances } from 'src/app/models/resistances.model';
import { WeaknessService } from 'src/app/services/weakness-service.service';

@Component({
  selector: 'app-table-types',
  templateUrl: './table-types.component.html',
  styleUrls: ['./table-types.component.scss']
})
export class TableTypesComponent implements OnInit {

  @Input() type1!: string
  @Input() type2!: string
  typesWR!: Resistances

  constructor(private weaknessService: WeaknessService) { }

  ngOnInit(): void {
    if(this.type1) {
      this.weaknessService.getWeaknesses(this.type1, this.type2).subscribe( data => {
        this.typesWR = data
      })
    }
  }

}
