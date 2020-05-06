import {Component, Input, OnInit} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import Directory from '../../models/directory';
import Project from '../../models/project';
import BlockFile from '../../models/block-file';

type DirOrFile = Directory | BlockFile;

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.css']
})
export class FileViewComponent implements OnInit {

  @Input() project: Project;

  treeControl = new NestedTreeControl<DirOrFile>((node: DirOrFile) => {
    if ((node as Directory).sub_directories) {
      return ((node as Directory).sub_directories as DirOrFile[]).concat((node as Directory).block_files as DirOrFile[]);
    } else {
      return [];
    }
  });

  hasContents = (_: number, node: DirOrFile) => (node as Directory).sub_directories && (node as Directory).sub_directories.length > 0;

  constructor() {
  }

  ngOnInit() {
  }
}
