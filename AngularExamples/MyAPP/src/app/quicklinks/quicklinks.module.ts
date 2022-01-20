import {NgModule} from "@angular/core"

import {QuickLinksItem} from "./quicklinksitem/quicklinksitem.component"
import{QuickLinksList} from "./quicklinkslist/quicklinkslist.component"
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common";
import { CreateQuicklinkComponent } from './create-quicklink/create-quicklink.component'
import {ReactiveFormsModule} from "@angular/forms";
import  {AccountscontrollerService} from "../quicklinks/services/accountscontroller.service"
@NgModule({
    declarations:[QuickLinksItem,QuickLinksList, CreateQuicklinkComponent],
    imports:[HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
    bootstrap:[],
    providers: [
        {provide:AccountscontrollerService,useClass:AccountscontrollerService},
        {provide:"QuickLinksAPIUrl",useValue:"https://localhost:44356/api/accouts"}
    ],
    exports:[QuickLinksList,CreateQuicklinkComponent]
})
export class QuickLinksModule{

}