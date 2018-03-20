import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component( {
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit {

    email = new FormControl( '', [Validators.required, Validators.email] );
    password = new FormControl( '', [Validators.required] );
    phone = new FormControl( '', [Validators.required] );
    defaultGender = 'male';
    hide: boolean;
    constructor() { }

    ngOnInit() {
    }

    getEmailErrorMessage() {
        return this.email.hasError( 'required' ) ? 'You must enter a value' :
            this.email.hasError( 'email' ) ? 'Not a valid email' :
                '';
    }

    getPasswordErroMessage() {
        return this.password.hasError( 'required' ) ? 'You must enter a value' : '';
    }

    getPhoneErroMessage() {
        return this.phone.hasError( 'required' ) ? 'You must enter a value' : '';
    }
}
