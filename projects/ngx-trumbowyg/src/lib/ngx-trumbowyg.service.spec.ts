import { TestBed, inject } from '@angular/core/testing';

import { NgxTrumbowygService } from './ngx-trumbowyg.service';

describe('NgxTrumbowygService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTrumbowygService]
    });
  });

  it('should be created', inject([NgxTrumbowygService], (service: NgxTrumbowygService) => {
    expect(service).toBeTruthy();
  }));
});
