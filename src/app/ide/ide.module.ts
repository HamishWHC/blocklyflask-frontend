import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IDEComponent} from './ide/ide.component';
import {BlocklyEditorComponent} from './blockly-editor/blockly-editor.component';
import {FileViewComponent} from './file-view/file-view.component';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatTreeModule} from '@angular/material';
import {AngularSplitModule} from 'angular-split';


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
    AngularSplitModule.forRoot()
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class IDEModule {
}
