import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Move } from 'src/app/models/move.models';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { TM } from 'src/app/models/tm.models';
import { TeamService } from 'src/app/services/team.service';
import { TmsService } from 'src/app/services/tms.service';
import { pokemonTypes } from 'src/app/utils/colors';

@Component({
  selector: 'app-learnable-tms',
  templateUrl: './learnable-tms.component.html',
  styleUrls: ['./learnable-tms.component.scss'],
})
export class LearnableTMsComponent implements OnInit {
  pokemonSelected!: myPokemon;
  learnableTMs: TM[] = [];
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
    this.teamService.teamPokemonSelected$.subscribe((data) => {
      this.pokemonSelected = data;
      this.update();
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  update() {
    this.tmsService
      .getLearnableTMs(this.pokemonSelected.pokemon._id)
      .subscribe((data) => {
        this.learnableTMs = data;
        this.dataSource.data = this.learnableTMs.map((tm) => tm.move);
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
