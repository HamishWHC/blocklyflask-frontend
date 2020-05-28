import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './user-view/home/home.component';
import {UserComponent} from './user-view/user/user.component';
import {IDEComponent} from './ide/ide/ide.component';
import {IDEModule} from './ide/ide.module';
import {UserViewModule} from './user-view/user-view.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from "./user-view/login/login.component";
import {SignUpComponent} from "./user-view/sign-up/sign-up.component";
import {BaseComponent} from "./user-view/base/base.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'edit/:projectName', component: IDEComponent},
  {
    path: '',
    component: BaseComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'user/:username', component: UserComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    IDEModule,
    UserViewModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
