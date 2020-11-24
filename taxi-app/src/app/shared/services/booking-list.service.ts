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

  loadBooking(): Observable<any> {
    return this.http.get<any>(`${DATABASE_URL}.json`);
    // .pipe(
    //     map((savedBookings: any) => {
    //       return savedBookings
    //         ? Object.keys(savedBookings).map((key: string) => ({
    //             ...savedBookings[key],
    //             id: key,
    //           }))
    //         : [];
    //     })
    //   );
    // }

    // loadBooking(): Observable<any> {
    //   return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/1`);
    // .pipe(
    //   map((savedBookings: any) => {
    //     return savedBookings
    //       ? Object.keys(savedBookings).map((key: string) => ({
    //           ...savedBookings[key],
    //           id: key,
    //         }))
    //       : [];
    //   })
    // );
  }

  // createUser(value, avatar) {
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar,
  //   });
  // }

  removeBooking(bookingOptions: IBookingOptions): Observable<void> {
    return this.http.delete<void>(`${DATABASE_URL}/${bookingOptions.id}.json`);
  }

  editBooking(bookingOptions: IBookingOptions, options) {
    return this.http.patch(
      `${DATABASE_URL}/${bookingOptions.id}.json`,
      options
    );
  }
}
