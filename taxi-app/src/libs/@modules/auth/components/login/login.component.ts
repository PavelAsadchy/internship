import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AUTH_LOGIN_ACTION } from 'src/libs/@stores/auth-store/auth.actions';
import { IAuthState } from 'src/libs/@stores/auth-store/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<IAuthState>,
    private router: Router
  ) {}

  onSubmit(): void {
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(AUTH_LOGIN_ACTION({ user: payload }));
  }

  onSignupClick(): void {
    this.router.navigate(['login', 'signup']);
  }
}
