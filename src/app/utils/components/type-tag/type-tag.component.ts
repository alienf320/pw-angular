import { Component, Input, OnInit } from '@angular/core';
import { pokemonTypes } from '../../colors';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.scss']
})
export class TypeTagComponent implements OnInit {

  @Input() text = '';
  @Input() type = '';

  constructor() { }

  ngOnInit(): void {
  }

  getTypeColor(): string {
    const color = pokemonTypes[this.type.toLowerCase()].color;
    return color || '#FFFFFF';
  }

  getFontColor(): string {
    const color = pokemonTypes[this.type.toLowerCase()].fontColor;
    return color || "#FFFFFF";
  }


}
