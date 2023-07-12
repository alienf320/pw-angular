import { Component } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.models';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent  {

  name: string = '';
  type: string = '';
  pokemon: string = '';
  trainers: Trainer[] = [];

  constructor(private trainerService: TrainerService) {}

  getTrainers() {
    this.trainerService.getTrainers(this.name, this.type, this.pokemon)
      .subscribe(
        (trainers: Trainer[]) => {
          this.trainers = trainers;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
