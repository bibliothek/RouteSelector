import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSelectionComponent } from './start-selection.component';
import { RouteConfig } from '../service/route-selection/route-config';
import { ExampleRouteConfig } from '../config/example-route-config';
import { RouteSelector } from '../service/route-selection/route-selector';
import { RandomRouteSelector } from '../service/route-selection/random-route-selector';
import { RouterTestingModule } from '@angular/router/testing';

describe('StartSelectionComponent', () => {
  let component: StartSelectionComponent;
  let fixture: ComponentFixture<StartSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StartSelectionComponent],
      providers: [
        { provide: RouteConfig, useClass: ExampleRouteConfig },
        { provide: RouteSelector, useClass: RandomRouteSelector },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
