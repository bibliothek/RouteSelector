import { Injectable } from '@angular/core';
import { RouteSelectionService } from './route-selection-service'
import { Route } from './route';
import { Location } from './location';
import { RouteConfig } from './route-config';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectionServiceService implements RouteSelectionService {

routeConfig: RouteConfig;

  getRoute(start: Location): Route;
  getRoute(start: Location, destination: Location): Route;
  getRoute(start: Location, destination?: Location): Route {
    const routes = this.routeConfig.getRoutes();
    return routes[0];
  }


  constructor(routeConfig: RouteConfig) { 
    this.routeConfig = routeConfig;
  }

}
