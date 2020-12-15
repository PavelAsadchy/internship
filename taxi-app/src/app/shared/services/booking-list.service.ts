import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DATABASE_URL } from '../consts/app.consts';
import { IServerResponse } from '../models/server-response.model';
import { IBooking } from '../models/booking.model';
import {
  IFilterParams,
  IPaginateParams,
  IQueryParams,
  ISortParams,
} from '../models/query-params.model';

@Injectable({
  providedIn: 'root',
})
export class BookingListService {
  private http: HttpClient;

  constructor(private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  loadBookings(): Observable<IServerResponse> {
    return this.http.get<IBooking[]>(`${DATABASE_URL}.json`).pipe(
      map((savedBookings: IBooking[]) => {
        if (savedBookings) {
          const bookings = Object.keys(savedBookings).map((key: string) => ({
            ...savedBookings[key],
            id: key,
          }));
          return { bookings, totalLength: bookings.length };
        } else return { bookings: [], totalLength: 0 };
      })
    );
  }

  loadBookingsByQuery(queryParams: IQueryParams): Observable<IServerResponse> {
    return this.http.get<IBooking[]>(`${DATABASE_URL}.json`).pipe(
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
    return this.http.get<IBooking>(`${DATABASE_URL}/${bookingId}.json`).pipe(
      map((selectedBooking: IBooking) => {
        return { ...selectedBooking, id: bookingId };
      })
    );
  }

  createBooking(newBookingOptions: IBooking): Observable<IBooking> {
    return this.http
      .post<IBooking>(`${DATABASE_URL}.json`, newBookingOptions)
      .pipe(
        map((response: any) => {
          return { ...newBookingOptions, id: response.name };
        })
      );
  }

  updateBooking(bookingOptions: IBooking): Observable<IBooking> {
    return this.http.patch<IBooking>(
      `${DATABASE_URL}/${bookingOptions.id}.json`,
      bookingOptions
    );
  }

  deleteBooking(bookingId: string): Observable<void> {
    return this.http.delete<void>(`${DATABASE_URL}/${bookingId}.json`);
  }

  doFilter(data: IBooking[], queryParams: IFilterParams): IBooking[] {
    const filteredBookingList = data.filter((item: IBooking) => {
      return (
        this.doPriceFilter(queryParams.price, item.price) &&
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
      return data.sort(
        (a: IBooking, b: IBooking) =>
          a[queryParams.field] - b[queryParams.field]
      );
    } else
      return data.sort(
        (a: IBooking, b: IBooking) =>
          b[queryParams.field] - a[queryParams.field]
      );
  }

  doPaginate(data: IBooking[], queryParams: IPaginateParams): IBooking[] {
    return data.slice(
      queryParams.pageIndex * queryParams.pageSize,
      queryParams.pageSize * (queryParams.pageIndex + 1)
    );
  }

  doPriceFilter(minPrice: number, item: number): boolean {
    return minPrice ? item > minPrice : true;
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
    return moment().subtract(1, 'months');
  }
}
