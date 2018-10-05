import { ActivatedRoute } from '@angular/router';
import { RouteSelectionService } from './../service/route-selection/route-selection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

routeService: RouteSelectionService;
startName: string;
destinationName: string;

  constructor(routeService: RouteSelectionService, private activatedRoute: ActivatedRoute) {
    this.routeService = routeService;
    this.startName = activatedRoute.snapshot.params['start'];
    this.destinationName = activatedRoute.snapshot.params['end'];
   }

  ngOnInit() {
  }

}
