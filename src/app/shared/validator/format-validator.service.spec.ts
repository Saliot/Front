/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormatValidatorService } from './format-validator.service';

describe('Service: FormatValidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatValidatorService]
    });
  });

  it('should ...', inject([FormatValidatorService], (service: FormatValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
