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
    let filteredRoutes: Array<Route>;
    if(destination) {
      filteredRoutes = routes.filter((route)=> route && route.start == start && route.destination == destination)
    } else {
      filteredRoutes = routes.filter((route)=> route && route.start == start)
    }

if(filteredRoutes.length < 1) {
  throw new Error("No fitting route found");
  
}

    return filteredRoutes[0];
  }


  constructor(routeConfig: RouteConfig) { 
    this.routeConfig = routeConfig;
  }

}
