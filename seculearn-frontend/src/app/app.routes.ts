import { Routes } from '@angular/router';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { ScannerComponent } from './scanner/scanner.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'flashcards', component: FlashcardsComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'scan', component: ScannerComponent},
];
