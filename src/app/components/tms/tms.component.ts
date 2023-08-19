import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Team } from 'src/app/models/team.models';
import { TM } from 'src/app/models/tm.models';
import { TeamService } from 'src/app/services/team.service';
import { TmsService } from 'src/app/services/tms.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Move } from 'src/app/models/move.models';
import { pokemonTypes } from 'src/app/utils/colors';

@Component({
  selector: 'app-tms',
  templateUrl: './tms.component.html',
  styleUrls: ['./tms.component.scss'],
})
export class TMsComponent implements OnInit, AfterViewInit {
  team!: Team;
  learnableTMs!: TM[];
  tmInput = '';
  dataSource!: MatTableDataSource<Move>;
  displayedColumns: string[] = [
    'displayName',
    'category',
    'type',
    'power',
    'accuracy',
    'description',
  ];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private teamService: TeamService,
    private tmsService: TmsService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.teamService.teamSelected$.subscribe((data) => {
      this.team = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addToBag() {
    this.tmsService.addTMToBag(this.tmInput);
    this.tmInput = '';
  }

  pokemonSelected(pk: myPokemon) {
    this.tmsService.getLearnableTMs(pk.pokemon._id).subscribe((data) => {
      console.log('Learnable Tms: ', JSON.stringify(data));
      this.learnableTMs = data;
      this.dataSource.data = this.learnableTMs.map(tm => tm.move);
      //this.dataSource.sort = this.sort;
    });
  }

  getTypeColor(type: string): string {
    const color = pokemonTypes[type.toLowerCase()].color;
    return color || '#FFFFFF';
  }

  getFontColor(type: string): string {
    const color = pokemonTypes[type.toLowerCase()].fontColor;
    return color || "#FFFFFF";
  }
}
