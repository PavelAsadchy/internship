import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { skip, takeUntil } from 'rxjs/operators';
import { IQueryParams } from 'src/libs/@shared/models/query-params.model';
import { UnsubscribeService } from 'src/libs/@shared/services/unsubscribe.service';
import { LOAD_BOOKINGS_BY_QUERY } from 'src/apps/booking/src/app/shared/stores/booking-store/booking.actions';
import { SELECT_QUERY_PARAMS } from 'src/apps/booking/src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/apps/booking/src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit, OnDestroy {
  constructor(
    private readonly unsubscribeService: UnsubscribeService,
    private store: Store<IBookingState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(SELECT_QUERY_PARAMS)
      .pipe(skip(1), takeUntil(this.unsubscribeService.subscription))
      .subscribe((bookingQueryParams: IQueryParams) => {
        this.store.dispatch(
          LOAD_BOOKINGS_BY_QUERY({ params: bookingQueryParams })
        );
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
  }
}
