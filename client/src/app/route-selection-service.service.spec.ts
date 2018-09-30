import { TestBed } from '@angular/core/testing';

import { RouteSelectionServiceService } from './route-selection-service.service';
import { Location } from './location';
import { InMemoryRouteConfig } from './in-memory-route-config';
import { Route } from './route';

describe('RouteSelectionServiceService', () => {

const startLocation = new Location("start location");
const endLocation = new Location("end location");
const routeA = new Route(startLocation, endLocation, "route A")

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{
      provide: RouteSelectionServiceService, useValue: new RouteSelectionServiceService(new InMemoryRouteConfig([routeA]))
    }]});
  });

  it('should be created', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    expect(service).toBeTruthy();
  });

  it('should return a route when given a location', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation);
    expect(route).toBeDefined();
  });

  it('should return a route where the given location is the equal to the start', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation);
    expect(route.start).toEqual(startLocation);
  });

  it('should return a route where start and destination match the passed locations', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation, endLocation);
    expect(route.start).toEqual(startLocation);
    expect(route.destination).toEqual(endLocation);
  });

  it('should return a route with a destination', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation);
    expect(route.destination).toBeDefined();
  });

  it('should return a route from the current configuration', () => {
    const location = new Location("start");
    const config = new InMemoryRouteConfig([new Route(location, location, 'name')]);
    const service: RouteSelectionServiceService = new RouteSelectionServiceService(config);
    const route = service.getRoute(location);
    expect(config.getRoutes().includes(route)).toBeTruthy();
  });


});
