import User from './user';
import Directory from './directory';

export default class Project {
  id?: number;
  name: string;
  user?: User;
  // tslint:disable-next-line:variable-name
  user_id?: number;
  // tslint:disable-next-line:variable-name
  last_modified?: string;
  // tslint:disable-next-line:variable-name
  root_directory?: Directory;
}

export class ProjectResponse {
  data: Project;
}
