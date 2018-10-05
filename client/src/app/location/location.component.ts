import { Component, OnInit } from '@angular/core';
import { RouteSelectionService } from '../service/route-selection/route-selection.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../service/route-selection/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  routeService: RouteSelectionService;
  locationName: string;

  constructor(routeService: RouteSelectionService, private activatedRoute: ActivatedRoute) {
    this.routeService = routeService;
    this.locationName = activatedRoute.snapshot.params['name'];
  }

  ngOnInit() {
  }

  getDestinations(): Location[] {
    return this.routeService.getDestinations(this.locationName);
  }

}
