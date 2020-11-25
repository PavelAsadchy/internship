import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DATABASE_URL } from '../consts/consts';
import { IBookingOptions } from '../models/booking-options.model';

@Injectable({
  providedIn: 'root',
})
export class BookingListService {
  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  createBooking(bookingOptions: IBookingOptions): Observable<IBookingOptions> {
    return this.http
      .post<IBookingOptions>(`${DATABASE_URL}.json`, bookingOptions)
      .pipe(
        map((response: any) => {
          return { ...bookingOptions, id: response.name };
        })
      );
  }

  loadBooking(): Observable<any> {
    return this.http.get<any>(`${DATABASE_URL}.json`).pipe(
      map((savedBookings: any) => {
        return savedBookings
          ? Object.keys(savedBookings).map((key: string) => ({
              ...savedBookings[key],
              id: key,
            }))
          : [];
      })
    );
  }

  removeBooking(bookingOptions: IBookingOptions): Observable<void> {
    return this.http.delete<void>(`${DATABASE_URL}/${bookingOptions.id}.json`);
  }

  editBooking(
    bookingOptions: IBookingOptions,
    newBookingOptions: IBookingOptions
  ): Observable<IBookingOptions> {
    return this.http.put<IBookingOptions>(
      `${DATABASE_URL}/${bookingOptions.id}.json`,
      newBookingOptions
    );
  }
}
