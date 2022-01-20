import {NgModule} from "@angular/core"

import {QuickLinksItem} from "./quicklinksitem/quicklinksitem.component"
import{QuickLinksList} from "./quicklinkslist/quicklinkslist.component"
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common";
import { CreateQuicklinkComponent } from './create-quicklink/create-quicklink.component'
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
    declarations:[QuickLinksItem,QuickLinksList, CreateQuicklinkComponent],
    imports:[HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
    bootstrap:[],
    exports:[QuickLinksList,CreateQuicklinkComponent]
})
export class QuickLinksModule{

}