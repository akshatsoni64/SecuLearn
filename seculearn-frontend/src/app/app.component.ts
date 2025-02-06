import { Component, OnInit } from '@angular/core';
import { materialImports, routerImports } from './common.imports';
import { ResultService } from './services/result.service';
import { Leaderboard } from './models/leaderboard.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, routerImports, materialImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isAuthenticated!: boolean;
  leaderboardData!: Observable<Leaderboard[]>;

  constructor(
    private leaderboard: ResultService,
    private userService: UserService
  ) {
    this.isAuthenticated = this.isAuthed();
    this.userService.isAuthed.subscribe(
      (authed) => (this.isAuthenticated = authed)
    );
  }

  ngOnInit() {
    this.leaderboardData = this.leaderboard.getLeaderboard();
  }

  isAuthed() {
    return this.userService.getUsername() !== null;
  }

  logout() {
    this.userService.logout();
  }
}
