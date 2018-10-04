import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouteConfig } from './service/route-selection/route-config';
import { ExampleRouteConfig } from './config/example-route-config';
import { RouteSelector } from './service/route-selection/route-selector';
import { RandomRouteSelector } from './service/route-selection/random-route-selector';
import { Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: RouteConfig, useClass: ExampleRouteConfig },
        { provide: RouteSelector, useClass: RandomRouteSelector },
        [{provide: APP_BASE_HREF, useValue: '/'}]
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'client'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('client');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to client!');
  }));
});
