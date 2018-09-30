import { TestBed } from '@angular/core/testing';

import { RouteSelectionServiceService } from './route-selection-service.service';
import { Location } from './location';
import { InMemoryRouteConfig } from './in-memory-route-config';
import { Route } from './route';

describe('RouteSelectionServiceService', () => {

const startLocation1 = new Location("start location 1");
const endLocation1 = new Location("end location 1");
const routeA = new Route(startLocation1, endLocation1, "route A")
const startLocation2 = new Location("start location 2");
const endLocation2 = new Location("end location 2");
const routeB = new Route(startLocation2, endLocation2, "route B")
const routeC = new Route(startLocation1, endLocation2, "route C")

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{
      provide: RouteSelectionServiceService, useValue: new RouteSelectionServiceService(new InMemoryRouteConfig([routeA, routeB, routeC]))
    }]});
  });

  it('should be created', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    expect(service).toBeTruthy();
  });

  it('should return a route when given a location', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation1);
    expect(route).toBeDefined();
  });

  it('should return a route where the given location is the equal to the start', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation1);
    expect(route.start).toEqual(startLocation1);
  });

  it('should return a route where start and destination match the passed locations', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation1, endLocation2);
    expect(route.start).toEqual(startLocation1);
    expect(route.destination).toEqual(endLocation2);
  });

  it('should return a route with a destination', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation1);
    expect(route.destination).toBeDefined();
  });

  it('should not always return the first route in the configuration', () => {
    const service: RouteSelectionServiceService = TestBed.get(RouteSelectionServiceService);
    const route = service.getRoute(startLocation2);
    expect(route.destination).toEqual(endLocation2);
  });

  it('should return a route from the current configuration', () => {
    const location = new Location("start");
    const config = new InMemoryRouteConfig([new Route(location, location, 'name')]);
    const service: RouteSelectionServiceService = new RouteSelectionServiceService(config);
    const route = service.getRoute(location);
    expect(config.getRoutes().includes(route)).toBeTruthy();
  });


});
