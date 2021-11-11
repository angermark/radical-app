import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PracticeQuestion } from '../types';
import { capitalizeFirstLetter } from '../utils';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() practiceObject: PracticeQuestion = {
    displayString: '',
    hints: {},
    options: {},
    correctAnswer: {},
  };

  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();
  selectedOption: any = null;

  constructor() {}

  clickOption(option: string) {
    this.selectedOption = {
      value: option,
      correct: option === this.practiceObject.correctAnswer.meaningAnswer,
    };
  }

  goToNext() {
    this.onSubmit.emit(this.selectedOption && this.selectedOption.correct);
    this.selectedOption = null;
  }

  capitalize(string: string) {
    return capitalizeFirstLetter(string);
  }

  ngOnInit(): void {
    console.log(this.practiceObject);
  }
}
