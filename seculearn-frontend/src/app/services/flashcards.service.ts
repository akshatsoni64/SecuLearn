import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Flashcard } from '../models/flashcards.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getFlashcards(): Observable<Flashcard[]> {
    let url = this.apiUrl + 'flashcard/';
    console.log("getFlashcards URL:", url);
    return this.http.get<Flashcard[]>(url);
  }
}
