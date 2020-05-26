import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import User, {UserResponse} from '../models/user';
import {API_URL} from '../helpers/config';
import {map} from 'rxjs/operators';
import {DeleteResponse} from '../models/simple-responses';
import BlockFile, {BlockFileResponse} from '../models/block-file';
import {HttpClient} from '@angular/common/http';
import Project from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class BlockFilesService {

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<BlockFile> {
    return this.http.get<BlockFileResponse>(`${API_URL}/block-file/${id}/`).pipe(map(result => {
      return result.data;
    }));
  }

  create(project: Project, blockFile: BlockFile, path?: string): Observable<BlockFile> {
    return this.http.post<BlockFileResponse>(`${API_URL}/project/${project.id}/create-file-in/${path ? path : blockFile.full_path}`, blockFile).pipe(map(result => {
      return result.data;
    }));
  }

  modify(blockFile: BlockFile): Observable<BlockFile> {
    return this.http.put<BlockFileResponse>(`${API_URL}/block-file/${blockFile.id}/`, blockFile).pipe(map(result => {
      return result.data;
    }));
  }

  delete(identifier: number): Observable<boolean> {
    return this.http.delete<DeleteResponse>(`${API_URL}/block-file/${identifier}/`).pipe(map(result => {
      return result.msg === 'success';
    }));
  }
}
