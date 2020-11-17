import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthLoginAction } from 'src/app/shared/store/auth-store/auth.actions';

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

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit(): void {
    const payload = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(new AuthLoginAction({ user: payload }));
  }
}
