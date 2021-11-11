import { TestBed } from '@angular/core/testing';

import { KanjiPollingService } from './kanji-polling.service';

describe('KanjiPollingService', () => {
  let service: KanjiPollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiPollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
