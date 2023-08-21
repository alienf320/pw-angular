import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggMovesComponent } from './egg-moves.component';

describe('EggMovesComponent', () => {
  let component: EggMovesComponent;
  let fixture: ComponentFixture<EggMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EggMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EggMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
