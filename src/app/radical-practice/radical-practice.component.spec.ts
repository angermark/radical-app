import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalPracticeComponent } from './radical-practice.component';

describe('RadicalPracticeComponent', () => {
  let component: RadicalPracticeComponent;
  let fixture: ComponentFixture<RadicalPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadicalPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadicalPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
