import { TestBed } from '@angular/core/testing';

import { PronosticsService } from './pronostics.service';

describe('PronosticsService', () => {
  let service: PronosticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PronosticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
