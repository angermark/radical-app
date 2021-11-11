import { TestBed } from '@angular/core/testing';

import { RadicalFactoryService } from './radical-factory.service';

describe('RadicalFactoryService', () => {
  let service: RadicalFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadicalFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
