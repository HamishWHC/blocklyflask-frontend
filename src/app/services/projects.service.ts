import {Injectable} from '@angular/core';
import Project, {ProjectResponse} from '../models/project';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BlockFileResponse} from "../models/block-file";
import {map} from "rxjs/operators";
import {DeleteResponse} from "../models/simple-responses";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(identifier: string | number): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(`${environment.API_URL}/project/${identifier}/`);
  }

  create(project: Project): Observable<Project> {
    return this.http.post<ProjectResponse>(`${environment.API_URL}/projects/`, project).pipe(map(result => {
      return result.data;
    }));
  }

  modify(project: Project): Observable<Project> {
    return this.http.put<BlockFileResponse>(`${environment.API_URL}/project/${project.id}/`, project).pipe(map(result => {
      return result.data;
    }));
  }

  delete(identifier: number | string): Observable<boolean> {
    return this.http.delete<DeleteResponse>(`${environment.API_URL}/project/${identifier}/`).pipe(map(result => {
      return result.msg === 'success';
    }));
  }
}
