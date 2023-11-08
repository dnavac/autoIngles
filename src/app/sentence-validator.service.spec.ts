import { TestBed } from '@angular/core/testing';

import { SentenceValidatorService } from './sentence-validator.service';

describe('SentenceValidatorService', () => {
  let service: SentenceValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentenceValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
