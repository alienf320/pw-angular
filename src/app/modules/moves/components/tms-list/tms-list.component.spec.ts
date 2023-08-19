import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMsListComponent } from './tms-list.component';

describe('TMsListComponent', () => {
  let component: TMsListComponent;
  let fixture: ComponentFixture<TMsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TMsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TMsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
