import { Route } from "./route";

export interface RouteConfig {
    getRoutes(): Array<Route>;
}