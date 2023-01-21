import { TestBed } from '@angular/core/testing';

import { BloggingLibService } from './blogging-lib.service';

describe('BloggingLibService', () => {
  let service: BloggingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
