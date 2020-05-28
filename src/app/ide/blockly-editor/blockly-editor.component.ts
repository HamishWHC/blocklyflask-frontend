import {Component, Input, OnInit} from '@angular/core';
import BlockFile from '../../models/block-file';
import {getBlueprintsCategory} from "../../blocks/flask/callbacks";

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
    this.blocklyInit()
  }

  blocklyInit() {
    this.blocklyArea = document.getElementById('blocklyArea');
    this.blocklyDiv = document.getElementById('blocklyDiv');
    this.workspace = Blockly.inject(this.blocklyDiv, {
      toolbox: document.getElementById('toolbox')
    });
    // this.workspace.registerToolboxCategoryCallback("BLUEPRINT_CATEGORY", getBlueprintsCategory)
    window.addEventListener('resize', this.blocklyOnResize, false);
    this.blocklyOnResize();
  }

  blocklyOnResize(e?) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element: Element = this.blocklyArea;
    let x = 0;
    let y = 0;
    do {
      x += element.clientLeft;
      y += element.clientTop;
      element = element.parentElement;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    this.blocklyDiv.style.left = x + 'px';
    this.blocklyDiv.style.top = y + 'px';
    this.blocklyDiv.style.width = this.blocklyArea.offsetWidth + 'px';
    this.blocklyDiv.style.height = this.blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(this.workspace);
  };

}
