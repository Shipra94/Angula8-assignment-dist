import { TestBed } from '@angular/core/testing';

import { ListRefreshService } from './list-refresh.service';

describe('ListRefreshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRefreshService = TestBed.get(ListRefreshService);
    expect(service).toBeTruthy();
  });
});
