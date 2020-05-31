import {Injectable} from '@angular/core';
import Project, {ProjectResponse} from '../models/project';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {BlockFileResponse} from '../models/block-file';
import {map} from 'rxjs/operators';
import {DeleteResponse, TakenResponse} from '../models/simple-responses';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(identifier: string | number): Observable<Project> {
    return this.http.get<ProjectResponse>(`${environment.API_URL}/project/${identifier}/`).pipe(map(result => result.data));
  }

  create(project: Project): Observable<Project> {
    return this.http.post<ProjectResponse>(`${environment.API_URL}/projects/`, project).pipe(map(result => result.data));
  }

  modify(project: Project, projectIdentifier: number | string): Observable<Project> {
    return this.http.put<BlockFileResponse>(
      `${environment.API_URL}/project/${projectIdentifier}/`, project
    ).pipe(map(result => result.data));
  }

  delete(identifier: number | string): Observable<boolean> {
    return this.http.delete<DeleteResponse>(`${environment.API_URL}/project/${identifier}/`).pipe(map(result => result.msg === 'success'));
  }

  verifyProjectNameTaken(projectName: string, projectId?: number): Observable<boolean> {
    return this.http.get<TakenResponse>(`${environment.API_URL}/uniquity-check/project-name/`, {
      params: projectId ? {
        name: projectName,
        project_id: projectId.toString()
      } : {name: projectName}
    }).pipe(map(result => {
      return result.taken;
    }));
  }
}
