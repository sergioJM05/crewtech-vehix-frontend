import { TestBed } from '@angular/core/testing';

import { SimpleIssuesService } from './simple-issues.service';

describe('SimpleIssuesService', () => {
  let service: SimpleIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
