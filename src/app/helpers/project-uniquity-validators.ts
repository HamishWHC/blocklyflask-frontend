import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ProjectsService} from '../services/projects.service';

@Injectable({providedIn: 'root'})
export class ProjectNameTakenValidator {
  constructor(private projectsService: ProjectsService) {
  }

  validateFn(projectId?: number): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.projectsService.verifyProjectNameTaken(control.value, projectId).pipe(
        map(taken => {
          return taken ? {takenProjectName: {value: control.value}} : null;
        }),
        catchError(() => {
          return of({takenProjectName: {value: control.value}});
        })
      );
    };
  }
}
