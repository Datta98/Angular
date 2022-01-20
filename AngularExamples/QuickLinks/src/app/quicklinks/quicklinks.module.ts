import {NgModule, Component} from "@angular/core"

import {QuickLinksItem} from "./quicklinksitem/quicklinksitem.component"
import{QuickLinksList} from "./quicklinkslist/quicklinkslist.component"
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common";
import { CreateQuicklinkComponent } from './create-quicklink/create-quicklink.component'
import {ReactiveFormsModule} from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import {ContactinfoListComponent} from '../contactinfo/contactinfo-list/contactinfo-list.component'
import { from } from 'rxjs';

const routes: Routes = [

    { path: 'quicklinks', component: QuickLinksList },
    { path: 'createquicklinks', component: CreateQuicklinkComponent }
];



@NgModule({
    declarations:[QuickLinksItem,QuickLinksList, CreateQuicklinkComponent],
    imports:[HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)],
    bootstrap:[],
    exports:[QuickLinksList,CreateQuicklinkComponent,RouterModule]
})
export class QuickLinksModule{

}