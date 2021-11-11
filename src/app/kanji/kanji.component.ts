import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PracticeKanji, PracticeRadical } from '../types';
import { capitalizeFirstLetter } from '../utils';

@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.scss'],
})
export class KanjiComponent implements OnInit {
  @Input() practiceObject: PracticeKanji = {
    kanjiObj: {
      kanji: '',
      grade: 0,
      stroke_count: 0,
      meanings: [''],
      kun_readings: [''],
      on_readings: [''],
      name_readings: [''],
      jlpt: 0,
      unicode: '',
      heisig_en: '',
    },
    options: [''],
    correctOption: '',
  };
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();
  selectedOption: any = null;
  constructor() {}

  clickOption(option: string) {
    this.selectedOption = {
      value: option,
      correct: option === this.practiceObject.correctOption,
    };
  }

  goToNext() {
    this.onSubmit.emit(this.selectedOption && this.selectedOption.correct);
    this.selectedOption = null;
  }

  capitalize(string: string) {
    return capitalizeFirstLetter(string);
  }

  ngOnInit(): void {}
}
