import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DATABASE_URL } from '../consts/consts';
import { IBookingOptions } from '../models/booking-options.model';
import { IBooking } from '../models/booking.model';

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
    return this.http.get<IBooking>(`${DATABASE_URL}/${bookingId}.json`);
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
    return this.http.put<IBooking>(
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

  filterBookings(): Observable<IBooking[]> {
    return this.db
      .list('booking-list', (ref) => ref.orderByChild('price').equalTo(55))
      .valueChanges()
      .pipe(map(this.addIdField));
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
}
