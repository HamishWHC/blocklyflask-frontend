import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UsersService} from '../../services/users.service';
import {confirmPassword, EmailTakenValidator, UsernameTakenValidator} from '../../helpers/user-uniquity-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private usersService: UsersService,
    private router: Router,
    private emailTakenValidator: EmailTakenValidator,
    private usernameTakenValidator: UsernameTakenValidator
  ) {
  }

  ngOnInit() {
    this.authService.logout();
    this.signupForm = this.formBuilder.group(
      {
        username: [
          null,
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z_\-0-9]*$/),
            Validators.minLength(6),
            Validators.maxLength(20)
          ],
          [this.usernameTakenValidator.validateFn()],
          {updateOn: 'blur'}
        ],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/)
          ],
          [this.emailTakenValidator.validateFn()],
          {updateOn: 'blur'}
        ],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]]
      }, {validators: confirmPassword}
    );
  }

  submit() {
    if (this.signupForm.valid) {
      this.usersService.create({
        email: this.signupForm.controls.email.value,
        username: this.signupForm.controls.username.value,
        password: this.signupForm.controls.password.value
      }).pipe(first()).subscribe(
        createUserResponse => {
          this.authService.setCurrentUser(createUserResponse.access_token, createUserResponse.data);
          this.router.navigate(['user', createUserResponse.data.username]);
        },
        () => {
          this.error = 'An error occurred, please try again later.';
          this.signupForm.controls.email.updateValueAndValidity();
          this.signupForm.controls.username.updateValueAndValidity();
        });
    }
  }

}
