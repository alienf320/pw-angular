import { Component, OnInit } from '@angular/core';
import { TM } from 'src/app/models/tm.models';
import { TmsService } from 'src/app/services/tms.service';

@Component({
  selector: 'app-tms-list',
  templateUrl: './tms-list.component.html',
  styleUrls: ['./tms-list.component.scss']
})
export class TMsListComponent implements OnInit {

  tms: TM[] = [];

  constructor(private tmsService: TmsService) { }

  ngOnInit(): void {
    this.tmsService.tmsInBag$.subscribe( data => {
      this.tms = data;
    })
  }

}
