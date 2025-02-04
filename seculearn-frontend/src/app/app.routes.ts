import { Routes } from '@angular/router';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { QuizComponent } from './quiz/quiz.component';

export const routes: Routes = [
  // {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'flashcards', component: FlashcardsComponent},
  {path: 'quiz', component: QuizComponent},
];
