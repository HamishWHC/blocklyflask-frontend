import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {DeleteResponse} from '../models/simple-responses';
import BlockFile, {BlockFileResponse} from '../models/block-file';
import {HttpClient} from '@angular/common/http';
import Project from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class BlockFilesService {

  constructor(private http: HttpClient) {
  }

  get(id: number): Observable<BlockFile> {
    return this.http.get<BlockFileResponse>(`${environment.API_URL}/block-file/${id}/`).pipe(map(result => result.data));
  }

  create(projectId: number, blockFile: BlockFile, path?: string): Observable<BlockFile> {
    return this.http.post<BlockFileResponse>(
      `${environment.API_URL}/project/${projectId}/create-file-in/${(path || path === '') ? path : blockFile.full_path}`, blockFile
    ).pipe(map(result => result.data));
  }

  modify(blockFile: BlockFile, blockFileId: number): Observable<BlockFile> {
    return this.http.put<BlockFileResponse>(
      `${environment.API_URL}/block-file/${blockFileId}/`, blockFile
    ).pipe(map(result => result.data));
  }

  delete(identifier: number): Observable<boolean> {
    return this.http.delete<DeleteResponse>(
      `${environment.API_URL}/block-file/${identifier}/`
    ).pipe(map(result => result.msg === 'success'));
  }
}
