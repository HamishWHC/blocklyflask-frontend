import {Component, Input, OnInit} from '@angular/core';
import BlockFile from '../../models/block-file';

declare var Blockly: any;

@Component({
  selector: 'app-blockly-editor',
  templateUrl: './blockly-editor.component.html',
  styleUrls: ['./blockly-editor.component.css']
})
export class BlocklyEditorComponent implements OnInit {

  workspace: any;

  constructor() {
  }

  @Input() openFile: BlockFile;
  @Input() onSave: CallableFunction;

  ngOnInit() {
    const blocklyArea = document.getElementById('blocklyArea');
    const blocklyDiv = document.getElementById('blocklyDiv');
    const workspace = Blockly.inject(blocklyDiv,
      {
        toolbox: document.getElementById('toolbox')
      }
    );
    const onresize = (e?) => {
      // Compute the absolute coordinates and dimensions of blocklyArea.
      let element: Element = blocklyArea;
      let x = 0;
      let y = 0;
      do {
        x += element.clientLeft;
        y += element.clientTop;
        element = element.parentElement;
      } while (element);
      // Position blocklyDiv over blocklyArea.
      blocklyDiv.style.left = x + 'px';
      blocklyDiv.style.top = y + 'px';
      blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
      blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
      Blockly.svgResize(workspace);
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);
  }

}
