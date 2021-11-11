import { Component, OnInit } from '@angular/core';
import { KanjiPracticeSettings, PracticeKanji } from '../types';
import { Location } from '@angular/common';
import { SettingsService } from '../settings.service';
import { KanjiFactoryService } from '../kanji-factory.service';

@Component({
  selector: 'app-kanji-practice',
  templateUrl: './kanji-practice.component.html',
  styleUrls: ['./kanji-practice.component.scss'],
})
export class KanjiPracticeComponent implements OnInit {
  currentKanji: PracticeKanji = {
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
  streak: number = 0;
  settings: KanjiPracticeSettings = this.settingsService.defaultKanjiSetting;
  constructor(
    private _location: Location,
    private settingsService: SettingsService,
    private kanjiFactory: KanjiFactoryService
  ) {}

  ngOnInit(): void {
    this.currentKanji = this.kanjiFactory.generatePracticeObject(4);
  }

  goToNextKanji(event: boolean) {
    this.streak = event ? this.streak + 1 : 0;
    this.currentKanji = this.kanjiFactory.generatePracticeObject(4);
  }

  goBack(event: MouseEvent) {
    event.stopPropagation();
    this._location.back();
  }
}
