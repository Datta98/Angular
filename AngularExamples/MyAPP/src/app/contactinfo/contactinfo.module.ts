import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http'
import {ContactInfoItem} from "./contactinfo-item/contactinfo-item.component"
import{ContactinfoListComponent} from "./contactinfo-list/contactinfo-list.component";
import { CreatecontactInfoComponent } from './createcontact-info/createcontact-info.component'
import {FormsModule} from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms";
import{RouterModule,Routes} from "@angular/router";
import{ContactControllerService} from "../contactinfo/services/contactcontroller.service"

const appRoutes:Routes=[
    // {path:'contactinfo',component:ContactinfoListComponent},
    // {path:'createcontactinfo',component:CreatecontactInfoComponent},
    // {path:'',redirectTo:'/contactinfo',pathMatch:'full'}
];

@NgModule({
    declarations:[ContactinfoListComponent,ContactInfoItem, CreatecontactInfoComponent],
    imports:[CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)],
    bootstrap:[],
    providers: [
        {provide:ContactControllerService,useClass:ContactControllerService},
        {provide:"ContactApiUrl",useValue:"https://localhost:44380/api/contact"}
    ],
    exports:[ContactinfoListComponent,CreatecontactInfoComponent,RouterModule]
})
export class ContactInfoModule{

}