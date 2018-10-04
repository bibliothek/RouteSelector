import { Component, OnInit } from '@angular/core';
import { RouteSelectionService } from '../service/route-selection/route-selection.service';

@Component({
  selector: 'app-start-selection',
  templateUrl: './start-selection.component.html',
  styleUrls: ['./start-selection.component.css']
})
export class StartSelectionComponent implements OnInit {

  routeService;

  constructor(routeService: RouteSelectionService) {
    this.routeService = routeService;
  }

  ngOnInit() {
  }

  locationSelected(location: Location): void {
    console.log(location);
  }

}
