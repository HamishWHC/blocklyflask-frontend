import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.loginForm = this.formBuilder.group(
      {
        email: [null, Validators.required],
        password: [null, Validators.required]
      }
    );
  }

  submit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).pipe(first())
        .subscribe(
          authResponse => {
            this.router.navigate(['user', authResponse.user.username]);
          },
          () => {
            this.error = 'Invalid email or password.';
            this.loginForm.reset();
          });
    }
  }

}
