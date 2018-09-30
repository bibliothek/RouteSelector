import { Injectable } from '@angular/core';
import { RouteSelectionService } from './route-selection-service'
import { Route } from './route';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectionServiceService implements RouteSelectionService {

  getRoute(start: Location): Route;
  getRoute(start: Location, destination: Location): Route;
  getRoute(start: Location, destination?: Location): Route {
    const retVal = new Route();
    retVal.start = new Location();
    retVal.destination = new Location();
    return retVal;
  }


  constructor() { }

}
