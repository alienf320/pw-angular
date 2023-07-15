import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Stats } from 'src/app/models/stats.models';
import { BoxService } from 'src/app/services/box.service';
import { StatsService } from 'src/app/services/stats.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss']
})
export class PokemonBattleComponent implements OnInit {
  @Input() pokemon!: myPokemon;
  pokemonForm!: FormGroup;
  natures = Constants.natureOptions;
  stats!: Stats;

  constructor(private formBuilder: FormBuilder, private statsService: StatsService) {}

  ngOnInit(): void {
    this.stats = this.statsService.calculateStats(this.pokemon);
    console.log('stats en pokemon-battle', this.stats);
  
    // Crea el FormGroup para los ataques
    const attacksFormGroup = this.formBuilder.group({
      attack1: [''], // Selector de Ataque 1
      attack2: [''], // Selector de Ataque 2
      attack3: [''], // Selector de Ataque 3
      attack4: [''], // Selector de Ataque 4
    });
  
    // Agrega los controles de ataques dinámicamente al FormGroup
    for (const attackKey in this.pokemon.moves) {
      if (this.pokemon.moves.hasOwnProperty(attackKey)) {
        attacksFormGroup.addControl(attackKey, this.formBuilder.group({
          attack: [this.pokemon.moves[attackKey].power],
        }));
      }
    }
  
    // Crea el formulario principal (pokemonForm)
    this.pokemonForm = this.formBuilder.group({
      level: [this.pokemon.level],
      nature: [this.pokemon.nature],
      stats: this.formBuilder.group({
        hp: [this.stats.hp],
        ivHP: [0],
        evHP: [0],
        attack: [this.stats.attack],
        ivAttack: [0],
        evAttack: [0],
        defense: [this.stats.defense],
        ivDefense: [0],
        evDefense: [0],
        specialAttack: [this.stats.spAttack],
        ivSpAttack: [0],
        evSpAttack: [0],
        specialDefense: [this.stats.spDefense],
        ivSpDefense: [0],
        evSpDefense: [0],
        speed: [this.stats.speed],
        ivSpeed: [0],
        evSpeed: [0],
      }),
      attacks: attacksFormGroup, // Agrega el FormGroup de ataques
    });
  }

  ngOnChanges(): void {
    if (this.pokemon && this.pokemonForm) {
      this.populateForm();
    }
  }

  populateForm(): void {
    this.stats = this.statsService.calculateStats(this.pokemon);
    console.log('pokemon-battle  pokemon:', this.pokemon)
    console.log("Encontró nature?", this.natures.find(el => el === this.pokemon.nature))
  
    this.pokemonForm.patchValue({
      level: this.pokemon.level,
      nature: this.pokemon.nature,
      stats: {
        hp: this.stats.hp,
        ivHP: this.pokemon!.ivs!.HP,
        evHP: this.pokemon!.evs!.HP,
        attack: this.stats.attack,
        ivAttack: this.pokemon!.ivs!.attack,
        evAttack: this.pokemon!.evs!.attack,
        defense: this.stats.defense,
        ivDefense: this.pokemon!.ivs!.defense,
        evDefense: this.pokemon!.evs!.defense,
        specialAttack: this.stats.spAttack,
        ivSpAttack: this.pokemon!.ivs!.spAttack,
        evSpAttack: this.pokemon!.evs!.spAttack,
        specialDefense: this.stats.spDefense,
        ivSpDefense: this.pokemon!.ivs!.spDefense,
        evSpDefense: this.pokemon!.evs!.spDefense,
        speed: this.stats.speed,
        ivSpeed: this.pokemon!.ivs!.speed,
        evSpeed: this.pokemon!.evs!.speed
      }
    });
  
    const attacksFormGroup = this.pokemonForm.get('attacks') as FormGroup;
    for (const attackKey in this.pokemon.moves) {
      if (this.pokemon.moves.hasOwnProperty(attackKey)) {
        const attackGroup = attacksFormGroup.get(attackKey) as FormGroup;
        attackGroup.patchValue({
          attack: this.pokemon.moves[attackKey].power
        });
      }
    }

    console.log('Form completo values:', this.pokemonForm.value)
  }
  
  
  
}

