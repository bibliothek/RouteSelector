import { Injectable } from '@angular/core';
import { IRouteSelectionService } from './iroute-selection-service'
import { Route } from './route';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectionServiceService implements IRouteSelectionService {

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
