import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.models';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  name: string = 'ash';
  type: string = '';
  pokemon: string = '';
  trainers: Trainer[] = [];
  selectedTrainer: Trainer | null = null;

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.getTrainers()
  }

  getTrainers() {
    this.selectedTrainer = null
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

  onTrainerClicked(trainer: Trainer) {
    this.selectedTrainer = trainer;
  }
}
