import { Route } from "./route";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export abstract class RouteConfig {
    abstract getRoutes(): Array<Route>;
}