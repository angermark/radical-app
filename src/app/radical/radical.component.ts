import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SettingsService } from '../settings.service';
import { PracticeRadical, RadicalPracticeSettings } from '../types';
import { capitalizeFirstLetter } from '../utils';

@Component({
  selector: 'app-radical',
  templateUrl: './radical.component.html',
  styleUrls: ['./radical.component.scss'],
})
export class RadicalComponent implements OnInit {
  @Input() practiceObject: PracticeRadical = {
    radical: { character: 'string', strokes: 0, meaning: [] },
    options: [''],
    correctOption: '',
  };
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  selectedOption: any = null;
  settings: RadicalPracticeSettings = this.settingsService.getRadicalSettings();

  constructor(private settingsService: SettingsService) {}

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
