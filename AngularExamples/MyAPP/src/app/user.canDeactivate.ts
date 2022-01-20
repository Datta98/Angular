import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {AdmindashboardComponent} from '../app/nav-router/admindashboard/admindashboard.component'
@Injectable({
    providedIn: 'root'
  })
export class UserCanDeactivate implements CanDeactivate<AdmindashboardComponent> {
canDeactivate() {
	return window.confirm('Do you want to continue?');
	}
}