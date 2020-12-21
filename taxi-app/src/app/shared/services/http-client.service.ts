import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private http: HttpClient;

  constructor(private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  myGet<T>(url: string, options?: any): Observable<T> {
    return this.http.get<T>(url, { headers: this.setHeaders() });
  }

  myPost<T>(url: string, body: any, options?: any): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.setHeaders() });
  }

  myPatch<T>(url: string, body: T, options?: any): Observable<T> {
    return this.http.patch<T>(url, body, { headers: this.setHeaders() });
  }

  myDelete<T>(url: string, options?: any): Observable<T> {
    return this.http.delete<T>(url, { headers: this.setHeaders() });
  }

  private setHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('X-CustomHttpHeader', 'CUSTOM_VALUE');
    return headers;
  }
}
