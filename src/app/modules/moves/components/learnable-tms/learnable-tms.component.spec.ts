import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnableTMsComponent } from './learnable-tms.component';

describe('LearnableTMsComponent', () => {
  let component: LearnableTMsComponent;
  let fixture: ComponentFixture<LearnableTMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnableTMsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnableTMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
