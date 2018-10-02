import { RouteConfig } from "./route-config";
import {Route} from "./route";

export class InMemoryRouteConfig extends RouteConfig {

constructor(routes: Array<Route>) {
    super();
    this.routes = routes;
}

routes = new Array<Route>();

    getRoutes(): Route[] {
        return this.routes;
    }

}