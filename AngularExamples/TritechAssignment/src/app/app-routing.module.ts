import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../events/home/home.component'
import{LoginComponent} from '../events/login/login.component'
import{SignupComponent} from '../events/signup/signup.component'
import{MainpageComponent} from '../events/mainpage/mainpage.component'
const routes: Routes = [
    //(path:"home",component:)
    {path:"",redirectTo:'main',pathMatch:'full'},
    {path:"main",component:MainpageComponent},
    {path:"home",component:HomeComponent,children:[
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent}
    ]}
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
