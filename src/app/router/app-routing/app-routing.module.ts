import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';

@NgModule( {
    imports: [
        CommonModule,
        AppRoutingRoutingModule
    ],
    declarations: [],
    exports: [AppRoutingRoutingModule]
} )
export class AppRoutingModule { }
