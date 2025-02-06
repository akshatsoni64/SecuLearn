import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Flashcard } from '../models/flashcards.models';
import { Observable } from 'rxjs';

/*
const flashcards: Flashcard[] = [
  {
    topic_id:"",
    title: "What is web security?",
    description: "Web security is the practice of protecting websites and web applications from various types of online threats, such as hacking, phishing, and data breaches."
  },
  {
    topic_id:"",
    title: "Why is web security important?",
    description: "Web security is important because it ensures the confidentiality, integrity, and availability of data, protecting users and organizations from cyber-attacks."
  },
  {
    topic_id:"",
    title: "What are some common web security threats?",
    description: "Common threats include cross-site scripting (XSS), SQL injection, cross-site request forgery (CSRF), and data breaches."
  },
  {
    topic_id:"",
    title: "What is XSS?",
    description: "Cross-Site Scripting (XSS) is a vulnerability where an attacker injects malicious scripts into web pages viewed by users."
  },
  {
    topic_id:"",
    title: "How can XSS be prevented?",
    description: "By sanitizing and escaping user inputs, using Content Security Policy (CSP), and applying proper output encoding."
  },
  {
    topic_id:"",
    title: "What is SQL Injection?",
    description: "SQL Injection is a code injection technique where an attacker exploits vulnerabilities in a web application's database query execution."
  },
  {
    topic_id:"",
    title: "How is SQL Injection prevented?",
    description: "Use prepared statements, parameterized queries, and proper input validation."
  },
  {
    topic_id:"",
    title: "What is CSRF?",
    description: "Cross-Site Request Forgery (CSRF) is an attack where a user is tricked into performing actions on a website without their consent."
  },
  {
    topic_id:"",
    title: "How can CSRF be prevented?",
    description: "Use anti-CSRF tokens, same-site cookies, and check for the Referer header."
  },
  {
    topic_id:"",
    title: "What is the difference between authentication and authorization?",
    description: "Authentication is verifying the identity of a user, while authorization is determining the user's access rights."
  }
];
*/

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
