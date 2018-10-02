import { Route } from "./route";

export interface RouteSelector {
    selectRoute(routes: Array<Route>): Route;
}