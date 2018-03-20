import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventDialogComponent } from './calendar-event-dialog.component';

describe('CalendarEventDialogComponent', () => {
  let component: CalendarEventDialogComponent;
  let fixture: ComponentFixture<CalendarEventDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
