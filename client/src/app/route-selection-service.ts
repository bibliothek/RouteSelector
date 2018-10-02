import { Route } from "./route";
import { Location } from './location';

export interface RouteSelectionService {

    getAnyRoute(start: Location) : Route;
    
    getAnyRoute(start: Location, destination: Location) : Route;

    getStartLocations(): Location[];
    
    getDestinations(start: Location): Location[];
    
    getRoutes(start: Location): Route[];
}
