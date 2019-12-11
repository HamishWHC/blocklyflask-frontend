import {Component} from '@angular/core';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IDEComponent {
  user: any = {
    username: 'HamishWHC'
  };

  restrictMove = false;

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
}
