import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCATION_API_URL } from '../consts/app.consts';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private httpClient: HttpClient) {}

  getLocation(): Observable<string> {
    return this.httpClient.get<string>(LOCATION_API_URL);
  }
}
