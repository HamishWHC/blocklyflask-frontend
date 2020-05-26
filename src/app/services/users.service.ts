import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import User, {UserResponse} from '../models/user';
import {API_URL} from '../helpers/config';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {DeleteResponse} from '../models/simple-responses';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  get(identifier: string | number): Observable<User> {
    return this.http.get<UserResponse>(`${API_URL}/user/${identifier}/`).pipe(map(result => {
      return result.data;
    }));
  }

  create(user: User): Observable<User> {
    return this.http.post<UserResponse>(`${API_URL}/users/`, user).pipe(map(result => {
      return result.data;
    }));
  }

  modify(user: User, identifier?: string | number): Observable<User> {
    return this.http.put<UserResponse>(!!identifier ? `${API_URL}/user/${identifier}/` : `${API_URL}/user/`, user).pipe(map(result => {
      return result.data;
    }));
  }

  delete(identifier?: string | number): Observable<boolean> {
    return this.http.delete<DeleteResponse>(!!identifier ? `${API_URL}/user/${identifier}/` : `${API_URL}/user/`).pipe(map(result => {
      return result.msg === 'success';
    }));
  }
}
