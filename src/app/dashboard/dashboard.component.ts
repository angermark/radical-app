import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { KanjiPollingService } from '../kanji-polling.service';
import { SettingsService } from '../settings.service';
import { KanjiPracticeSettings, RadicalPracticeSettings } from '../types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  settings: RadicalPracticeSettings = this.settingsService.getRadicalSettings();
  kanjiSettings: KanjiPracticeSettings =
    this.settingsService.getKanjiSettings();

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private api: ApiService,
    private polling: KanjiPollingService
  ) {}

  ngOnInit(): void {}

  startRadicalPractice(signs: number, options: number) {
    this.settings.radicalAmount = signs;
    this.settingsService.setRadicalSettings(this.settings);
    this.router.navigateByUrl('/practice-radical');
  }

  startKanjiPractice(grade: number) {
    this.kanjiSettings.grade = Number(grade);
    this.settingsService.setKanjiSettings(this.kanjiSettings);
    this.router.navigateByUrl('/practice-kanji');
  }

  startPractice(practiceType: string) {
    this.router.navigate(['/practice', practiceType]);
  }
}
