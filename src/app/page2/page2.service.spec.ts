import { TestBed } from '@angular/core/testing';

import { Page2Service } from './page2.service';

describe('Page2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Page2Service = TestBed.get(Page2Service);
    expect(service).toBeTruthy();
  });
});
