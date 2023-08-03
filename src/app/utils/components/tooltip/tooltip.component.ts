import { style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/moves.models';

@Component({
  selector: 'tooltip',
  styleUrls: ['./tooltip.component.scss'],
  templateUrl: './tooltip.component.html',

})
export class TooltipComponent implements OnInit {

  @Input() move!: Move;

  constructor() { }

  ngOnInit(): void {
  }

}
