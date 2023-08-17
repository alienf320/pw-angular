import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAnalyticsComponent } from './team-analytics.component';

describe('TeamAnalyticsComponent', () => {
  let component: TeamAnalyticsComponent;
  let fixture: ComponentFixture<TeamAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
