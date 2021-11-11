import { Injectable } from '@angular/core';
import data from '../assets/data/radicals.json';
import {
  AnswerSet,
  HintSet,
  OptionSet,
  PracticeRadical,
  Radical,
} from './types';
import { getRandomObjectFromList, shuffle } from './utils';

@Injectable({
  providedIn: 'root',
})
export class RadicalFactoryService {
  radicalsList: Array<Radical> = data.radicals;
  radicalsAvailable: Array<Radical> = data.radicals;
  radicalsTaken: Array<Radical> = data.radicals;
  constructor() {}

  generatePracticeObject(optionAmount: number): PracticeRadical {
    const randomRadical: Radical = getRandomObjectFromList(this.radicalsList);
    const correctOption: string = getRandomObjectFromList(
      randomRadical.meaning
    );
    let options: Array<string> = [correctOption];
    for (let i = 0; i < optionAmount - 1; i++) {
      options.push(
        getRandomObjectFromList(
          getRandomObjectFromList(this.radicalsList).meaning
        )
      );
    }
    const hints: HintSet = {
      hiraganaHint: randomRadical.hiragana ? [randomRadical.hiragana] : [],
    };
    return {
      radical: randomRadical,
      options: shuffle(options),
      correctOption,
      hints: hints,
    };
  }

  getRandomRadical(): Radical {
    const randomRadical: Radical = getRandomObjectFromList(
      this.radicalsAvailable
    );
    const randomIndex: number = this.radicalsAvailable.indexOf(randomRadical);
    if (randomIndex > -1) {
      this.radicalsAvailable.splice(randomIndex, 1);
      this.radicalsTaken.push(randomRadical);
    }
    return randomRadical;
  }

  getRandomOptions(
    optionAmount: number,
    answer: AnswerSet,
    meaning: boolean,
    hiragana: boolean
  ) {
    let options: OptionSet = {
      hiraganaOptions: [],
      meaningOptions: [],
    };
    if (meaning && answer.meaningAnswer) {
      options.meaningOptions = this.createUniqueOptions(
        optionAmount,
        answer.meaningAnswer,
        'meaning'
      );
    }
    if (hiragana && answer.hiraganaAnswer) {
      options.hiraganaOptions = this.createUniqueOptions(
        optionAmount,
        answer.hiraganaAnswer,
        'hiragana'
      );
    }
    return options;
  }

  createUniqueOptions(
    optionAmount: number,
    answer: string,
    optionType: string
  ): Array<string> {
    let i = 0;
    let arr = [];
    arr.push(answer);
    while (i < optionAmount) {
      const radical: Radical = getRandomObjectFromList(
        this.radicalsList
      ) as Radical;
      let option: string = '';
      if (optionType === 'meaning') {
        option = getRandomObjectFromList(radical.meaning);
      } else if (optionType === 'hiragana') {
        option = radical.hiragana ?? '';
      }
      if (arr.indexOf(option) === -1 && option && option.length > 0) {
        arr.push(option);
        i++;
      }
    }
    return shuffle(arr);
  }
}
