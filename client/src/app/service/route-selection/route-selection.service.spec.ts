import { TestBed } from '@angular/core/testing';

import { RouteSelectionService } from './route-selection.service';
import { Location } from './location';
import { InMemoryRouteConfig } from './in-memory-route-config';
import { Route } from './route';
import { IndexRouteSelector } from './index-route-selector';
import { RandomRouteSelector } from './random-route-selector';

describe('RouteSelectionServiceService', () => {

  const startLocation1 = new Location('start location 1');
  const endLocation1 = new Location('end location 1');
  const routeA = new Route(startLocation1, endLocation1, 'route A');
  const startLocation2 = new Location('start location 2');
  const endLocation2 = new Location('end location 2');
  const routeB = new Route(startLocation2, endLocation2, 'route B');
  const routeC = new Route(startLocation1, endLocation2, 'route C');
  const routeConfig = new InMemoryRouteConfig([routeA, routeB, routeC]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: RouteSelectionService, useValue: new RouteSelectionService(routeConfig, new RandomRouteSelector())
      }]
    });
  });

  it('should be created', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    expect(service).toBeTruthy();
  });

  it('should return a route when given a location', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const route = service.getAnyRoute(startLocation1);
    expect(route).toBeDefined();
  });

  it('should return a route where the given location is the equal to the start', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const route = service.getAnyRoute(startLocation1);
    expect(route.start).toEqual(startLocation1);
  });

  it('should return a route where start and destination match the passed locations', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const route = service.getAnyRoute(startLocation1, endLocation2);
    expect(route.start).toEqual(startLocation1);
    expect(route.destination).toEqual(endLocation2);
  });

  it('should return a route with a destination', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const route = service.getAnyRoute(startLocation1);
    expect(route.destination).toBeDefined();
  });

  it('if more than one route is possible it should return one based on the selector', () => {
    const service: RouteSelectionService = new RouteSelectionService(routeConfig, new IndexRouteSelector(1));
    const route = service.getAnyRoute(startLocation1);
    expect(route.destination).toEqual(endLocation2);
  });

  it('should throw an exception when no fitting route is found', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    try { const route = service.getAnyRoute(new Location('not exist')); } catch (e) {
      expect(e).toBeDefined();
      expect(e.message).toEqual('No fitting route found');
    }
  });

  it('should not always return the first route in the configuration', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const route = service.getAnyRoute(startLocation2);
    expect(route.destination).toEqual(endLocation2);
  });

  it('should return all possible start locations', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const locations = service.getStartLocations();
    expect(locations.length).toEqual(2);
  });

  it('should return all possible destinations from a given start location', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const destinations = service.getDestinations(startLocation1.name);
    expect(destinations.length).toEqual(2);
  });

  it('should return all possible routes from a given start location', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const routes = service.getRoutes(startLocation1.name);
    expect(routes.length).toEqual(2);
  });

  it('should return all possible routes from a given start and end location', () => {
    const service: RouteSelectionService = TestBed.get(RouteSelectionService);
    const routes = service.getRoutes(startLocation1.name, endLocation2.name);
    expect(routes.length).toEqual(1);
    expect(routes[0]).toEqual(routeC);
  });

  it('should return a route from the current configuration', () => {
    const location = new Location('start');
    const config = new InMemoryRouteConfig([new Route(location, location, 'name')]);
    const service: RouteSelectionService = new RouteSelectionService(config, new IndexRouteSelector(0));
    const route = service.getAnyRoute(location);
    expect(config.getRoutes().includes(route)).toBeTruthy();
  });


});
