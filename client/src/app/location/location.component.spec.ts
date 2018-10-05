import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { RouteConfig } from '../service/route-selection/route-config';
import { ExampleRouteConfig } from '../config/example-route-config';
import { RouteSelector } from '../service/route-selection/route-selector';
import { RandomRouteSelector } from '../service/route-selection/random-route-selector';
import { RouterTestingModule } from '@angular/router/testing';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LocationComponent ],
      providers: [
        { provide: RouteConfig, useClass: ExampleRouteConfig },
        { provide: RouteSelector, useClass: RandomRouteSelector },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
