import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  apiUrl = 'http://localhost:3000/quiz/';
  quizs: EventEmitter<Quiz[]> = new EventEmitter<Quiz[]>();

  constructor(private http: HttpClient) {}

  getQuizs(): Observable<Quiz[]> {
    let url = this.apiUrl;
    console.log('getQuizs URL:', url);
    return this.http.get<Quiz[]>(url);
  }
}
