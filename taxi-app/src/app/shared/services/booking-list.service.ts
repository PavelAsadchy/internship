import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DATABASE_URL } from '../consts/app.consts';
import { IBooking } from '../models/booking.model';
import { IFilterParams } from '../models/query-params.model';

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

  loadBookingsByOrder(sort: string, order: string): Observable<IBooking[]> {
    if (sort && order === 'asc') {
      return this.db
        .list('booking-list', (ref) => ref.orderByChild(sort))
        .valueChanges()
        .pipe(map(this.addIdField));
    } else if (sort && order === 'desc') {
      return this.db
        .list('booking-list', (ref) => ref.orderByChild(sort))
        .valueChanges()
        .pipe(map(this.addIdFieldAndReverse));
    } else {
      return this.db
        .list('booking-list')
        .valueChanges()
        .pipe(map(this.addIdField));
    }
  }

  addIdField(bookings: IBooking[]): IBooking[] {
    return Object.keys(bookings).map((key: string) => ({
      ...bookings[key],
      id: key,
    }));
  }

  addIdFieldAndReverse(bookings: IBooking[]): IBooking[] {
    return Object.keys(bookings)
      .map((key: string) => ({
        ...bookings[key],
        id: key,
      }))
      .reverse();
  }

  filterBookings(filterParams: IFilterParams): Observable<IBooking[]> {
    return this.db
      .list<IBooking>('booking-list')
      .valueChanges()
      .pipe(
        map((bookings: IBooking[]) => {
          const filteredBookingList = bookings.filter((item: IBooking) => {
            return (
              this.doPriceFilter(filterParams.price, item.price) &&
              this.doSelectFilter(filterParams.statuses, item.status) &&
              this.doSelectFilter(filterParams.channels, item.bookingChannel) &&
              this.doSelectFilter(filterParams.vehicle, item.vehicle) &&
              this.doIsAfterFilter(
                filterParams.dateFrom,
                moment(item.bookingTime)
              ) &&
              this.doIsBeforeFilter(
                filterParams.dateTo,
                moment(item.bookingTime)
              )
            );
          });
          return filteredBookingList
            ? Object.keys(filteredBookingList).map((key: string) => ({
                ...filteredBookingList[key],
                id: key,
              }))
            : [];
        })
      );
  }

  doPriceFilter(minPrice: number, item: number): boolean {
    return minPrice ? item > minPrice : true;
  }

  doSelectFilter(selectedParams: string[], item: string): boolean {
    return selectedParams ? selectedParams.includes(item) : true;
  }

  doIsAfterFilter(dateFrom: Moment, item: Moment) {
    return dateFrom.isValid() ? item.isAfter(dateFrom) : true;
  }

  doIsBeforeFilter(dateTo: Moment, item: Moment) {
    return dateTo.isValid() ? item.isBefore(dateTo) : true;
  }
}
