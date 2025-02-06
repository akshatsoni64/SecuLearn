import { Injectable } from '@angular/core';
import { Result } from '../models/result.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Leaderboard } from '../models/leaderboard.model';

/*
const users: User[] = [
  { name: 'Akshat', username: 'akshat', password: 'akshat' },
  { name: 'Dipen', username: 'dipen', password: 'dipen' },
  { name: 'Nihar', username: 'nihar', password: 'nihar' },
];

const results: Result[] = [
  { question_id: '1', user_id: '0', status: true },
  { question_id: '2', user_id: '0', status: true },
  { question_id: '3', user_id: '0', status: true },
  { question_id: '1', user_id: '1', status: true },
  { question_id: '2', user_id: '1', status: true },
  { question_id: '3', user_id: '1', status: false },
  { question_id: '1', user_id: '2', status: false },
  { question_id: '2', user_id: '2', status: true },
  { question_id: '3', user_id: '2', status: false },
];
*/

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
