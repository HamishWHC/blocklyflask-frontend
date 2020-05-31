import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import Project from '../../models/project';
import {ProjectsService} from '../../services/projects.service';
import BlockFile from '../../models/block-file';
import {BlockFilesService} from '../../services/block-files.service';
import {AuthService} from '../../services/auth.service';
import {Location} from '@angular/common';

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

  renaming = false;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private blockFileService: BlockFilesService,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
  }

  onSave() {
    // TODO: PUT data to server. Some modification (remove dump only values) needed.
    this.blockFileService.modify(this.openFile, this.openFile.id);
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.projectsService.get(this.projectName).subscribe(project => {
      this.project = project;
      this.loading = false;
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
}
