import { TestBed } from '@angular/core/testing';

import { DirectoriesService } from './directories.service';

describe('DirectoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectoriesService = TestBed.get(DirectoriesService);
    expect(service).toBeTruthy();
  });
});
