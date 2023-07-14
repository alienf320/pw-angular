import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatsOverlayComponent } from './edit-stats-overlay.component';

describe('EditStatsOverlayComponent', () => {
  let component: EditStatsOverlayComponent;
  let fixture: ComponentFixture<EditStatsOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStatsOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
