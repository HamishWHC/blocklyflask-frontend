import {Injectable} from '@angular/core';
import User, {UserResponse} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../helpers/config';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
      this.user = JSON.parse(localStorage.getItem('username'));
    }
  }

  user: User = null;

  login(username, password) {
    return this.http.post<AuthResponse>(API_URL + '/auth/', {
      username,
      password
    }).pipe(map(result => {
      // login successful if there's a jwt token in the response
      if (result && result.access_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.user = result.user;
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        localStorage.setItem('accessToken', JSON.stringify(result.access_token));
      }
      return result;
    }));
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }

}
