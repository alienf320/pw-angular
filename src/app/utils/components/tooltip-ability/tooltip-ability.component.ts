import { Component, Input, OnInit } from '@angular/core';
import { Ability } from 'src/app/models/ability.models';

@Component({
  selector: 'app-tooltip-ability',
  templateUrl: './tooltip-ability.component.html',
  styleUrls: ['./tooltip-ability.component.scss']
})

export class TooltipAbilityComponent {
  @Input() ability!: Ability 
}
