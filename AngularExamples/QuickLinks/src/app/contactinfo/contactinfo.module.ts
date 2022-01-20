import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http'
import {ContactInfoItem} from "./contactinfo-item/contactinfo-item.component"
import{ContactinfoListComponent} from "./contactinfo-list/contactinfo-list.component";
import { CreatecontactInfoComponent } from './createcontact-info/createcontact-info.component'
import {FormsModule} from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';


const appRoutes:Routes=[
    {path:'contactinfo',component:ContactinfoListComponent},
    {path:'createcontactinfo',component:CreatecontactInfoComponent},
    
];





@NgModule({
    declarations:[ContactinfoListComponent,ContactInfoItem, CreatecontactInfoComponent],
    imports:[CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)],
    bootstrap:[],
    exports:[ContactinfoListComponent,CreatecontactInfoComponent,RouterModule]
})
export class ContactInfoModule{

}
