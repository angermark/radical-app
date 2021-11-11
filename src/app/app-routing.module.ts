import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanjiPracticeComponent } from './kanji-practice/kanji-practice.component';
import { PracticeComponent } from './practice/practice.component';
import { RadicalPracticeComponent } from './radical-practice/radical-practice.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'practice/:type',
    component: PracticeComponent,
  },
  {
    path: 'practice-kanji',
    component: KanjiPracticeComponent,
  },
  {
    path: 'practice-radical',
    component: RadicalPracticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
