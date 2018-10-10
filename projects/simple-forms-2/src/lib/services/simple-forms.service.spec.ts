import { TestBed, inject } from '@angular/core/testing';

import { SimpleFormsService } from './simple-forms.service';

describe('SimpleFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleFormsService]
    });
  });

  it('should be created', inject([SimpleFormsService], (service: SimpleFormsService) => {
    expect(service).toBeTruthy();
  }));
});
