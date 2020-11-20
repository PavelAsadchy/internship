import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DATABASE_URL } from '../consts/consts';
import { IBookingOptions } from '../models/booking-options.model';

@Injectable({
  providedIn: 'root',
})
export class BookingListService {
  constructor(private http: HttpClient) {}

  saveBooking(bookingOptions: IBookingOptions) {
    return this.http.post(`${DATABASE_URL}.json`, bookingOptions).pipe(
      map((response: any) => {
        return { ...bookingOptions, id: response.name };
      })
    );
  }

  loadBooking(): Observable<IBookingOptions[]> {
    return this.http.get<IBookingOptions[]>(`${DATABASE_URL}.json`).pipe(
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
}
