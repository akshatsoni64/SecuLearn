import { Injectable } from '@angular/core';
import { Result } from '../models/result.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Leaderboard } from '../models/leaderboard.model';


@Injectable({
  providedIn: 'root',
})
export class ResultService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.apiUrl + 'result/');
  }

  getLeaderboard(): Observable<Leaderboard[]> {
    return this.http.get<Leaderboard[]>(this.apiUrl + 'leaderboard/');
  }

  saveResult(quizResult: any[]){
    for(let i=0; i<quizResult.length; i++){
      this.http.post(this.apiUrl + 'result/', {
        question_id: quizResult[i][0],
        user_id: localStorage.getItem('userid'),
        status: quizResult[i][1],
      }).subscribe();
    }
  }
}
