import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.models';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent  {

  @Input() trainer!: Trainer;
  @Output() trainerClicked: EventEmitter<Trainer> = new EventEmitter<Trainer>();

  onCardClicked() {
    this.trainerClicked.emit(this.trainer);
  }

  getCleanMoves(moves: string[]): string[] {
    const cleanedMoves = moves.filter(move => move.length > 3);

    return cleanedMoves;
  }

}
