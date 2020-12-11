import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DATABASE_URL } from '../consts/app.consts';
import { IBooking } from '../models/booking.model';
import { IQueryParams } from '../models/query-params.model';

@Injectable({
  providedIn: 'root',
})
export class BookingListService {
  private http: HttpClient;

  constructor(private handler: HttpBackend, private db: AngularFireDatabase) {
    this.http = new HttpClient(handler);
  }

  loadBookings(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(`${DATABASE_URL}.json`).pipe(
      map((savedBookings: IBooking[]) => {
        return savedBookings
          ? Object.keys(savedBookings).map((key: string) => ({
              ...savedBookings[key],
              id: key,
            }))
          : [];
      })
    );
  }

  loadBookingsByParams(queryParams: IQueryParams): Observable<IBooking[]> {
    if (!queryParams.sort) {
      return this.db
        .list<IBooking>('booking-list')
        .valueChanges()
        .pipe(
          map((bookings: IBooking[]) => {
            return this.doFilter(bookings, queryParams);
          })
        );
    } else {
      return this.db
        .list<IBooking>('booking-list', (ref) =>
          ref.orderByChild(queryParams.sort)
        )
        .valueChanges()
        .pipe(
          map((bookings: IBooking[]) => {
            return this.doFilter(bookings, queryParams);
          })
        );
    }
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

  doFilter(data: IBooking[], queryParams: IQueryParams): IBooking[] {
    const filteredBookingList = data
      .filter((item: IBooking) => {
        return (
          this.doPriceFilter(queryParams.price, item.price) &&
          this.doSelectFilter(queryParams.statuses, item.status) &&
          this.doSelectFilter(queryParams.channels, item.bookingChannel) &&
          this.doSelectFilter(queryParams.vehicle, item.vehicle) &&
          this.doIsAfterFilter(
            queryParams.dateFrom,
            moment(item.bookingTime)
          ) &&
          this.doIsBeforeFilter(queryParams.dateTo, moment(item.bookingTime))
        );
      })
      .map((bookings: IBooking) => {
        return bookings;
      });
    if (filteredBookingList) {
      if (queryParams.sort && queryParams.direction === 'desc') {
        return Object.keys(filteredBookingList)
          .map((key: string) => ({
            ...filteredBookingList[key],
            id: key,
          }))
          .reverse();
      } else {
        return Object.keys(filteredBookingList).map((key: string) => ({
          ...filteredBookingList[key],
          id: key,
        }));
      }
    } else return [];
  }

  doPriceFilter(minPrice: number, item: number): boolean {
    return minPrice ? item > minPrice : true;
  }

  doSelectFilter(selectedParams: string[], item: string): boolean {
    return selectedParams ? selectedParams.includes(item) : true;
  }

  doIsAfterFilter(dateFrom: Moment, item: Moment) {
    return dateFrom.isValid()
      ? item.isAfter(dateFrom)
      : item.isAfter(this.dateMonthAgo());
  }

  doIsBeforeFilter(dateTo: Moment, item: Moment) {
    return dateTo.isValid() ? item.isBefore(dateTo) : true;
  }

  dateMonthAgo(): Moment {
    return moment().subtract(1, 'months');
  }
}
