import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSelectionComponent } from './start-selection.component';

describe('StartSelectionComponent', () => {
  let component: StartSelectionComponent;
  let fixture: ComponentFixture<StartSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSelectionComponent ]
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
