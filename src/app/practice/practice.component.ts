import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SettingsService } from '../settings.service';
import { PracticeQuestion } from '../types';
import { ActivatedRoute } from '@angular/router';
import { PracticeServiceService } from '../practice-service.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  currentQuestion: PracticeQuestion = {
    displayString: '',
    hints: {},
    options: {},
    correctAnswer: {},
  };
  streak: number = 0;
  practiceType: string = '';
  private sub: any;

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private settingsService: SettingsService,
    private practiceService: PracticeServiceService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.practiceType = params['type'];
      this.currentQuestion = this.practiceService.generateQuestion(
        this.practiceType
      );
      console.log(this.currentQuestion);
    });
  }

  goToNextQuestion(event: boolean) {
    this.streak = event ? this.streak + 1 : 0;
    this.currentQuestion = this.practiceService.generateQuestion(
      this.practiceType
    );
  }

  goBack(event: MouseEvent) {
    event.stopPropagation();
    this._location.back();
  }
}
