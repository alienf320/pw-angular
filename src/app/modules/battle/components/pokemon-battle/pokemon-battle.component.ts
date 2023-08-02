import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move.models';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Stats } from 'src/app/models/stats.models';
import { PokemonBattleService } from 'src/app/services/pokemon-battle.service';
import { StatsService } from 'src/app/services/stats.service';
import { WRTABLE } from 'src/app/utils/WRTable';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.scss'],
})
export class PokemonBattleComponent implements OnInit, OnChanges {
  @Input() type!: 'Mine' | 'Rival';
  pokemon!: myPokemon;
  rivalPokemon!: myPokemon;
  pokemonForm!: FormGroup;
  natures = Constants.natureOptions;
  stats!: Stats;
  statsRival!: Stats;
  formValueChangesEnabled = true;
  damage: string[] = []
  subscriptions: Subscription[] = []

  constructor(
    private formBuilder: FormBuilder,
    private statsService: StatsService,
    private battleService: PokemonBattleService,
  ) {}

  ngOnInit(): void {
    this.reinitialize()
  }

  reinitialize() {
    const subs1 = this.battleService.getMyPokemon().subscribe((pokemon) => {
      //console.log("Type", this.type)
      if(this.type === 'Mine') {
        this.pokemon = pokemon;
      } else {
        //console.log('Debería entra acá')
        this.rivalPokemon = pokemon;
      }

      this.check()
    });

    const subs2 = this.battleService.getRivalPokemon().subscribe((pokemon) => {
      if(this.type === 'Mine') {
        this.rivalPokemon = pokemon;
      } else {
        //console.log('Debería entra acá')
        this.pokemon = pokemon;
      }

      this.check()
    });

    this.subscriptions.push(subs1, subs2)

    //console.log('stats en pokemon-battle', this.stats);
    //console.log("ngOnInit - this.pokemon: ", this.pokemon.moves)

    // Crea el FormGroup para los ataques
    //console.log("Ahora el FORM")
    const attacksFormGroup = this.formBuilder.group({
      attack1: [this.pokemon.moves[0]?.name], // Selector de Ataque 1
      attack2: [this.pokemon.moves[1]?.name], // Selector de Ataque 2
      attack3: [this.pokemon.moves[2]?.name], // Selector de Ataque 3
      attack4: [this.pokemon.moves[3]?.name], // Selector de Ataque 4
    });

    // Agrega los controles de ataques dinámicamente al FormGroup
    for (const attackKey in this.pokemon.moves) {
      if (this.pokemon.moves.hasOwnProperty(attackKey)) {
        attacksFormGroup.addControl(
          attackKey,
          this.formBuilder.group({
            attack: [this.pokemon.moves[attackKey].name],
          })
        );
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

    this.recalculate()

    this.pokemonForm.valueChanges.subscribe((value) => {
      if(this.formValueChangesEnabled) {
        //console.log('valueChanges: ')
        this.updatePokemon();
        this.formValueChangesEnabled = false
        this.populateForm();
        this.recalculate();
        //this.calculateDamage(this.pokemon.moves[0]);
      }
    });
  }

  check() {
    if(this.formValueChangesEnabled && this.pokemonForm) {
      //console.log('entro al if: ', this.pokemon)
      //this.updatePokemon();
      this.formValueChangesEnabled = false
      this.populateForm();
      this.recalculate();
    } else {
      //console.log('entro al else: ', this.pokemon)
      if(this.pokemon) {
        this.stats = this.statsService.calculateStats(this.pokemon);
        //this.recalculate()
      }
      //this.recalculate();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges', changes)
    if(this.formValueChangesEnabled && this.pokemonForm) {
      this.check()
    }
    if(!this.pokemonForm) {
      this.reinitialize()
    }
  }

  recalculate() {
    this.stats = this.statsService.calculateStats(this.pokemon);
    this.statsRival = this.statsService.calculateStats(this.rivalPokemon);
    if(this.stats) {
      this.damage = []
      this.pokemon.moves.forEach( move => {
        //console.log('recalculate', move)
        this.damage.push(this.calculateDamage(move).join(' - '))
        //console.log('recalculate', this.damage)
  
      })
    }
  }

  updatePokemon(): void {
    this.pokemon = {
      ...this.pokemon,
      level: this.pokemonForm.value.level,
      nature: this.pokemonForm.value.nature,
      ivs: {
        HP: this.pokemonForm.value.stats.ivHP,
        attack: this.pokemonForm.value.stats.ivAttack,
        defense: this.pokemonForm.value.stats.ivDefense,
        spAttack: this.pokemonForm.value.stats.ivSpAttack,
        spDefense: this.pokemonForm.value.stats.ivSpDefense,
        speed: this.pokemonForm.value.stats.ivSpeed,
      },
      evs: {
        HP: this.pokemonForm.value.stats.evHP,
        attack: this.pokemonForm.value.stats.evAttack,
        defense: this.pokemonForm.value.stats.evDefense,
        spAttack: this.pokemonForm.value.stats.evSpAttack,
        spDefense: this.pokemonForm.value.stats.evSpDefense,
        speed: this.pokemonForm.value.stats.evSpeed,
      },
    };
    //console.log('updated?', this.pokemon)
    if(this.type === 'Mine') {
      this.battleService.updateMyPokemon(this.pokemon)
    } else {
      this.battleService.updateRivalPokemon(this.pokemon)
    }
  }  

  populateForm(): void {
    this.stats = this.statsService.calculateStats(this.pokemon);
    this.statsRival = this.statsService.calculateStats(this.rivalPokemon);
    //console.log('pokemon-battle  pokemon:', this.pokemon)
    //console.log("Encontró nature?", this.natures.find(el => el === this.pokemon.nature))

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
        evSpeed: this.pokemon!.evs!.speed,
      },
    });
    //console.log('Form completo antes:', this.pokemonForm.value)

    const attacksFormGroup = this.pokemonForm.get('attacks') as FormGroup;
    for (const attackKey in this.pokemon.moves) {
      const key = 'attack' + (Number(attackKey) + 1);
      if (this.pokemon.moves.hasOwnProperty(attackKey)) {
        const attackGroup = attacksFormGroup.get(key) as FormControl;
        attackGroup.patchValue(this.pokemon.moves[attackKey].name);
      }
    }

    this.formValueChangesEnabled = true;
    //console.log('Form completo values:', this.pokemonForm.value)
  }

  calculateDamage(move: Move): number[] {
    this.stats = this.statsService.calculateStats(this.pokemon);
    this.statsRival = this.statsService.calculateStats(this.rivalPokemon);

    //console.log('calculateDamage:', this.stats)

    let attackStat, defenseStat;
    if (move.category === 'special') {
      attackStat = this.stats.spAttack;
      defenseStat = this.statsRival.spDefense;
    } else if (move.category === 'physical') {
      attackStat = this.stats.attack;
      defenseStat = this.statsRival.defense;
    } else {
      return [0,0]
    }

    const damage = this.calculateBaseDamage(move, attackStat, defenseStat);
    // Hacer algo con el daño calculado, como mostrarlo en la interfaz de usuario
    //console.log(`El daño causado por ${move.displayName} es: ${damage}`);
    return damage
  }

  private calculateBaseDamage(
    move: Move,
    attackStat: number,
    defenseStat: number
  ): number[] {
    const level = this.pokemonForm.value.level || 50; // Nivel predeterminado si no se proporciona uno
    const power = move.power || 0; // Poder del movimiento o 0 si no se proporciona
    const randomMultiplier = this.getRandomMultiplier(); // Obtener un multiplicador aleatorio entre 0.85 y 1.00
    const typeMultiplier = this.getTypeMultiplier(move, this.rivalPokemon); // Obtener el multiplicador de tipo para el movimiento
    //console.log('calculateBaseDamage: ', level, power, randomMultiplier, typeMultiplier, attackStat, defenseStat)
    const minDamageMultiplier = (0.85) + 0.85;
    const maxDamageMultiplier = 1.85;
    const damage = Math.floor(
      Math.floor(Math.floor((2 * level) / 5 + 2) * attackStat * power) /
        defenseStat /
        50 +
        2
    );
    return [Math.floor(damage * randomMultiplier * minDamageMultiplier), Math.floor(damage * randomMultiplier * maxDamageMultiplier)]
  }

  private getRandomMultiplier(): number {
    return Math.random() * (1.0 - 0.85) + 0.85; // Generar un número aleatorio entre 0.85 y 1.00
  }

  private getTypeMultiplier(move: Move, rivalPokemon: myPokemon): number {
    const type1 = rivalPokemon.pokemon.type1?.toLowerCase();
    const type2 = rivalPokemon.pokemon.type2?.toLowerCase();
    
    const m1: number = type1 ? WRTABLE[type1][move.type] : 1;
    const m2: number = type2 ? WRTABLE[type2][move.type] : 1;
  
    //console.log('el multiplicador de: ', move.name, ' es ', m1*m2)
    return m1 * m2;
  }

  ngOnDestroy(): void {
    // Desuscribirse de todas las suscripciones activas
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
