import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AppMaterialModule } from './app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModel } from '@angular/forms';
import { ModelcheckComponent } from './modelcheck/modelcheck.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginserviceService } from './services/loginservice.service';
import { LoginAuthComponent } from './components/login-component';
import { HttpModule } from '@angular/http';
import { ShoppingTreeComponent } from './shopping-tree/shopping-tree.component';
import { TreeModule } from 'angular-tree-component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AppRoutingModule } from './router/app-routing/app-routing.module';
import { FrontCoverComponent } from './front-cover/front-cover.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailServiceService } from './services/email-service.service';
import { CalendarModule } from 'angular-calendar';
import { CalendarCompComponent } from './calendar-comp/calendar-comp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './demo-utils/module';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
// this includes the core NgIdleModule but includes keepalive providers for easy wireup

import { MomentModule } from 'angular2-moment';
import { CalendarEventDialogComponent } from './calendar-event-dialog/calendar-event-dialog.component'; // optional, provides moment-style pipes for date formatting

@NgModule( {
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        RegisterComponent,
        ModelcheckComponent,
        ShoppingTreeComponent,
        DragDropComponent,
        FrontCoverComponent,
        ForgotPasswordComponent,
        CalendarCompComponent,
        CalendarEventDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        TreeModule,
        Ng2DragDropModule.forRoot(),
        AppRoutingModule,
        NgxCarouselModule,
        NgbModule.forRoot(),
        DemoUtilsModule,
        CalendarModule.forRoot(),
        MomentModule,
        NgIdleKeepaliveModule.forRoot(),

    ],
    providers: [LoginserviceService, AppRoutingModule, EmailServiceService],
    bootstrap: [AppComponent],
    exports: [NavBarComponent, ModelcheckComponent, ShoppingTreeComponent, DragDropComponent, FrontCoverComponent, ForgotPasswordComponent],
    entryComponents: [LoginComponent, RegisterComponent, CalendarEventDialogComponent]
} )
export class AppModule { }
