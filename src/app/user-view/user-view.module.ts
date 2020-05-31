import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {BaseComponent} from './base/base.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {ProjectNameInputComponent} from './project-name-input/project-name-input.component';


@NgModule({
  declarations: [HomeComponent, UserComponent, BaseComponent, LoginComponent, SignUpComponent, ProjectNameInputComponent],
  exports: [
    BaseComponent,
    ProjectNameInputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class UserViewModule {
}
