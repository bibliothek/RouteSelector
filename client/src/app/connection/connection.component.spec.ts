import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionComponent } from './connection.component';
import { RouteConfig } from '../service/route-selection/route-config';
import { ExampleRouteConfig } from '../config/example-route-config';
import { RouteSelector } from '../service/route-selection/route-selector';
import { RandomRouteSelector } from '../service/route-selection/random-route-selector';
import { RouterTestingModule } from '@angular/router/testing';

describe('RouteComponent', () => {
  let component: ConnectionComponent;
  let fixture: ComponentFixture<ConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        imports: [RouterTestingModule],
        providers: [
          { provide: RouteConfig, useClass: ExampleRouteConfig },
          { provide: RouteSelector, useClass: RandomRouteSelector },
        ],
        declarations: [ConnectionComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
