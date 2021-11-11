import { Injectable } from '@angular/core';
import { KanjiFactoryService } from './kanji-factory.service';
import { RadicalFactoryService } from './radical-factory.service';
import { SettingsService } from './settings.service';
import {
  AnswerSet,
  HintSet,
  OptionSet,
  PracticeKanji,
  PracticeQuestion,
  PracticeRadical,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class PracticeServiceService {
  constructor(
    private radicalFactory: RadicalFactoryService,
    private kanjiFactory: KanjiFactoryService,
    private settingsService: SettingsService
  ) {}

  generateQuestion(practiceType: string): PracticeQuestion {
    const settings = this.settingsService.getSettings();
    let displayString = '';
    let options: OptionSet = {};
    let hints: HintSet = {};
    let correctAnswer: AnswerSet = {};

    if (practiceType === 'kanji') {
      const kanjiObject: PracticeKanji =
        this.kanjiFactory.generatePracticeObject(settings.optionAmount);
      displayString = kanjiObject.kanjiObj.kanji;
      options = { meaningOptions: kanjiObject.options };
      correctAnswer = { meaningAnswer: kanjiObject.correctOption };
      hints = kanjiObject.hints ?? {};
    } else if (practiceType === 'radical') {
      const radicalObject: PracticeRadical =
        this.radicalFactory.generatePracticeObject(settings.optionAmount);
      displayString = radicalObject.radical.character;
      options = { meaningOptions: radicalObject.options };
      correctAnswer = { meaningAnswer: radicalObject.correctOption };
      hints = radicalObject.hints ?? {};
    }

    return {
      displayString,
      options,
      hints,
      correctAnswer,
    };
  }
}
