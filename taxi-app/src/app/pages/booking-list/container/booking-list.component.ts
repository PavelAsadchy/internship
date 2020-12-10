import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DEFAULT_QUERY_PARAMS } from 'src/app/shared/consts/booking-query.consts';
import {
  IFilterParams,
  IQueryParams,
  IRefreshQueryEvent,
  ISortParams,
} from 'src/app/shared/models/query-params.model';
import { REFRESH_QUERY_PARAMS_ACTION } from 'src/app/shared/stores/booking-store/booking.actions';
import { SELECT_BOOKING_LOADING } from 'src/app/shared/stores/booking-store/booking.selector';
import { IBookingState } from 'src/app/shared/stores/booking-store/booking.state';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  isLoading$: Observable<boolean>;

  queryParams: IQueryParams = DEFAULT_QUERY_PARAMS;

  constructor(private store: Store<IBookingState>) {}

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(SELECT_BOOKING_LOADING));
  }

  refreshQueryParams(event: IRefreshQueryEvent) {
    this.queryParams[event.type] = event.params;
    this.store.dispatch(REFRESH_QUERY_PARAMS_ACTION(
      { params: this.queryParams }
    ));

    // console.log(this.queryParams);
    // this.store.dispatch(REFRESH_QUERY_PARAMS_ACTION())
  }

  trigger() {}
}
