import { RouteConfig } from "./route-config";
import {Route} from "./route";

export class InMemoryRouteConfig implements RouteConfig {

constructor(routes: Array<Route>) {
    this.routes = routes;
}

routes = new Array<Route>();

    getRoutes(): Route[] {
        return this.routes;
    }

}