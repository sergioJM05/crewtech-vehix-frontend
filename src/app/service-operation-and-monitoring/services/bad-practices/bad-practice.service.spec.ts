import { TestBed } from '@angular/core/testing';

import { BadPracticeService } from './bad-practice.service';

describe('BadPracticeService', () => {
  let service: BadPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
