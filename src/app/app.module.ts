import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RadicalComponent } from './radical/radical.component';
import { KanjiPracticeComponent } from './kanji-practice/kanji-practice.component';
import { KanjiComponent } from './kanji/kanji.component';
import { RadicalPracticeComponent } from './radical-practice/radical-practice.component';
import { QuestionComponent } from './question/question.component';
@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    DashboardComponent,
    RadicalComponent,
    KanjiPracticeComponent,
    KanjiComponent,
    RadicalPracticeComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
