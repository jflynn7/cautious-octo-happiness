import { TestBed, inject } from '@angular/core/testing';

import { WPRESTService } from './wp-rest.service';

describe('WPRESTService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WPRESTService]
    });
  });

  it('should be created', inject([WPRESTService], (service: WPRESTService) => {
    expect(service).toBeTruthy();
  }));
});
