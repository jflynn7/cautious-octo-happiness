import { TestBed, inject } from '@angular/core/testing';

import { NuFormService } from './nunicorn-utils.service';

describe('NunicornUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NuFormService]
    });
  });

  it('should be created', inject([NuFormService], (service: NuFormService) => {
    expect(service).toBeTruthy();
  }));
});
