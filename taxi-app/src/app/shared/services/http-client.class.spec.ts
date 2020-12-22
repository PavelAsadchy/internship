import { TestBed } from '@angular/core/testing';

import { HttpClientClass } from './http-client.class';

describe('HttpClientClass', () => {
  let service: HttpClientClass;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientClass);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
