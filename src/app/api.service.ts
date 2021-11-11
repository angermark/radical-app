import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kanji } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  pollingUri = 'https://kanjiapi.dev/v1';

  constructor(private http: HttpClient) {}

  getKanji(character: string) {
    return this.http.get(
      `${this.pollingUri}/kanji/${character}`
    ) as Observable<Kanji>;
  }

  getGrade(grade: string) {
    return this.http.get(`${this.pollingUri}/kanji/${grade}`) as Observable<
      Array<string>
    >;
  }
}
