import { TestBed } from '@angular/core/testing';

import { KiunbiFirestoreService } from './kiunbi-firestore.service';

describe('KiunbiFirestoreService', () => {
  let service: KiunbiFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiunbiFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
