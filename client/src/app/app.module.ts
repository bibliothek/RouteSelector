import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatreiRouteConfig } from './config/matrei-route-config';
import { RandomRouteSelector } from './service/route-selection/random-route-selector';
import { RouteConfig } from './service/route-selection/route-config';
import { RouteSelector } from './service/route-selection/route-selector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: RouteConfig, useClass: MatreiRouteConfig },{ provide: RouteSelector, useClass: RandomRouteSelector }],
  bootstrap: [AppComponent]
})
export class AppModule { }
