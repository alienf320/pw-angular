import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBoxCardComponent } from './pokemon-box-card.component';

describe('PokemonBoxCardComponent', () => {
  let component: PokemonBoxCardComponent;
  let fixture: ComponentFixture<PokemonBoxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBoxCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBoxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
