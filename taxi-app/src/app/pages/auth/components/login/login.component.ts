import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  private sub: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder,
              private readonly authService: AuthService,
              private router: Router) { }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }

  onSubmit(): void {
    this.authService.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    })
    .pipe(
      takeUntil(this.sub)
    ).subscribe(success => {
      if (success) {
        this.router.navigate(['/board']);
      }
    });
  }
}
