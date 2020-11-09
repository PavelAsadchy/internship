import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOCATION_API_URL } from '../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) { }

  getLocation() {
    return this.httpClient.get<any>(LOCATION_API_URL);
  }
}
