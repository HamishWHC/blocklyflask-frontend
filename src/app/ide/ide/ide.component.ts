import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Project from '../../models/project';
import {ProjectsService} from '../../services/projects.service';
import User from '../../models/user';
import BlockFile from '../../models/block-file';
import {BlockFilesService} from '../../services/block-files.service';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IDEComponent implements OnInit {
  user: User = {
    id: 0, projects: [],
    username: 'HamishWHC'
  };

  restrictMove = false;

  projectName: string;

  project: Project;
  openFile: BlockFile;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private blockFileService: BlockFilesService
  ) {
  }

  onSave() {
    // TODO: PUT data to server. Some modification (remove dump only values) needed.
    this.blockFileService.modify(this.openFile);
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.projectsService.get(this.projectName).subscribe(response => {
      this.project = response.data;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectName = params.projectName;
      this.refresh();
    });
  }
}
