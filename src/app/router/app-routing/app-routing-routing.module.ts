import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { ShoppingTreeComponent } from '../../shopping-tree/shopping-tree.component';
import { ForgotPasswordComponent } from '../../forgot-password/forgot-password.component';
import { CalendarCompComponent } from '../../calendar-comp/calendar-comp.component';

const routes: Routes = [
    { path: '', redirectTo: '/nav-bar', pathMatch: 'full' },
    { path: 'nav-bar', component: NavBarComponent },
    { path: 'shopping-tree', component: ShoppingTreeComponent },
    { path: 'forgot-pasword', component: ForgotPasswordComponent },
    { path: 'calendar', component: CalendarCompComponent },
    { path: '**', redirectTo: '/nav-bar' }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingRoutingModule { }
