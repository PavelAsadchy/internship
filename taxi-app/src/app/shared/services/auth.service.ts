import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_URL } from '../consts/consts';
// import { ICredentials } from '../models/credentials.model';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isLoggedIn(): boolean {
    return false;
  }

  public login(user: IUser): Observable<any> {
    return this.http.post(AUTH_URL + 'login', user)
  }

  public register(user: IUser): Observable<any> {
    return this.http.post(AUTH_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    })
  }
  
}
