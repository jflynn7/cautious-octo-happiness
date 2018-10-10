import { TestBed, inject } from '@angular/core/testing';

import { NunicornComponentsService } from './nunicorn-components.service';

describe('NunicornComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NunicornComponentsService]
    });
  });

  it('should be created', inject([NunicornComponentsService], (service: NunicornComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
