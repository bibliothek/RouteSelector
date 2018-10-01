import { Route } from "./route";
import { Location } from './location';

export interface RouteSelectionService {

    getRoute(start: Location) : Route;
    
    getRoute(start: Location, destination: Location) : Route;

    getStartLocations(): Location[];

}
