import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { GenericService } from './generic.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService extends HttpClientService {
  locationApiUrl: string;

  constructor(
    http: HttpClient,
    datePipe: DatePipe,
    genericService: GenericService
  ) {
    super(http, datePipe, genericService);
    this.locationApiUrl = environment.locationApiUrl;
  }

  getLocation(): Observable<string> {
    return this.myGet<string>({
      url: this.locationApiUrl,
      headers: {
        name: 'InterceptorSkipHeader',
        value: '',
      },
    });
  }
}
