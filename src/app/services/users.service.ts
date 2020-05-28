import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import User, {UserCreateResponse, UserResponse} from '../models/user';
import {API_URL} from '../helpers/config';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {DeleteResponse, TakenResponse} from '../models/simple-responses';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  get(identifier: string | number): Observable<User> {
    return this.http.get<UserResponse>(`${API_URL}/user/${identifier}/`).pipe(map(result => {
      return result.data;
    }));
  }

  create(user: User): Observable<UserCreateResponse> {
    return this.http.post<UserCreateResponse>(`${API_URL}/users/`, user).pipe(map(result => {
      return result;
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

  verifyEmailTaken(email: string, userId?: number): Observable<boolean> {
    return this.http.get<TakenResponse>(`${API_URL}/uniquity-check/email/`, {
      params: userId ? {
        email,
        user_id: userId.toString()
      } : {email}
    }).pipe(map(result => {
      return result.taken;
    }));
  }

  verifyUsernameTaken(username: string, userId?: number): Observable<boolean> {
    return this.http.get<TakenResponse>(`${API_URL}/uniquity-check/username/`, {
      params: userId ? {
        username,
        user_id: userId.toString()
      } : {username}
    }).pipe(map(result => {
      return result.taken;
    }));
  }
}
