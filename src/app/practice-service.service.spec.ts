import { TestBed } from '@angular/core/testing';

import { PracticeServiceService } from './practice-service.service';

describe('PracticeServiceService', () => {
  let service: PracticeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
