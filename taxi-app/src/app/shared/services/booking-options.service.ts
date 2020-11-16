import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBookingOptions } from '../models/bookingOptions.model';

@Injectable({
  providedIn: 'root'
})
export class BookingOptionsService {

  private baseUrl = 'assets';

  constructor(private httpClient: HttpClient) { }

  loadBookingOptions(): Observable<IBookingOptions> {
    return this.httpClient.get<IBookingOptions>(`${this.baseUrl}/booking-options.json`);
  }
}
