import {Component, HostListener, Input, OnInit} from '@angular/core';
import BlockFile from '../../models/block-file';
import {getBlueprintsCategory} from '../../blocks/flask/callbacks';

declare var Blockly: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.css']
})
export class BlocklyEditorComponent implements OnInit {

  constructor() {
  }

  @Input() openFile: BlockFile;
  @Input() onSave: CallableFunction;

  blocklyArea: HTMLElement;
  blocklyDiv: HTMLElement;
  workspace: any;

  ngOnInit() {
    this.blocklyInit();
  }

  blocklyInit() {
    this.blocklyArea = document.getElementById('blocklyArea');
    this.blocklyDiv = document.getElementById('blocklyDiv');
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
    });
    // this.workspace.registerToolboxCategoryCallback("BLUEPRINT_CATEGORY", getBlueprintsCategory)
    // window.addEventListener('resize', this.blocklyOnResize, false);
    // this.blocklyOnResize();
    Blockly.svgResize(this.workspace);

  }

  @HostListener('window:resize')
  onResize = () => {
    Blockly.svgResize(this.workspace);
  }

}
