import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouteConfig } from './service/route-selection/route-config';
import { MatreiRouteConfig } from './config/matrei-route-config';
import { RouteSelector } from './service/route-selection/route-selector';
import { RandomRouteSelector } from './service/route-selection/random-route-selector';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: RouteConfig, useClass: MatreiRouteConfig },{ provide: RouteSelector, useClass: RandomRouteSelector }]
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
