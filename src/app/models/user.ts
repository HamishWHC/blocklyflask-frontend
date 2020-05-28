import Project from './project';

export default class User {
  id?: number;
  username: string;
  password?: string;
  email?: string;
  projects?: Project[];
}

export class UserResponse {
  data: User;
}

export class UserCreateResponse extends UserResponse {
  // tslint:disable-next-line:variable-name
  access_token: string;
}
