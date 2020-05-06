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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '@:username', component: UserComponent},
  {path: 'edit/:projectName', component: IDEComponent}
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
    HttpClientModule
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {}
