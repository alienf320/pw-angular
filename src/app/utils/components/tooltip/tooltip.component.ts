import { style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip',
  styleUrls: ['./tooltip.component.scss'],
  templateUrl: './tooltip.component.html',

})
export class TooltipComponent implements OnInit {

  @Input() text = ''

  constructor() { }

  ngOnInit(): void {
  }

}
