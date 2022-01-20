import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http'
import {ContactInfoItem} from "./contactinfo-item/contactinfo-item.component"
import{ContactinfoListComponent} from "./contactinfo-list/contactinfo-list.component";
import { CreatecontactInfoComponent } from './createcontact-info/createcontact-info.component'
import {FormsModule} from "@angular/forms"
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations:[ContactinfoListComponent,ContactInfoItem, CreatecontactInfoComponent],
    imports:[CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
    bootstrap:[],
    exports:[ContactinfoListComponent,CreatecontactInfoComponent]
})
export class ContactInfoModule{

}