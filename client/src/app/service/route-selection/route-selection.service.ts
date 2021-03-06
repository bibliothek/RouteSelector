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
      filteredRoutes = this.routes.filter((route) => route && route.start === start && route.destination === destination);
    } else {
      filteredRoutes = this.routes.filter((route) => route && route.start === start);
    }

    if (filteredRoutes.length < 1) {
      throw new Error('No fitting route found');

    }

    return this.routeSelector.selectRoute(filteredRoutes);
  }
  getDestinations(startName: string): Location[] {
    const destinations = this.routes.filter((v, i, a) => v.start.name === startName).map(x => x.destination).filter(this.onlyUnique);
    return destinations;
  }

  getRoutes(startName: string, destinationName?: string): Route[] {
    if (destinationName) {
      return this.routes.filter((v, i, a) => v.start.name === startName && v.destination.name === destinationName);
    }
    return this.routes.filter((v, i, a) => v.start.name === startName);
  }

  getStartLocations(): Location[] {
    const startLocations = this.routes.map(x => x.start).filter(this.onlyUnique);
    return startLocations;
  }

  private onlyUnique(value, index, self): boolean {
    return self.indexOf(value) === index;
  }

}
