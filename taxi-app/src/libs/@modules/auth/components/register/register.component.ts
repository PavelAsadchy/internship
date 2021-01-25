import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AUTH_SIGNUP_ACTION } from 'src/libs/@stores/auth-store/auth.actions';
import { IAuthState } from 'src/libs/@stores/auth-store/auth.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  signupForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<IAuthState>,
    private router: Router
  ) {}

  onSubmit(): void {
    const payload = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    };
    this.store.dispatch(AUTH_SIGNUP_ACTION({ newUser: payload }));
  }

  onLoginClick(): void {
    this.router.navigate(['login']);
  }
}
