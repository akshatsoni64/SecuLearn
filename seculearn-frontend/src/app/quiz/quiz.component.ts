import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  readonly panelOpenState = signal(false);

  quizs!: Observable<Quiz[]>;
  constructor(private service: QuizService) {
    console.log('QuizComponent constructor');
  }

  ngOnInit(): void {
    this.quizs = this.service.getQuizs();
  }
}
