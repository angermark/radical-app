import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class KanjiPollingService {
  constructor(private api: ApiService) {}

  async getGradeData(grade: string) {
    return this.api
      .getGrade(grade)
      .toPromise()
      .then(async (e) => {
        let arr = [];
        for (let i = 0; i < e.length; i++) {
          let kanjObj = await this.api.getKanji(e[i]).toPromise();
          arr.push(kanjObj);
        }
        return arr;
      });
  }

  async getGrades() {
    let grades = [
      'grade-1',
      'grade-2',
      'grade-3',
      'grade-4',
      'grade-5',
      'grade-6',
      'grade-7',
      'grade-8',
    ];
    for (let grade in grades) {
      await this.api
        .getGrade(grades[grade])
        .toPromise()
        .then((e) => {
          let j = JSON.stringify(e);
          console.log(j);
        });
    }
  }
}
