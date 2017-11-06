import { TestBed, inject } from '@angular/core/testing';

import { ImageFetchService } from './image-fetch.service';

describe('ImageFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageFetchService]
    });
  });

  it('should be created', inject([ImageFetchService], (service: ImageFetchService) => {
    expect(service).toBeTruthy();
  }));
});
