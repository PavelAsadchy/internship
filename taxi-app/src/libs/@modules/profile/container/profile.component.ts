import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILoggedInUser } from 'src/libs/@shared/models/user-logged.model';
import { SELECT_AUTH_USER_PROFILE } from 'src/libs/@stores/auth-store/auth.selectors';
import { IAuthState } from 'src/libs/@stores/auth-store/auth.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$: Observable<ILoggedInUser>;

  constructor(private store: Store<IAuthState>, private location: Location) {}

  ngOnInit(): void {
    this.profile$ = this.store.select(SELECT_AUTH_USER_PROFILE);
  }

  onReturn(): void {
    this.location.back();
  }
}
