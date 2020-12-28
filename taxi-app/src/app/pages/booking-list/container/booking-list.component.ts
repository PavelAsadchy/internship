import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { skip, takeUntil } from 'rxjs/operators';
import { IQueryParams } from 'src/app/shared/models/query-params.model';
import { UnsubscribeService } from 'src/app/shared/services/unsubscribe.service';
import {
  LOAD_BOOKINGS_BY_QUERY,
  REFRESH_QUERY_PARAMS_ACTION,
} from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_QUERY_PARAMS } from 'src/app/shared/stores/booking-store/booking.selector';
import {
  DEFAULT_QUERY_PARAMS,
  IBookingState,
} from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent extends UnsubscribeService implements OnInit {
  constructor(private store: Store<IBookingState>) {
    super();
  }

  ngOnInit(): void {
    this.store
      .select(SELECT_QUERY_PARAMS)
      .pipe(skip(1), takeUntil(this.unsubscribe))
      .subscribe((bookingQueryParams: IQueryParams) => {
        this.store.dispatch(
          LOAD_BOOKINGS_BY_QUERY({ params: bookingQueryParams })
        );
      });
  }

  ngOnDestroy(): void {
    this.store.dispatch(
      REFRESH_QUERY_PARAMS_ACTION({ params: DEFAULT_QUERY_PARAMS })
    );
  }
}
