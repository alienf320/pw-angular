import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `{{ text }}`,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() text = ''

  constructor() { }

  ngOnInit(): void {
  }

}
