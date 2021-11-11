import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiPracticeComponent } from './kanji-practice.component';

describe('KanjiPracticeComponent', () => {
  let component: KanjiPracticeComponent;
  let fixture: ComponentFixture<KanjiPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjiPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
