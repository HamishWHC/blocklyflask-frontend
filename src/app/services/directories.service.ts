import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import Project from "../models/project";
import {DeleteResponse} from "../models/simple-responses";
import {HttpClient} from "@angular/common/http";
import Directory, {DirectoryResponse} from "../models/directory";

@Injectable({
  providedIn: 'root'
})
export class DirectoriesService {

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<Directory> {
    return this.http.get<DirectoryResponse>(`${environment.API_URL}/directory/${id}/`).pipe(map(result => {
      return result.data;
    }));
  }

  create(project: Project, directory: Directory, path?: string): Observable<Directory> {
    return this.http.post<DirectoryResponse>(`${environment.API_URL}/project/${project.id}/create-directory-in/${path ? path : directory.full_path}`, directory).pipe(map(result => {
      return result.data;
    }));
  }

  modify(directory: Directory): Observable<Directory> {
    return this.http.put<DirectoryResponse>(`${environment.API_URL}/directory/${directory.id}/`, directory).pipe(map(result => {
      return result.data;
    }));
  }

  delete(identifier: number): Observable<boolean> {
    return this.http.delete<DeleteResponse>(`${environment.API_URL}/directory/${identifier}/`).pipe(map(result => {
      return result.msg === 'success';
    }));
  }
}
