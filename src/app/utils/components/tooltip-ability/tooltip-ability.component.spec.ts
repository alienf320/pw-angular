import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAbilityComponent } from './tooltip-ability.component';

describe('TooltipAbilityComponent', () => {
  let component: TooltipAbilityComponent;
  let fixture: ComponentFixture<TooltipAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipAbilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
