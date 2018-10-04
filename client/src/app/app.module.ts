import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleRouteConfig } from './config/example-route-config';
import { RandomRouteSelector } from './service/route-selection/random-route-selector';
import { RouteConfig } from './service/route-selection/route-config';
import { RouteSelector } from './service/route-selection/route-selector';
import { StartSelectionComponent } from './start-selection/start-selection.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartSelectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartSelectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: RouteConfig, useClass: ExampleRouteConfig }, { provide: RouteSelector, useClass: RandomRouteSelector }],
  bootstrap: [AppComponent]
})
export class AppModule { }
