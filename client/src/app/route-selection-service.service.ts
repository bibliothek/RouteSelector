import { Injectable } from '@angular/core';
import { IRouteSelectionService } from './iroute-selection-service'
import { Route } from './route';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class RouteSelectionServiceService implements IRouteSelectionService {

  getRoute(start: Location): Route {
    return new Route();
  }
  constructor() { }
}
