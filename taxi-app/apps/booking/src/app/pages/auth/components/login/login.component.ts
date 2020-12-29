import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AUTH_LOGIN_ACTION } from 'apps/booking/src/app/shared/stores/auth-store/auth.actions';
import { IAuthState } from 'apps/booking/src/app/shared/stores/auth-store/auth.state';

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

  constructor(private fb: FormBuilder, private store: Store<IAuthState>) {}

  onSubmit(): void {
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(AUTH_LOGIN_ACTION({ user: payload }));
  }
}
