import { Injectable } from '@angular/core';


@Injectable()
export class EmailServiceService {

    private require: any;
    private email = this.require( '../../../node_modules/emailjs/email' );
    private server = this.email.server.connect( {
        user: 'username',
        password: 'password',
        host: 'smtp.your-email.com',
        ssl: true
    } );


    constructor() { }

    sendMessage() {
        // send the message and get a callback with an error or details of the message that was sent
        this.server.send( {
            text: 'i hope this works',
            from: 'you <username@your-email.com>',
            to: 'someone <someone@your-email.com>, another <another@your-email.com>',
            cc: 'else <else@your-email.com>',
            subject: 'testing emailjs'
        }, function( err, message ) { console.log( err || message ); } );
    }
}
