import { TestBed } from '@angular/core/testing';

import { TechnicalErrorsService } from './technical-errors.service';

describe('TechnicalErrorsService', () => {
  let service: TechnicalErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
