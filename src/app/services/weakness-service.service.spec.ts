import { TestBed } from '@angular/core/testing';

import { WeaknessServiceService } from './weakness-service.service';

describe('WeaknessServiceService', () => {
  let service: WeaknessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaknessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
