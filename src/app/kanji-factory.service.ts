import { Injectable } from '@angular/core';
import { HintSet, Kanji, KanjiGrade, PracticeKanji } from './types';
import { getRandomObjectFromList, setGrade, shuffle } from './utils';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class KanjiFactoryService {
  grade: KanjiGrade | undefined;

  constructor(private settings: SettingsService) {}

  generatePracticeObject(optionAmount: number): PracticeKanji {
    this.grade = setGrade(this.settings.getKanjiSettings().grade);
    const randomKanji: Kanji = getRandomObjectFromList(this.grade.kanjis);
    const correctOption: string =
      randomKanji.heisig_en || getRandomObjectFromList(randomKanji.meanings);
    let options: Array<string> = [correctOption];
    for (let i = 0; i < optionAmount - 1; i++) {
      options.push(
        getRandomObjectFromList(
          getRandomObjectFromList(this.grade.kanjis).meanings
        )
      );
    }
    const hints: HintSet = {
      hiraganaHint: randomKanji.kun_readings,
    };
    return {
      kanjiObj: randomKanji,
      options: shuffle(options),
      correctOption,
      hints,
    };
  }
}
