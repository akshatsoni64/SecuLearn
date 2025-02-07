import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getTopics(): Observable<Topic[]> {
    let url = this.apiUrl + 'quiz/';
    console.log('getTopics URL:', url);
    return this.http.get<Topic[]>(url);
  }

  getTopic(id: string): Observable<Topic> {
    let url = this.apiUrl + `quiz?_id={id}`;
    console.log('getTopic URL:', url);
    return this.http.get<Topic>(url);
  }
}
