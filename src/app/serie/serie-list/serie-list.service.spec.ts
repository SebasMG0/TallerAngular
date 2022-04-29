/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerieListService } from './serie-list.service';

describe('Service: SerieList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieListService]
    });
  });

  it('should ...', inject([SerieListService], (service: SerieListService) => {
    expect(service).toBeTruthy();
  }));
});
