import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import Project from '../../models/project';
import {ProjectsService} from '../../services/projects.service';
import BlockFile from '../../models/block-file';
import {BlockFilesService} from '../../services/block-files.service';
import {AuthService} from '../../services/auth.service';
import {Location} from '@angular/common';
import {BlocklyEditorComponent} from '../blockly-editor/blockly-editor.component';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IDEComponent implements OnInit {
  restrictMove = false;

  projectName: string;

  project: Project;
  openFile: BlockFile;
  loading = true;
  editor: BlocklyEditorComponent;

  @ViewChild(BlocklyEditorComponent, {static: false})
  set blocklyEditor(component: BlocklyEditorComponent) {
    this.editor = component;
  };

  renaming = false;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private blockFileService: BlockFilesService,
    public authService: AuthService,
    private router: Router,
    private location: Location
  ) {
  }

  refresh = () => {
    this.loading = true;
    this.projectsService.get(this.projectName).subscribe(project => {
      this.project = project;
      if (this.project.root_directory.block_files.length > 0) {
        this.openFile = this.project.root_directory.block_files[0];
        this.editor.openFile(this.openFile);
        this.loading = false;
      } else {
        this.blockFileService.create(project.id, {
          block_xml: '',
          name: 'app.py'
        }, '').subscribe(newFile => {
          this.refresh();
        });
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectName = params.projectName;
      this.refresh();
    });
  }

  renameProject = (projectName: string) => {
    this.renaming = false;
    this.projectsService.modify({name: projectName}, this.project.id).subscribe(project => {
      this.location.replaceState(`/edit/${project.name}`);
      this.project = project;
      this.projectName = project.name;
    });
  }

  downloadDemo = () => {
    window.location.href=`${environment.API_URL}/static/hello-world-demo.py`;
  }
}
