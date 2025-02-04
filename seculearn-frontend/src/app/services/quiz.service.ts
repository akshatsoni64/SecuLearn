import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getQuizs(): Observable<Quiz[]> {
    let url = this.apiUrl + 'quiz/';
    console.log('getQuizs URL:', url);
    return this.http.get<Quiz[]>(url);
  }
}
