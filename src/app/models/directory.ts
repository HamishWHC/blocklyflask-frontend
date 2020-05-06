import BlockFile from './block-file';

export default class Directory {
  id: number;
  name: string;
  // tslint:disable-next-line:variable-name
  block_files: BlockFile[];
  // tslint:disable-next-line:variable-name
  sub_directories: Directory[];
  // tslint:disable-next-line:variable-name
  full_path: string;
}
