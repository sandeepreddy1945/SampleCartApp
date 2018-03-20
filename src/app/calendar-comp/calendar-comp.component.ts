import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
    CalendarEvent,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { addDays } from 'date-fns';
import { CustomEventTitleFormatter } from '../demo-utils/custom-event-title-formatter.provider';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CalendarEventDialogComponent } from '../calendar-event-dialog/calendar-event-dialog.component';
@Component( {
    selector: 'app-calendar-comp',
    templateUrl: './calendar-comp.component.html',
    styleUrls: ['./calendar-comp.component.css'],
    providers: [{
        provide: CustomEventTitleFormatter,
        useClass: CustomEventTitleFormatter
    }],
    changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class CalendarCompComponent implements OnInit {

    constructor( private dialog: MatDialog ) { }

    ngOnInit() {
    }

    view: string = 'month';

    viewDate: Date = new Date();

    events: CalendarEvent[] = [
        {
            'title': 'Draggable event',
            'color': colors.yellow,
            'start': new Date(),
            'draggable': true

        },
        {
            'title': 'A non draggable event',
            'color': colors.blue,
            'start': new Date()
        }
    ];

    refresh: Subject<any> = new Subject();

    eventTimesChanged( {
    event,
        newStart,
        newEnd
  }: CalendarEventTimesChangedEvent ): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }

    eventClicked( { event }: { event: CalendarEvent } ): void {
        this.dialog.open( CalendarEventDialogComponent );
        console.log( 'Event clicked', event );
    }
}
