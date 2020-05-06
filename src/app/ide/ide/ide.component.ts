import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import Project from '../../models/project';
import {ProjectsService} from '../../services/projects.service';
import User from '../../models/user';

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
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectName = params.projectName;
      this.projectsService.get(this.projectName).subscribe(response => {
        this.project = response.data;
        console.log(this.project);
        this.loading = false;
      });
    });
  }
}
