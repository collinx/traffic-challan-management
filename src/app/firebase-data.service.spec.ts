import { TestBed, inject } from '@angular/core/testing';

import { FirebaseDataService } from './firebase-data.service';

describe('FirebaseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseDataService]
    });
  });

  it('should be created', inject([FirebaseDataService], (service: FirebaseDataService) => {
    expect(service).toBeTruthy();
  }));
});
