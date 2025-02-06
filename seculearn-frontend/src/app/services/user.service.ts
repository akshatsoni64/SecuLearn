import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000/';
  isAuthed: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {}

  async authenticate(username: string, password: string) {
    let url = this.apiUrl + 'auth';
    console.log('authenticate URL:', url);
    let auth = await this.http.post(url, { username, password });
    auth.subscribe((data: any) => {
      if (data['status'] == 'success') {
        localStorage.setItem('username', username);
        localStorage.setItem('userid', data['userid']);
        this.isAuthed.emit(true);
        this.router.navigate(['/quiz']);
        return;
      }
      alert('Invalid credentials!');
      return;
    });
  }

  isAuthenticated(){
    this.isAuthed.emit(this.getUsername() !== null);
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('username');
    this.isAuthed.emit(false);
    this.router.navigate(['/']);
  }
}
