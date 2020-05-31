import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../services/projects.service';
import User from '../../models/user';
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
import * as moment from 'moment';
import {ProjectNameInputComponent} from '../project-name-input/project-name-input.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;

  user: User;
  loading = true;
  createProjectInput: ProjectNameInputComponent;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private authService: AuthService,
    private projectsService: ProjectsService,
    private router: Router
  ) {
    this.createProject.bind(this);
  }

  refresh() {
    this.loading = true;
    this.usersService.get(this.username).subscribe(user => {
      this.user = user;
      this.loading = false;
    }, error => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.username;
      this.refresh();
    });
  }

  createProject = (projectName: string) => {
      this.projectsService.create({
        name: projectName
      }).subscribe(project => {
        this.router.navigate(['edit', project.name]);
      });
  }

  getUpdated(dateString: string): string {
    return moment.utc(dateString).fromNow();
  }
}
