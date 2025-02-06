import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Observable } from 'rxjs';

/*
const quizzes: Quiz[] = [
  {
    id: '1',
    topic_id: '1',
    question: 'Which of the following is a common threat to web applications?',
    option_1: 'DDoS attacks',
    option_2: 'SQL Injection',
    option_3: 'Power failure',
    option_4: 'Network latency',
    correct_option: '2',
  },
  {
    id: '2',
    topic_id: '1',
    question: 'What is the primary goal of web security?',
    option_1: 'To improve website performance',
    option_2: 'To protect user data from unauthorized access',
    option_3: "To increase the website's traffic",
    option_4: 'To ensure high availability',
    correct_option: '2',
  },
  {
    id: '3',
    topic_id: '1',
    question: 'Which of these tools can be used for web security testing?',
    option_1: 'Google Analytics',
    option_2: 'Burp Suite',
    option_3: 'Photoshop',
    option_4: 'WordPress',
    correct_option: '2',
  },
];
const quiz2: Quiz[] = [
  {
    id: '4',
    topic_id: '2',
    question: 'What is the main goal of an XSS attack?',
    option_1: 'To crash the server',
    option_2: 'To steal cookies or session tokens',
    option_3: 'To overload the server with traffic',
    option_4: 'To break the encryption',
    correct_option: '2',
  },
  {
    id: '5',
    topic_id: '2',
    question: 'Which of the following is a type of XSS attack?',
    option_1: 'SQL Injection',
    option_2: 'Reflected XSS',
    option_3: 'CSRF',
    option_4: 'Phishing',
    correct_option: '2',
  },
  {
    id: '6',
    topic_id: '2',
    question: 'Which technique can help mitigate XSS vulnerabilities?',
    option_1: 'Using a WYSIWYG editor',
    option_2: 'Input validation and output encoding',
    option_3: 'Using JavaScript libraries',
    option_4: 'Enabling HTTP caching',
    correct_option: '2',
  },
  {
    id: '7',
    topic_id: '3',
    question: 'What is the main danger of SQL Injection?',
    option_1: 'It causes network latency',
    option_2:
      'It allows an attacker to manipulate or retrieve sensitive data from a database',
    option_3: 'It prevents users from logging in',
    option_4: 'It causes web pages to load slower',
    correct_option: '2',
  },
  {
    id: '8',
    topic_id: '3',
    question: 'Which of the following is a way to prevent SQL Injection?',
    option_1: 'Using a strong password',
    option_2: 'Using parameterized queries',
    option_3: 'Encrypting database backups',
    option_4: 'Disabling HTTP caching',
    correct_option: '2',
  },
  {
    id: '9',
    topic_id: '3',
    question: 'Which of the following is NOT a common SQL Injection technique?',
    option_1: 'Union-based',
    option_2: 'Error-based',
    option_3: 'Time-based blind',
    option_4: 'Layered DNS',
    correct_option: '4',
  },
  {
    id: '10',
    topic_id: '4',
    question: 'What is the goal of a CSRF attack?',
    option_1: 'To inject malicious scripts into a web page',
    option_2: 'To trick a user into making a request without their knowledge',
    option_3: 'To overload a server with requests',
    option_4: "To steal the user's credentials",
    correct_option: '2',
  },
];
*/

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
