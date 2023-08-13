import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.models';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  @Input() team!: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
