import Project from './project';

export default class User {
  id: number;
  username: string;
  email?: string;
  projects: Project[];
}

export class UserResponse {
  data: User;
}
