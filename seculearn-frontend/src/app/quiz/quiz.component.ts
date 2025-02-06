import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';
import { CommonModule } from '@angular/common';
import { materialImports, routerImports } from '../common.imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routerImports,
    materialImports,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  readonly panelOpenState = signal(false);
  quizAnswers: any = {};
  quizResult: any = {};
  quizs!: Observable<Quiz[]>;

  constructor(
    private service: QuizService,
    private resultService: ResultService,
    private router: Router
  ) {
    console.log('QuizComponent constructor');
  }

  ngOnInit() {
    this.quizs = this.service.getQuizs();
  }

  change(event: any, id: string, correctAnswer: string) {
    this.quizAnswers[id] = event.value;
    this.quizResult[id] = event.value === correctAnswer;
    console.log('change', id, event.value);
  }

  check() {
    console.log(this.quizAnswers);
    this.resultService.saveResult(this.quizAnswers);
    alert('Quiz submitted');
    this.router.navigate(['/flashcards']);
  }
}
