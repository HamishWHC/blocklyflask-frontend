import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IDEComponent} from './ide/ide.component';
import {BlocklyEditorComponent} from './blockly-editor/blockly-editor.component';
import {FileViewComponent} from './file-view/file-view.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTreeModule} from '@angular/material';
import {AngularSplitModule} from 'angular-split';
import {UserViewModule} from '../user-view/user-view.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [IDEComponent, BlocklyEditorComponent, FileViewComponent],
  exports: [
    IDEComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    AngularSplitModule.forRoot(),
    UserViewModule,
    MatMenuModule,
    RouterModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class IDEModule {
}
