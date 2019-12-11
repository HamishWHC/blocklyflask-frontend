import {Component, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';

interface FileNode {
  name: string;
  contents?: FileNode[];
}

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {

  project: any = {
    name: 'test-project',
    files: [
      {
        name: 'app', contents: [
          {name: 'init'},
          {
            name: 'blueprints', contents: [
              {name: 'auth'}, {name: 'users'}, {name: 'clients'}
            ]
          },
          {
            name: 'models', contents: [
              {name: 'user'}, {name: 'client'}
            ]
          }
        ]
      }
    ]
  };

  treeControl = new NestedTreeControl<FileNode>(node => node.contents);

  hasChild = (_: number, node: FileNode) => !!node.contents && node.contents.length > 0;

  constructor() {
  }

  ngOnInit() {
  }
}
