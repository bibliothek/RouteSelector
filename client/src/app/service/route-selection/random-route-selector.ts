import { RouteSelector } from './route-selector';
import { Route } from './route';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class RandomRouteSelector extends RouteSelector {
    selectRoute(routes: Route[]): Route {
        const index = this.getRandomInt(0, routes.length - 1);
        return routes[index];
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
