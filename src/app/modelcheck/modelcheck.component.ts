import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-modelcheck',
    templateUrl: './modelcheck.component.html',
    styleUrls: ['./modelcheck.component.css']
} )
export class ModelcheckComponent implements OnInit {

    username: string;

    toUpperCase() {
        this.username = this.username.toUpperCase();
    }
    toLowerCase() {
        this.username = this.username.toLowerCase();
    }
    constructor() { }

    ngOnInit() {
    }

}
