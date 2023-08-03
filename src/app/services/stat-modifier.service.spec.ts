import { TestBed } from '@angular/core/testing';

import { StatModifierService } from './stat-modifier.service';

describe('StatModifierService', () => {
  let service: StatModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
