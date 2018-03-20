import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Router } from '@angular/router';

@Component( {
    selector: 'app-calendar-event-dialog',
    templateUrl: './calendar-event-dialog.component.html',
    styleUrls: ['./calendar-event-dialog.component.css']
} )
export class CalendarEventDialogComponent implements OnInit {

    msgBriefDesc = new FormControl( '', [Validators.required] );
    msgDesc = new FormControl( '', [Validators.required] );
    radioGrp = new FormControl( '', [Validators.required] );
    hideProgressBar: boolean;
    favoriteSeason: string;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    constructor() { }

    ngOnInit() {
        this.hideProgressBar = true;
    }

    getBriefDescErroMsg() {
        return this.msgBriefDesc.hasError( 'required' ) ? 'You Must Enter Brief Description' : '';
    }

    getMsgDescErrorMsg() {
        return this.msgDesc.hasError( 'required' ) ? 'You Must Enter Description' : '';
    }

    onSave() {
        console.log( 'Radi Button Cheked is: ' + this.radioGrp.value );
    }
}
