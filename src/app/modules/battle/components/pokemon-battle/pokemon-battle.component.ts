import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription, merge } from 'rxjs';
import { Damage } from 'src/app/models/damage.models';
import { Move } from 'src/app/models/move.models';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Stats } from 'src/app/models/stats.models';
import { PokemonBattleService } from 'src/app/services/pokemon-battle.service';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import {
  StatModifierService,
  StatsModifier,
} from 'src/app/services/stat-modifier.service';
import { StatsService } from 'src/app/services/stats.service';
import { WRTABLE } from 'src/app/utils/WRTable';
import { pokemonTypes } from 'src/app/utils/colors';
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
  damage: Damage[] = [];
  possibleAbilities: string[] = [];
  subscriptions: Subscription[] = [];
  valueChanges = new Observable();
  statChanges: number[] = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];

  constructor(
    private formBuilder: FormBuilder,
    private statsService: StatsService,
    private battleService: PokemonBattleService,
    private statsModifiersService: StatModifierService,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.reinitialize();
  }

  reinitialize() {
    const subs1 = this.battleService.getMyPokemon().subscribe((pokemon) => {
      console.log('rival pokemon', this.rivalPokemon);
      if (this.type === 'Mine') {
        this.pokemon = pokemon;
        this.possibleAbilities = [
          ...pokemon.pokemon.abilities,
          pokemon.pokemon.hiddenAbility,
        ];
      } else {
        this.rivalPokemon = pokemon;
      }
      this.check();
    });

    const subs2 = this.battleService.getRivalPokemon().subscribe((pokemon) => {
      if (this.type === 'Mine') {
        this.rivalPokemon = pokemon;
      } else {
        this.pokemon = pokemon;
        this.possibleAbilities = [
          ...pokemon.pokemon.abilities,
          pokemon.pokemon.hiddenAbility,
        ];
      }
      this.check();
    });

    const subs3 = this.statsModifiersService.myPokemonStatModifier$.subscribe(
      (stats) => {
        if (this.formValueChangesEnabled && this.pokemonForm) {
          //this.updatePokemon();
          this.formValueChangesEnabled = false;
          this.populateForm();
          // console.log('recalculate - my pokemon stats modified');
          // this.recalculate();
        }
      }
    );

    const subs4 =
      this.statsModifiersService.rivalPokemonStatModifier$.subscribe(
        (stats) => {
          if (this.formValueChangesEnabled && this.pokemonForm) {
            //this.battleService.updatePokemonFull();
            this.formValueChangesEnabled = false;
            this.populateForm();
            // console.log('recalculate - rival pokemon stats modified');
            // this.recalculate();
          }
        }
      );

    this.subscriptions.push(subs1, subs2, subs3, subs4);

    const attacksFormGroup = this.formBuilder.group({
      attack1: [this.pokemon.moves[0]?.displayName], // Selector de Ataque 1
      attack2: [this.pokemon.moves[1]?.displayName], // Selector de Ataque 2
      attack3: [this.pokemon.moves[2]?.displayName], // Selector de Ataque 3
      attack4: [this.pokemon.moves[3]?.displayName], // Selector de Ataque 4
    });

    this.pokemonForm = this.formBuilder.group({
      basic: this.formBuilder.group({
        level: [this.pokemon.level],
        nature: [this.pokemon.nature],
        ability: [this.pokemon.ability],
      }),
      stats: this.formBuilder.group({
        hp: [this.stats.hp],
        ivHP: [0],
        evHP: [0],
        statChangeHP: [0],
        attack: [this.stats.attack],
        ivAttack: [0],
        evAttack: [0],
        statChangeAttack: [0],
        defense: [this.stats.defense],
        ivDefense: [0],
        evDefense: [0],
        statChangeDefense: [0],
        specialAttack: [this.stats.spAttack],
        ivSpAttack: [0],
        evSpAttack: [0],
        statChangeSpAttack: [0],
        specialDefense: [this.stats.spDefense],
        ivSpDefense: [0],
        evSpDefense: [0],
        statChangeSpDefense: [0],
        speed: [this.stats.speed],
        ivSpeed: [0],
        evSpeed: [0],
        statChangeSpeed: [0],
      }),
      attacks: attacksFormGroup, // Agrega el FormGroup de ataques
    });

    this.recalculate();

    const basicFormGroup = this.pokemonForm.get('basic') as FormGroup;
    const statsFormGroup = this.pokemonForm.get('stats') as FormGroup;

    merge(basicFormGroup.valueChanges, statsFormGroup.valueChanges).subscribe(
      (value) => {
        if (this.formValueChangesEnabled) {
          this.formValueChangesEnabled = false;
          //this.updatePokemon(value);
          if(value.hasOwnProperty('level')) {
            this.battleService.updatePokemonBasic(this.pokemon, value, this.type)
          } else {
            this.battleService.updatePokemonStats(this.pokemon, value, this.type)
          }
          this.populateForm();
          this.recalculate();
        }
      }
    );
  }

  check() {
    if (this.formValueChangesEnabled && this.pokemonForm) {
      //console.log('entro al if: ', this.pokemon)
      this.formValueChangesEnabled = false;
      this.populateForm();
      //console.log('recalculate - check');
      this.recalculate();
    } else {
      //console.log('entro al else: ', this.pokemon)
      if (this.pokemon) {
        this.stats = this.statsService.calculateStats(this.pokemon, this.type);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges', changes)
    if (this.formValueChangesEnabled && this.pokemonForm) {
      this.check();
    }
    if (!this.pokemonForm) {
      this.reinitialize();
    }
  }

  recalculate() {
    //console.log('recalculate: ', this.pokemon.moves)
    this.stats = this.statsService.calculateStats(this.pokemon, this.type);
    this.statsRival = this.statsService.calculateStats(
      this.rivalPokemon,
      this.type === 'Mine' ? 'Rival' : 'Mine'
    );
    // console.log("Ahora voy a recalcular el daño de: ", this.pokemon.pokemon.internalName)
    // console.log("Los stats de mi rival son: ", this.statsRival)
    if (this.stats) {
      this.damage = [];
      this.pokemon.moves.forEach((move) => {
        //console.log('recalculate', move)
        this.damage.push(this.calculateDamage(move));
        //console.log('recalculate', this.damage)
      });
    }
  }

  populateForm(): void {
    console.log('populateForm')
    const statsModifiers = {
      HPM: this.pokemonForm.value.stats.statChangeHP,
      attackM: this.pokemonForm.value.stats.statChangeAttack,
      defenseM: this.pokemonForm.value.stats.statChangeDefense,
      spAttackM: this.pokemonForm.value.stats.statChangeSpAttack,
      spDefenseM: this.pokemonForm.value.stats.statChangeSpDefense,
      speedM: this.pokemonForm.value.stats.statChangeSpeed,
    };

    this.stats = this.statsService.calculateStats(this.pokemon, this.type);
    this.statsRival = this.statsService.calculateStats(
      this.rivalPokemon,
      this.type === 'Mine' ? 'Rival' : 'Mine'
    );

    this.pokemonForm.patchValue({
      basic: {
        level: this.pokemon.level,
        nature: this.pokemon.nature,
        ability: this.pokemon.ability,
      },
      stats: {
        hp: this.stats.hp,
        ivHP: this.pokemon.ivs?.HP || 0,
        evHP: this.pokemon.evs?.HP || 0,
        attack: this.stats.attack,
        ivAttack: this.pokemon.ivs?.attack || 0,
        evAttack: this.pokemon.evs?.attack || 0,
        defense: this.stats.defense,
        ivDefense: this.pokemon.ivs?.defense || 0,
        evDefense: this.pokemon.evs?.defense || 0,
        specialAttack: this.stats.spAttack,
        ivSpAttack: this.pokemon.ivs?.spAttack || 0,
        evSpAttack: this.pokemon.evs?.spAttack || 0,
        specialDefense: this.stats.spDefense,
        ivSpDefense: this.pokemon.ivs?.spDefense || 0,
        evSpDefense: this.pokemon.evs?.spDefense || 0,
        speed: this.stats.speed,
        ivSpeed: this.pokemon.ivs?.speed || 0,
        evSpeed: this.pokemon.evs?.speed || 0,
      },
    });

    //console.log('Aca hace patch con estos moves: ', this.pokemon.moves);
    const attacksFormGroup = this.pokemonForm.get('attacks') as FormGroup;
    for (const attackKey in this.pokemon.moves) {
      const key = 'attack' + (Number(attackKey) + 1);
      if (this.pokemon.moves.hasOwnProperty(attackKey)) {
        const attackGroup = attacksFormGroup.get(key) as FormControl;
        attackGroup.patchValue(this.pokemon.moves[attackKey].displayName, {
          emitEvent: false,
        });
      }
    }
    // console.log('Así quedó después del patch: ', attacksFormGroup.value)
    this.formValueChangesEnabled = true;
  }

  savePokemon() {
    //console.log(this.pokemonForm.value, this.pokemon)
    this.battleService.updatePokemonFull(this.pokemon)
  }

  loadAttacks() {
    this.pokemon.moves = this.pokemonService.fillMoves(this.pokemon.pokemon, this.pokemon.level!)
    this.populateForm()
  }

  calculateDamage(move: Move): Damage {
    this.stats = this.statsService.calculateStats(this.pokemon, this.type);
    this.statsRival = this.statsService.calculateStats(
      this.rivalPokemon,
      this.type === 'Mine' ? 'Rival' : 'Mine'
    );

    // if(this.type === 'Mine') {
    //   console.log('calculateDamage:', this.stats)
    // }

    let attackStat, defenseStat;
    if (move.category === 'special') {
      attackStat = this.stats.spAttack;
      defenseStat = this.statsRival.spDefense;
    } else if (move.category === 'physical') {
      attackStat = this.stats.attack;
      defenseStat = this.statsRival.defense;
    } else {
      return { min: 0, max: 0, effectiveness: 1 };
    }

    const damage = this.calculateBaseDamage(move, attackStat, defenseStat);
    return damage;
  }

  private calculateBaseDamage(
    move: Move,
    attackStat: number,
    defenseStat: number
  ): Damage {
    const level = this.pokemonForm.value.basic.level || 50; // Nivel predeterminado si no se proporciona uno
    const power = move.power || 0; // Poder del movimiento o 0 si no se proporciona
    const typeMultiplier = this.getTypeMultiplier(move, this.rivalPokemon); // Obtener el multiplicador de tipo para el movimiento
    
    // if(this.type === 'Mine') {
    //   console.log('calculateBaseDamage: ', level, power, typeMultiplier, attackStat, defenseStat)
    // }

    const minDamageMultiplier = 0.85;
    const maxDamageMultiplier = 1;
    const hasSTAB =
      this.pokemon.pokemon.type1 === move.type ||
      this.pokemon.pokemon.type2 === move.type;
    const stabMultiplier = hasSTAB ? 1.5 : 1.0;
    const damage = Math.floor(
      Math.floor(Math.floor((2 * level) / 5 + 2) * attackStat * power) /
        defenseStat /
        50 +
        2
    );

    return {
      min: Math.floor(
        damage * minDamageMultiplier * typeMultiplier * stabMultiplier
      ),
      max: Math.floor(
        damage * maxDamageMultiplier * typeMultiplier * stabMultiplier
      ),
      effectiveness: typeMultiplier,
    };
  }

  private getTypeMultiplier(move: Move, rivalPokemon: myPokemon): number {
    const type1 = rivalPokemon.pokemon.type1?.toLowerCase();
    const type2 = rivalPokemon.pokemon.type2?.toLowerCase();

    const m1: number = type1 ? WRTABLE[type1][move.type] : 1;
    const m2: number = type2 ? WRTABLE[type2][move.type] : 1;

    //console.log('el multiplicador de: ', move.name, ' es ', m1*m2)
    return m1 * m2;
  }

  onStatModifierChange(event: any) {
    const currentModifiers: StatsModifier = {
      HP: +this.pokemonForm.value.stats.statChangeHP,
      attack: +this.pokemonForm.value.stats.statChangeAttack,
      defense: +this.pokemonForm.value.stats.statChangeDefense,
      spAttack: +this.pokemonForm.value.stats.statChangeSpAttack,
      spDefense: +this.pokemonForm.value.stats.statChangeSpDefense,
      speed: +this.pokemonForm.value.stats.statChangeSpeed,
    };

    // Update the service with the new stat modifier value
    if (this.type === 'Mine') {
      this.statsModifiersService.updateMyPokemonStatModifier(currentModifiers);
    } else {
      this.statsModifiersService.updateRivalPokemonStatModifier(
        currentModifiers
      );
    }
  }

  onSuggestionSelected(move: Move[], i: number) {
    this.pokemon.moves[i] = move[0];
    this.check();
  }

  getBackgroundColor(effectiveness: number): string {
    switch (effectiveness) {
      case 0.25:
        return 'mediumslateblue'; // Puedes cambiar el color a lo que necesites
      case 0.5:
        return 'lightblue'; // Puedes cambiar el color a lo que necesites
      case 1:
        return 'white'; // Puedes cambiar el color a lo que necesites
      case 2:
        return 'orange'; // Puedes cambiar el color a lo que necesites
      case 4:
        return 'red'; // Puedes cambiar el color a lo que necesites
      default:
        return 'white'; // Puedes cambiar el color a lo que necesites
    }
  }

  getMoveDisplayName(index: number): string {
    const selectedMove = this.pokemon.moves[index];
    return selectedMove ? selectedMove.displayName : '';
  }

  getAttackFormControl(index: number): any {
    const controlName = 'attack' + (index + 1);
    return this.pokemonForm.get(['attacks', controlName]) as FormControl;
  }

  getTypeColor(type: string): string {
    const color = pokemonTypes[type.toLowerCase()].color;
    return color || '#FFFFFF';
  }

  getFontColor(type: string): string {
    const color = pokemonTypes[type.toLowerCase()].fontColor;
    return color || "#FFFFFF";
  }

  getPerceptualDamage(damage: Damage) {
    const rivalHP = this.statsRival.hp
    const damageMin = 100 - ((rivalHP - damage.min)/(rivalHP) * 100)
    const damageMax = 100 - ((rivalHP - damage.max)/(rivalHP) * 100)
    return damageMin.toFixed(2) + '% - ' + damageMax.toFixed(2) + '%'
  }

  ngOnDestroy(): void {
    // Desuscribirse de todas las suscripciones activas
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
