import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IFilterParams,
  IQueryParams,
  ISortParams,
} from 'src/app/shared/models/query-params.model';
import { REFRESH_QUERY_PARAMS_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent {
  queryParams: IQueryParams;

  constructor(private store: Store<IBookingState>) {}

  refreshQueryParams(event: IQueryParams) {
    const queryParams: IQueryParams = {
      sorting: { ...event.sorting },
      filter: { ...event.filter },
    };

    console.log(Object.keys(event));
    // this.store.dispatch(REFRESH_QUERY_PARAMS_ACTION())
  }

  trigger() {}
}
