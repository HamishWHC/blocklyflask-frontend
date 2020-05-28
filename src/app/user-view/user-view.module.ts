import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {BaseComponent} from './base/base.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "../services/auth.service";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [HomeComponent, UserComponent, BaseComponent, LoginComponent, SignUpComponent],
  exports: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class UserViewModule {
}
