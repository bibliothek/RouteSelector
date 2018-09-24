import { Route } from "./route";
import { Location } from './location';

export interface IRouteSelectionService {

    getRoute(start: Location) : Route;

}
