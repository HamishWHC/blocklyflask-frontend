import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BaseComponent } from './base/base.component';



@NgModule({
  declarations: [HomeComponent, UserComponent, BaseComponent],
  exports: [
    BaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserViewModule { }
