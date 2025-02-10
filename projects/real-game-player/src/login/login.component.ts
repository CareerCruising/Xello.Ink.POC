import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserStore } from '../../store/user.store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginLoader: boolean = false;
  tokenInProgress: boolean = false;
  username !: string;
  password !: string;
  remember !: boolean;

  userStore = inject(UserStore);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  submit() {
    const payload = {
      username: this.username,
      password: this.password,
      remember: this.remember
    };
    this.tokenInProgress = true;

    this.authService.login(payload).then(res => {
      console.log(res);
      this.tokenInProgress = false;
      this.userStore.load();
      this.router.navigate(['']);
    }, err => {
      this.tokenInProgress = false;
    });
  }
}
