import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Observable, of} from 'rxjs';
import {UsersService} from '../services/users.service';

@Injectable({providedIn: 'root'})
export class EmailTakenValidator {
  constructor(private usersService: UsersService) {
  }

  validateFn(userId?: number): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.usersService.verifyEmailTaken(control.value, userId).pipe(
        map(taken => {
          return taken ? {takenEmail: {value: control.value}} : null;
        }),
        catchError(() => {
          return of({takenEmail: {value: control.value}});
        })
      );
    };
  }
}

@Injectable({providedIn: 'root'})
export class UsernameTakenValidator {
  constructor(private usersService: UsersService) {
  }

  validateFn(userId?: number): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.usersService.verifyUsernameTaken(control.value, userId).pipe(
        map(taken => {
          return taken ? {takenUsername: {value: control.value}} : null;
        }),
        catchError(() => {
          return of({takenUsername: {value: control.value}});
        })
      );
    };
  }
}

export const confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  console.log(control.get('password').value);
  console.log(control.get('confirmPassword').value);
  console.log((
    control.get('password').value === control.get('confirmPassword').value
  ) ? null : {confirmPassword: {value: control.get('confirmPassword').value}});
  return (
    control.get('password').value === control.get('confirmPassword').value
  ) ? null : {confirmPassword: {value: control.get('confirmPassword').value}};
};
