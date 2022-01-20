import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import {CreateQuicklinkComponent} from "../app/quicklinks/create-quicklink/create-quicklink.component";
import {QuickLinksList} from "../app/quicklinks/quicklinkslist/quicklinkslist.component"
import {CreatecontactInfoComponent} from "../app/contactinfo/createcontact-info/createcontact-info.component";
import  {ContactinfoListComponent} from "../app/contactinfo/contactinfo-list/contactinfo-list.component"
import { HomeComponent } from './nav-router/home/home.component';
import { LoginComponent } from './nav-router/accounts/login/login.component';
import { SignupComponent } from './nav-router/accounts/signup/signup.component';
import { AdmindashboardComponent } from './nav-router/admindashboard/admindashboard.component';
import {AdminrootComponent} from "./adminroot/adminroot.component"
import{UserCanDeactivate} from './user.canDeactivate'


const Routes :Routes = [
     { path: 'createquicklink', component: CreateQuicklinkComponent},
    // { path: 'listquicklink', component: QuickLinksList},
    {path:'adminroot',component:AdminrootComponent },
     { path: 'createcontactinfo', component: CreatecontactInfoComponent},
    // { path: 'listcontactinfo', component: ContactinfoListComponent},
    //{  path: '', redirectTo: '/home', pathMatch: 'full'}
    {path:"home",component:HomeComponent,children:[
        {path:"login",component:LoginComponent},
        {path:"signup",component:SignupComponent}
      ]},
      {path:"admindashboard/:activeuser",component:AdmindashboardComponent,canDeactivate:[UserCanDeactivate]}
];

@NgModule({
    imports :[
        RouterModule.forRoot(Routes),
    
    ],
    exports:[ RouterModule]
})

export class AppRoutingModule{}