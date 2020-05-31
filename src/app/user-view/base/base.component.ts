import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ProjectNameTakenValidator} from '../../helpers/project-uniquity-validators';
import {ProjectsService} from '../../services/projects.service';
import {ProjectNameInputComponent} from '../project-name-input/project-name-input.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private projectNameTakenValidator: ProjectNameTakenValidator,
    private projectsService: ProjectsService
  ) {
    this.createProject.bind(this);
  }

  ngOnInit() {
  }

  createProject = (projectName: string) => {
    this.projectsService.create({
      name: projectName
    }).subscribe(project => {
      this.router.navigate(['edit', project.name]);
    });
  }
}
