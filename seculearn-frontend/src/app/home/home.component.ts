import { Component } from '@angular/core';
import { materialImports, routerImports } from '../common.imports';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, routerImports, materialImports],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  AuthForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private service: UserService) {}

  onSubmit() {
    if (this.AuthForm.invalid) {
      alert('Credentials required!');
      return;
    }
    this.service.authenticate(
      this.AuthForm.value.username || '',
      this.AuthForm.value.password || ''
    );
  }
}
