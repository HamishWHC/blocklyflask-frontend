import Directory from './directory';

export default class BlockFile {
  id: number;
  name: string;
  directory: Directory;
  // tslint:disable-next-line:variable-name
  block_xml: string;
  // tslint:disable-next-line:variable-name
  full_path: string;
}

export class BlockFileResponse {
  data: BlockFile;
}
