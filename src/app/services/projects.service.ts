import {Injectable} from '@angular/core';
import {ProjectResponse} from '../models/project';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../helpers/config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(identifier: string | number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(API_URL + '/project/' + identifier + '/');
  }
}
