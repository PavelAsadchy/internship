import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SELECT_CURRENT_BOOKING_ID } from '../stores/booking-store/booking.selector';
import { IBookingState } from '../stores/booking-store/booking.state';

@Injectable({
  providedIn: 'root',
})
export class BookingEditGuard implements CanActivate {
  constructor(private store: Store<IBookingState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let selectedBookingId$: string;
    this.store
      .pipe(select(SELECT_CURRENT_BOOKING_ID))
      .subscribe((data: string) => {
        selectedBookingId$ = data;
        console.log(selectedBookingId$);
      });
    if (selectedBookingId$) {
      return true;
    } else {
      this.router.navigate(['board', 'booking-list']);
    }
  }
}
