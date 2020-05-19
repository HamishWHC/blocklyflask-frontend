import { TestBed } from "@angular/core/testing";

import { BlockFilesService } from "./block-files.service";

describe("BlockFilesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: BlockFilesService = TestBed.get(BlockFilesService);
    expect(service).toBeTruthy();
  });
});
