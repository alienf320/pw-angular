import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMsComponent } from './tms.component';

describe('TMsComponent', () => {
  let component: TMsComponent;
  let fixture: ComponentFixture<TMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TMsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
