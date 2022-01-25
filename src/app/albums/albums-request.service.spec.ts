import { TestBed } from '@angular/core/testing';

import { AlbumsRequestService } from './albums-request.service';

describe('AlbumsRequestService', () => {
  let service: AlbumsRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
