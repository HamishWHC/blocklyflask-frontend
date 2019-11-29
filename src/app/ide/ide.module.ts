import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDEComponent } from './ide/ide.component';



@NgModule({
  declarations: [IDEComponent],
  exports: [
    IDEComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IDEModule { }
