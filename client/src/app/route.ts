import { Location } from './location';

export class Route {

    start: Location;
    destination: Location;
    name: string;

    constructor(start?: Location, destination?: Location, name?: string) {
        this.start = start;
        this.destination = destination;
        this.name = name;
    }

}
