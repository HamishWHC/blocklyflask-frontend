import BlockFile from './block-file';
import Project from "./project";

export default class Directory {
  id?: number;
  name: string;
  project?: Project;
  parent?: Directory;
  parent_id?: number;
  // tslint:disable-next-line:variable-name
  block_files?: BlockFile[];
  // tslint:disable-next-line:variable-name
  sub_directories?: Directory[];
  // tslint:disable-next-line:variable-name
  full_path?: string;
}

export class DirectoryResponse {
  data: Directory;
}
