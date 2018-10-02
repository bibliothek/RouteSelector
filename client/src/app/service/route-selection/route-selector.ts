import { Route } from "./route";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export abstract class RouteSelector {
    abstract selectRoute(routes: Array<Route>): Route;
}