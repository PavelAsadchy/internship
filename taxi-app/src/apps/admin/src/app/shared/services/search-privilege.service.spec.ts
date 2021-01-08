import { TestBed } from '@angular/core/testing';

import { SearchPrivilegeService } from './search-privilege.service';

describe('SearchPrivilegeService', () => {
  let service: SearchPrivilegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPrivilegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
