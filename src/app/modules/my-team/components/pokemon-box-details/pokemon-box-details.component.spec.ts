import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBoxDetailsComponent } from './pokemon-box-details.component';

describe('PokemonBoxDetailsComponent', () => {
  let component: PokemonBoxDetailsComponent;
  let fixture: ComponentFixture<PokemonBoxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonBoxDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBoxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
