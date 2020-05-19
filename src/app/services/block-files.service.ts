import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import User, {UserResponse} from '../models/user';
import {API_URL} from '../helpers/config';
import {map} from 'rxjs/operators';
import {DeleteResponse} from '../models/simple-responses';
import BlockFile, {BlockFileResponse} from '../models/block-file';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockFilesService {

  constructor(private http: HttpClient) {
  }

  getBlockFile(id: number): Observable<BlockFile> {
    return this.http.get<BlockFileResponse>(`${API_URL}/block-file/${id}/`).pipe(map(result => {
      return result.data;
    }));
  }

  postUser(user: User): Observable<User> {
    return this.http.post<UserResponse>(`${API_URL}/users/`, user).pipe(map(result => {
      return result.data;
    }));
  }

  putUser(user: User, identifier?: string | number): Observable<User> {
    return this.http.put<UserResponse>(!!identifier ? `${API_URL}/user/${identifier}/` : `${API_URL}/user/`, user).pipe(map(result => {
      return result.data;
    }));
  }

  deleteUser(identifier?: string | number): Observable<boolean> {
    return this.http.delete<DeleteResponse>(!!identifier ? `${API_URL}/user/${identifier}/` : `${API_URL}/user/`).pipe(map(result => {
      return result.msg === 'success';
    }));
  }
}
