import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { IQueryParams } from 'src/app/shared/models/query-params.model';
import { LOAD_BOOKINGS_BY_QUERY } from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_QUERY_PARAMS } from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit, OnDestroy {
  private sub: Subject<void> = new Subject<void>();

  constructor(private store: Store<IBookingState>) {}

  ngOnInit(): void {
    this.store
      .select(SELECT_QUERY_PARAMS)
      .pipe(skip(1), takeUntil(this.sub))
      .subscribe((bookingQueryParams: IQueryParams) => {
        this.store.dispatch(
          LOAD_BOOKINGS_BY_QUERY({ params: bookingQueryParams })
        );
      });
  }

  ngOnDestroy(): void {
    this.sub.next();
    this.sub.complete();
  }
}
