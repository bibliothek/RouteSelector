import { RouteSelector } from "./route-selector";
import { Route } from "./route";

export class IndexRouteSelector extends RouteSelector{
    indexToSelect: number;
    selectRoute(routes: Route[]): Route {
        return routes[this.indexToSelect];
    }

    constructor(indexToSelect: number) {
        super();
        this.indexToSelect = indexToSelect;
    }

}