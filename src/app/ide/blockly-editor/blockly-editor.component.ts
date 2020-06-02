import {Component, HostListener, Input, OnInit} from '@angular/core';
import BlockFile from '../../models/block-file';
import {getBlueprintsCategory} from '../../blocks/flask/callbacks';
import {BlockFilesService} from '../../services/block-files.service';
import {AuthService} from '../../services/auth.service';

declare var Blockly: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.css']
})
export class BlocklyEditorComponent implements OnInit {

  constructor(
    private blockFilesService: BlockFilesService
  ) {
  }

  @Input() refreshIde: () => void;
  @Input() isUserOwner: boolean;
  file: BlockFile;

  blocklyArea: HTMLElement;
  blocklyDiv: HTMLElement;
  workspace: any;

  ngOnInit() {
    this.blocklyInit();
  }

  openFile(file: BlockFile): void {
    this.blockFilesService.get(file.id).subscribe(blockFile => {
      this.file = blockFile;
      if (this.file.block_xml) {
        Blockly.Xml.domToWorkspace(
          Blockly.Xml.textToDom(this.file.block_xml),
          this.workspace
        );
      }
    });
  }

  blocklyInit() {
    this.blocklyArea = document.getElementById('blocklyArea');
    this.blocklyDiv = document.getElementById('blocklyDiv');
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      readOnly: this.isUserOwner
    });
    Blockly.svgResize(this.workspace);
  }

  save() {
    this.blockFilesService.modify({
      block_xml: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace)),
      directory_id: this.file.directory_id,
      name: this.file.name
    }, this.file.id).subscribe(() => {
      this.refreshIde();
    }, () => {
      alert('An error occurred!');
    });
  }

  @HostListener('window:resize')
  onResize = () => {
    Blockly.svgResize(this.workspace);
  }

}
