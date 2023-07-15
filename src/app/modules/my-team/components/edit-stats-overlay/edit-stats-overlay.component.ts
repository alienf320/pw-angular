import { CdkOverlayOrigin, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { Move } from 'src/app/models/move.models';
import { myPokemon } from 'src/app/models/myPokemon.models';
import { Pokemon } from 'src/app/models/pokemon.models';
import { MoveService } from 'src/app/services/move.service';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-edit-stats-overlay',
  templateUrl: './edit-stats-overlay.component.html',
  styleUrls: ['./edit-stats-overlay.component.scss'],
})
export class EditStatsOverlayComponent {
  @Input() overlayRef!: OverlayRef;
  @Input() pokemonName!: Pokemon;
  @Input() myPokemon!: myPokemon;
  @ViewChild('move1') move1!: ElementRef<HTMLInputElement>;
  @ViewChild('suggestionsTemplate') suggestionsTemplate!: TemplateRef<any>;

  private suggestionPanel!: OverlayRef;
  private inputValueSubject = new Subject<any>();
  form!: FormGroup;
  level: number = 1;
  ability: string = '';
  nature: string = '';
  moves: string[] = [];
  evs: { stat: string; value: number }[] = [];
  ivs: { stat: string; value: number }[] = [];
  suggestions!: string[];
  movesFull: Move[] = []


  natureOptions: string[] = [
    'Adamant',
    'Bashful',
    'Bold',
    'Brave',
    'Calm',
    'Careful',
    'Docile',
    'Gentle',
    'Hardy',
    'Hasty',
    'Impish',
    'Jolly',
    'Lax',
    'Lonely',
    'Mild',
    'Modest',
    'Naive',
    'Naughty',
    'Quiet',
    'Quirky',
    'Rash',
    'Relaxed',
    'Sassy',
    'Serious',
    'Timid',
  ];

  stats: string[] = [
    'HP',
    'attack',
    'defense',
    'speed',
    'spAttack',
    'spDefense',
  ];

  @Output() savePokemon: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatePokemon: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder, private overlay: Overlay, private viewContainerRef: ViewContainerRef, private moveService: MoveService) {
    this.form = this.formBuilder.group({
      level: [1, Validators.required],
      ability: ['', Validators.required],
      nature: ['', Validators.required],
      evs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        attack: [0, Validators.min(0)],
        defense: [0, Validators.min(0)],
        speed: [0, Validators.min(0)],
        spAttack: [0, Validators.min(0)],
        spDefense: [0, Validators.min(0)],
      }),
      ivs: this.formBuilder.group({
        HP: [0, Validators.min(0)],
        attack: [0, Validators.min(0)],
        defense: [0, Validators.min(0)],
        speed: [0, Validators.min(0)],
        spAttack: [0, Validators.min(0)],
        spDefense: [0, Validators.min(0)],
      }),
      moveSet: formBuilder.group({
        move1: [''],
      })
    });
  }

  ngOnInit() {
    this.inputValueSubject
    .pipe(debounceTime(500)) // Espera 500ms antes de continuar
    .subscribe((inputValue: any) => {
      this.suggestions = Constants.movesNames.filter(el => el.match(inputValue.target.value));
      this.showOverlay(this.suggestions);
    });
  }

  ngAfterContentInit() {
    if (this.myPokemon) {
      this.form.controls['ability'].setValue(this.myPokemon?.pokemon.abilities);
      this.form.controls['level'].setValue(this.myPokemon.level);
      this.form.controls['nature'].setValue(this.myPokemon.nature);
      this.form.controls['ability'].setValue(this.myPokemon.ability);

      this.stats.forEach((stat) => {
        const evsValue =
          this.myPokemon.evs![stat as keyof typeof this.myPokemon.evs] || 0;
        (this.form.controls['evs'] as FormGroup).controls[stat].setValue(
          evsValue
        );
      });

      this.stats.forEach((stat) => {
        const ivsValue =
          this.myPokemon.ivs![stat as keyof typeof this.myPokemon.ivs] || 0;
        (this.form.controls['ivs'] as FormGroup).controls[stat].setValue(
          ivsValue
        );
      });
    }
  }

  showSuggestions(inputValue: any) {
    this.suggestions = Constants.movesNames.filter( el => el.match(inputValue.target.value))
    //console.log(suggestions)
    this.inputValueSubject.next(inputValue);
  }

showOverlay(suggestions: string[]) {
  this.hideSuggestions();

  const origin = new CdkOverlayOrigin(this.move1);

  const overlayConfig = {
    positionStrategy: this.overlay.position().flexibleConnectedTo(origin.elementRef).withPositions([{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
      offsetY: 1
    }]),
    scrollStrategy: this.overlay.scrollStrategies.reposition(),
    hasBackdrop: true, // Habilita el backdrop
    backdropClick: true, // Habilita el manejo del clic en el backdrop
  };

  this.suggestionPanel = this.overlay.create(overlayConfig);
  const overlayPortal = new TemplatePortal(this.suggestionsTemplate, this.viewContainerRef);
  this.suggestionPanel.attach(overlayPortal);

  this.suggestionPanel.backdropClick().subscribe(() => {
    this.hideSuggestions();
  });
}


  hideSuggestions() {
    if (this.suggestionPanel && this.suggestionPanel.hasAttached()) {
      this.suggestionPanel.detach();
    }
  }

  addMove(event: any) {
    const move = event.target.innerText;
    if(this.moves.length < 4) {
      this.moves.push(move)
    }  }
  
  deleteMove(moveName: string) {
    this.moves = this.moves.filter(m => m !== moveName)
  }
  
  async getMovesFull(): Promise<void> {
    for (const move of this.moves) {
      console.log('getMovesFull');
      const data = await this.moveService.getMoveByName(move).toPromise();
      console.log(data);
      this.movesFull.push(...data);
    }
  }
  
  async onSave(): Promise<void> {
    if (this.form.valid) {
      await this.getMovesFull();
      const evs = this.form.value.evs;
      const ivs = this.form.value.ivs;
  
      const pokemonData: any = {
        level: this.form.value.level,
        ability: this.form.value.ability,
        nature: this.form.value.nature,
        evs,
        ivs,
        moves: this.movesFull,
        _id: this.myPokemon ? this.myPokemon._id : '',
      };
  
      if (this.myPokemon) {
        this.updatePokemon.emit(pokemonData);
      } else {
        this.savePokemon.emit(pokemonData);
      }
  
      this.closeOverlay();
    }
  }

  onCancel() {
    this.closeOverlay();
  }

  private closeOverlay() {
    this.overlayRef.dispose();
  }
}
