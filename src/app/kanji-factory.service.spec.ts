import { TestBed } from '@angular/core/testing';

import { KanjiFactoryService } from './kanji-factory.service';

describe('KanjiFactoryService', () => {
  let service: KanjiFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
