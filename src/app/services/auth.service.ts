import {Injectable} from '@angular/core';
import User from '../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

class AuthResponse {
  // tslint:disable-next-line:variable-name
  access_token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    if (localStorage.getItem('currentUser') && localStorage.getItem('accessToken')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  user: User = null;

  login(email, password) {
    return this.http.post<AuthResponse>(`${environment.API_URL}/auth/`, {email, password}).pipe(map(result => {
      // login successful if there's a jwt token in the response
      if (result && result.access_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.setCurrentUser(result.access_token, result.user);
      }
      return result;
    }));
  }

  setCurrentUser(accessToken: string, user: User): void {
    this.user = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }
}
