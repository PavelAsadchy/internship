import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IServerResponse } from '../models/server-response.model';
import { IBooking } from '../models/booking.model';
import {
  IFilterParams,
  IPaginateParams,
  IQueryParams,
  ISortParams,
} from 'src/libs/@shared/models/query-params.model';
import { HttpClientService } from 'src/libs/@shared/services/http-client.service';
import { GenericService } from 'src/libs/@shared/services/generic.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { IAppsEnvironment } from 'src/environments/ienvironment.model';

@Injectable({
  providedIn: 'root',
})
export class BookingListService extends HttpClientService {
  databaseUrl: string;

  constructor(
    http: HttpClient,
    datePipe: DatePipe,
    genericService: GenericService
  ) {
    super(http, datePipe, genericService);
    this.databaseUrl = environment.apps.find(
      (app: IAppsEnvironment) => app.name === 'Booking'
    ).databaseUrl;
  }

  loadBookingsByQuery(queryParams: IQueryParams): Observable<IServerResponse> {
    return this.myGet<IBooking[]>({
      url: `${this.databaseUrl}.json`,
      search: queryParams,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    }).pipe(
      map((savedBookingsById) => {
        if (!savedBookingsById) return { bookings: [], totalLength: 0 };
        const savedBookingsWithId = Object.keys(savedBookingsById).map(
          (key: string) => ({
            ...savedBookingsById[key],
            id: key,
          })
        );

        const filteredBookingList = this.doFilter(
          savedBookingsWithId,
          queryParams.filter
        );

        const sortedBookingList = this.doSort(
          filteredBookingList,
          queryParams.sort
        );

        const totalLength = sortedBookingList.length;

        const paginatedBookingList = this.doPaginate(
          sortedBookingList,
          queryParams.paginate
        );

        return {
          bookings: paginatedBookingList,
          totalLength,
        };
      })
    );
  }

  getBookingById(bookingId: string): Observable<IBooking> {
    return this.myGet<IBooking>({
      url: `${this.databaseUrl}/${bookingId}.json`,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    }).pipe(
      map((selectedBooking: IBooking) => {
        return { ...selectedBooking, id: bookingId };
      })
    );
  }

  createBooking(newBookingOptions: IBooking): Observable<IBooking> {
    return this.myPost<IBooking>({
      url: `${this.databaseUrl}.json`,
      payload: newBookingOptions,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    }).pipe(
      map((response: any) => {
        return { ...newBookingOptions, id: response.name };
      })
    );
  }

  updateBooking(bookingOptions: IBooking): Observable<IBooking> {
    return this.myPatch<IBooking>({
      url: `${this.databaseUrl}/${bookingOptions.id}.json`,
      payload: bookingOptions,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    });
  }

  deleteBooking(bookingId: string): Observable<void> {
    return this.myDelete<void>({
      url: `${this.databaseUrl}/${bookingId}.json`,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    });
  }

  doFilter(data: IBooking[], queryParams: IFilterParams): IBooking[] {
    const filteredBookingList = data.filter((item: IBooking) => {
      return (
        this.doPriceFilter(queryParams.price, item.price) &&
        this.doSearch(queryParams.search, item.customerName) &&
        this.doSelectFilter(queryParams.statuses, item.status) &&
        this.doSelectFilter(queryParams.channels, item.bookingChannel) &&
        this.doSelectFilter(queryParams.vehicle, item.vehicle) &&
        this.doIsAfterFilter(queryParams.dateFrom, item.bookingTime) &&
        this.doIsBeforeFilter(queryParams.dateTo, item.bookingTime)
      );
    });

    return filteredBookingList;
  }

  doSort(data: IBooking[], queryParams: ISortParams): IBooking[] {
    if (!queryParams.field) return data;
    if (queryParams.field && queryParams.direction === 'asc') {
      return data.sort((a: IBooking, b: IBooking) => {
        if (a[queryParams.field] > b[queryParams.field]) return 1;
        if (a[queryParams.field] < b[queryParams.field]) return -1;
        return 0;
      });
    } else
      return data.sort((a: IBooking, b: IBooking) => {
        if (a[queryParams.field] > b[queryParams.field]) return -1;
        if (a[queryParams.field] < b[queryParams.field]) return 1;
        return 0;
      });
  }

  doPaginate(data: IBooking[], queryParams: IPaginateParams): IBooking[] {
    if (!data.length) return [];

    const paginatedData = data.slice(
      queryParams.pageIndex * queryParams.pageSize,
      queryParams.pageSize * (queryParams.pageIndex + 1)
    );

    if (paginatedData.length) {
      return paginatedData;
    } else {
      return this.doPaginate(data, {
        pageIndex: queryParams.pageIndex - 1,
        pageSize: queryParams.pageSize,
      });
    }
  }

  doPriceFilter(minPrice: number, item: number): boolean {
    return minPrice ? item > minPrice : true;
  }

  doSearch(searchValue: string, item: string): boolean {
    return searchValue
      ? item.toLowerCase().includes(searchValue.toLowerCase())
      : true;
  }

  doSelectFilter(selectedParams: string[], item: string): boolean {
    return selectedParams ? selectedParams.includes(item) : true;
  }

  doIsAfterFilter(dateFrom: string, item: string) {
    return moment(dateFrom).isValid()
      ? moment(item).isAfter(dateFrom)
      : moment(item).isAfter(this.dateMonthAgo());
  }

  doIsBeforeFilter(dateTo: string, item: string) {
    return moment(dateTo).isValid() ? moment(item).isBefore(dateTo) : true;
  }

  dateMonthAgo(): Moment {
    return moment().subtract(2, 'months');
  }
}
