export interface Radical {
  character: string;
  strokes: number;
  meaning: Array<string>;
  position?: string;
  hiragana?: string;
  romanji?: string;
  examples?: Array<string>;
}

export interface PracticeRadical {
  radical: Radical;
  options: Array<string>;
  correctOption: string;
  hints?: HintSet;
}

export interface Settings {
  kanjiSettings: KanjiPracticeSettings;
  radicalSettings: RadicalPracticeSettings;
  optionAmount: number;
}

export interface RadicalPracticeSettings {
  radicalAmount: number;
  hiraganaHint: boolean;
  hiraganaOptions: boolean;
  meaningHint: boolean;
  romanjiHint: boolean;
  sortBy: sortBy;
  test: boolean;
}

export interface KanjiPracticeSettings {
  grade: grade;
}

export enum sortBy {
  Random,
  Frequency,
  StrokeCount,
}

export enum grade {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Eight,
}

export interface Kanji {
  kanji: string;
  grade: number | null;
  stroke_count: number;
  meanings: Array<string>;
  kun_readings: Array<string>;
  on_readings: Array<string>;
  name_readings: Array<string>;
  jlpt: number | null;
  unicode: string;
  heisig_en: string | null;
}

export interface PracticeKanji {
  kanjiObj: Kanji;
  options: Array<string>;
  correctOption: string;
  hints?: HintSet;
}

export interface KanjiGrade {
  characters: Array<String>;
  kanjis: Array<Kanji>;
}

export interface PracticeQuestion {
  displayString: string;
  options: OptionSet;
  hints: HintSet;
  correctAnswer: AnswerSet;
}

export interface AnswerSet {
  meaningAnswer?: string;
  hiraganaAnswer?: string;
}

export interface OptionSet {
  meaningOptions?: Array<string>;
  hiraganaOptions?: Array<string>;
}

export interface HintSet {
  hiraganaHint?: Array<string>;
  meaningHint?: Array<string>;
}
