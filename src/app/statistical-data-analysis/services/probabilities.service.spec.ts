import { TestBed } from '@angular/core/testing';

import { ProbabilitiesService } from './probabilities.service';

describe('ProbabilitiesService', () => {
  let service: ProbabilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbabilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
