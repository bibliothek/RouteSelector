import { Injectable } from '@angular/core';
import { Route } from './route';
import { Location } from './location';
import { RouteConfig } from './route-config';
import { RouteSelector } from './route-selector';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectionService {

  routeSelector: RouteSelector;
  routes: Route[];

  constructor(routeConfig: RouteConfig, routeSelector: RouteSelector) {
    this.routeSelector = routeSelector;
    this.routes = routeConfig.getRoutes();
  }

  getAnyRoute(start: Location, destination?: Location): Route {
    let filteredRoutes: Array<Route>;
    if (destination) {
      filteredRoutes = this.routes.filter((route) => route && route.start == start && route.destination == destination)
    } else {
      filteredRoutes = this.routes.filter((route) => route && route.start == start)
    }

    if (filteredRoutes.length < 1) {
      throw new Error('No fitting route found');

    }

    return this.routeSelector.selectRoute(filteredRoutes);
  }
  getDestinations(start: Location): Location[] {
    const destinations = this.routes.filter((v, i, a) => v.start === start).map(x => x.destination).filter(this.onlyUnique);
    return destinations;
  }

  getRoutes(start: Location, destination?: Location): Route[] {
    if (destination) {
      return this.routes.filter((v, i, a) => v.start === start && v.destination === destination);
    }
    return this.routes.filter((v, i, a) => v.start === start);
  }

  getStartLocations(): Location[] {
    const startLocations = this.routes.map(x => x.start).filter(this.onlyUnique);
    return startLocations;
  }

  private onlyUnique(value, index, self): boolean {
    return self.indexOf(value) === index;
  }

}
