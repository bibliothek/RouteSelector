import { RouteConfig } from "../service/route-selection/route-config";
import { Route } from "../service/route-selection/route";
import { Location } from "../service/route-selection/location";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class ExampleRouteConfig extends RouteConfig{
    getRoutes(): Route[] {
        const startLocation1 = new Location("start location 1");
        const endLocation1 = new Location("end location 1");
        const routeA = new Route(startLocation1, endLocation1, "route A")
        const startLocation2 = new Location("start location 2");
        const endLocation2 = new Location("end location 2");
        const routeB = new Route(startLocation2, endLocation2, "route B")
        const routeC = new Route(startLocation1, endLocation2, "route C")
        return [routeA, routeB, routeC];
    }
}