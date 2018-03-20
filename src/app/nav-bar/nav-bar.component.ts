import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
@Component( {
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
} )
export class NavBarComponent implements OnInit {

    panelOpenState: boolean = false;
    constructor( private dialog: MatDialog ) { }

    ngOnInit() {
    }

    OnLoginClick(): void {
        this.dialog.open( LoginComponent );
    }

    OnRegisterClick(): void {
        this.dialog.open( RegisterComponent );
    }

    displayLocation() {
        navigator.geolocation.getCurrentPosition( function( position ) {
            alert( 'Location is :  Longitude --> ' + position.coords.longitude + ' Latitue is -->' + position.coords.latitude );
        } );
    }
}
