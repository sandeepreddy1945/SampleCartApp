import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { LoginAuthComponent } from '../components/login-component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { Router } from '@angular/router';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

    email = new FormControl( '', [Validators.required, Validators.email] );
    password = new FormControl( '', [Validators.required] );
    hasError = false;
    authenticating = false;
    loginBoundary: LoginAuthComponent;
    hide: false;
    hideProgressBar: boolean;

    constructor( private loginService: LoginserviceService, private dialog: MatDialogRef<LoginComponent>, private router: Router ) { }

    ngOnInit() {
        this.hideProgressBar = true;
    }
    getEmailErrorMessage() {
        return this.email.hasError( 'required' ) ? 'You must enter a value' :
            this.email.hasError( 'email' ) ? 'Not a valid email' :
                '';
    }

    getPasswordErroMessage() {
        return this.password.hasError( 'required' ) ? 'You must enter a value' : '';
    }

    authenticate() {
        this.hideProgressBar = false;
        console.log( 'User Name : ' + this.email.value );
        console.log( 'User Password : ' + this.password.value );

        this.loginService.authenticateUser( this.email.value, this.password.value )
            .subscribe( loginComp => {
                console.log( 'Post Call Successfull ' );
                console.log( 'Data Retrived : ' + loginComp.loginEmail + ' ' + loginComp.loginPass );
                this.hideProgressBar = true;
                this.dialog.close();
            }, error => {console.log( 'Error Occured in calling resource' ); } );
    }

    authenticateUser() {
        this.hideProgressBar = false;
        this.loginService.authenticateUserByHttp( this.email.value, this.password.value ).
            then( success => { this.hideProgressBar = true; } ).catch( err => { } );
    }

    forgotPassword() {
        this.dialog.close();
        this.router.navigateByUrl( '/forgot-pasword' );
    }
}
