import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'apps/booking/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  locationApiUrl: string;

  constructor(private http: HttpClient) {
    this.locationApiUrl = environment.locationApiUrl;
  }

  getLocation(): Observable<string> {
    return this.http.get<string>(this.locationApiUrl);
  }
}
