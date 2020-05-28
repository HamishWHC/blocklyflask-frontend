import Directory from './directory';
import Project from "./project";

export default class BlockFile {
  id?: number;
  name: string;
  directory?: Directory;
  directory_id?: number;
  project?: Project;
  // tslint:disable-next-line:variable-name
  block_xml?: string;
  // tslint:disable-next-line:variable-name
  full_path?: string;
}

export class BlockFileResponse {
  data: BlockFile;
}
