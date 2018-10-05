import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleRouteConfig } from './config/example-route-config';
import { RandomRouteSelector } from './service/route-selection/random-route-selector';
import { RouteConfig } from './service/route-selection/route-config';
import { RouteSelector } from './service/route-selection/route-selector';
import { StartSelectionComponent } from './start-selection/start-selection.component';
import { LocationComponent } from './location/location.component';
import { ConnectionComponent } from './connection/connection.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartSelectionComponent},
  {path: 'location/:name', component: LocationComponent},
  {path: 'route/:start/:end', component: ConnectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StartSelectionComponent,
    LocationComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: RouteConfig, useClass: ExampleRouteConfig }, { provide: RouteSelector, useClass: RandomRouteSelector }],
  bootstrap: [AppComponent]
})
export class AppModule { }
