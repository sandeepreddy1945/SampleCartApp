import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCompComponent } from './calendar-comp.component';

describe('CalendarCompComponent', () => {
  let component: CalendarCompComponent;
  let fixture: ComponentFixture<CalendarCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
