import { Injectable } from '@angular/core';
import {
  KanjiPracticeSettings,
  RadicalPracticeSettings,
  Settings,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  defaultRadicalSettings: RadicalPracticeSettings = {
    radicalAmount: 193,
    hiraganaHint: false,
    hiraganaOptions: false,
    meaningHint: false,
    romanjiHint: false,
    sortBy: 0,
    test: false,
  };

  defaultKanjiSetting: KanjiPracticeSettings = {
    grade: 0,
  };

  defaultSettings: Settings = {
    kanjiSettings: this.defaultKanjiSetting,
    radicalSettings: this.defaultRadicalSettings,
    optionAmount: 4,
  };

  currentSettings: Settings = this.defaultSettings;

  constructor() {}

  setRadicalSettings(settings: RadicalPracticeSettings) {
    this.currentSettings.radicalSettings = settings;
  }

  getRadicalSettings(): RadicalPracticeSettings {
    return this.currentSettings.radicalSettings;
  }

  setKanjiSettings(settings: KanjiPracticeSettings) {
    this.currentSettings.kanjiSettings = settings;
  }

  getKanjiSettings(): KanjiPracticeSettings {
    return this.currentSettings.kanjiSettings;
  }

  getSettings(): Settings {
    return this.currentSettings;
  }
}
