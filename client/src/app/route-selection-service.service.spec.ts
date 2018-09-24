import { TestBed } from '@angular/core/testing';

import { RouteSelectionServiceService } from './route-selection-service.service';
import { Location } from './location';

describe('RouteSelectionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    expect(service).toBeTruthy();
  });

  it('should return a route when given a location', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const location = new Location();
    const route = service.getRoute(location);
    expect(route).toBeDefined();
  });
});
