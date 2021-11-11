import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PracticeRadical, RadicalPracticeSettings } from '../types';
import { SettingsService } from '../settings.service';
import { RadicalFactoryService } from '../radical-factory.service';

@Component({
  selector: 'app-radical-practice',
  templateUrl: './radical-practice.component.html',
  styleUrls: ['./radical-practice.component.scss'],
})
export class RadicalPracticeComponent implements OnInit {
  currentRadical: PracticeRadical = {
    radical: { character: 'string', strokes: 0, meaning: [] },
    options: [''],
    correctOption: '',
  };
  streak: number = 0;
  settings: RadicalPracticeSettings = this.settingsService.getRadicalSettings();
  constructor(
    private _location: Location,
    private settingsService: SettingsService,
    private radicalsFactory: RadicalFactoryService
  ) {}

  ngOnInit(): void {
    this.currentRadical = this.radicalsFactory.generatePracticeObject(4);
  }

  goToNextRadical(event: boolean) {
    this.streak = event ? this.streak + 1 : 0;
    this.currentRadical = this.radicalsFactory.generatePracticeObject(4);
  }

  goBack(event: MouseEvent) {
    event.stopPropagation();
    this._location.back();
  }
}
