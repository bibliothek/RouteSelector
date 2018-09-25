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

  it('should return a route where the given location is the equal to the start', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const location = new Location();
    const route = service.getRoute(location);
    expect(route.start).toEqual(location);
  });
  
  it('should return a route with a destination', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const location = new Location();
    const route = service.getRoute(location);
    expect(route.destination).toBeDefined();
  });
});
