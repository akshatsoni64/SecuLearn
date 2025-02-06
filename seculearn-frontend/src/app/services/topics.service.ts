import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';

/*
const topics: Topic[] = [
  {
    name: 'Introduction to Web Security',
    description:
      'Web security is the practice of protecting websites and web applications from various types of online threats, such as hacking, phishing, and data breaches.',
  },
  {
    name: 'Cross-Site Scripting (XSS)',
    description:
      'Cross-Site Scripting (XSS) is a vulnerability where an attacker injects malicious scripts into web pages viewed by users.',
  },
  {
    name: 'SQL Injection',
    description:
      "SQL Injection is a code injection technique where an attacker exploits vulnerabilities in a web application's database query execution.",
  },
  {
    name: 'Cross-Site Request Forgery (CSRF)',
    description:
      'Cross-Site Request Forgery (CSRF) is an attack where a user is tricked into performing actions on a website without their consent.',
  },
  {
    name: 'Authentication and Authorization',
    description:
      "Authentication is verifying the identity of a user, while authorization is determining the user's access rights.",
  },
  {
    name: 'TLS/SSL and HTTPS',
    description:
      'TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are cryptographic protocols used to secure communication over the internet.',
  },
];
*/

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
