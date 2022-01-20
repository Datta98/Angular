import { NgModule } from '@angular/core';
//import { GreeterComponent } from './greeter.component';
import { BrowserModule } from '@angular/platform-browser';
//import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
//import { BindingComponent } from './binding/binding.component';
import { gallery} from "./gallery/gallery.module";
import {AppRootComponent} from "./app-Root/approot.component";
import { HttpClientModule } from '@angular/common/http';
import {GalleryRoutingModule} from "./gallery/gallery.routing.module"
import {QuickLinksModule} from "../app/quicklinks/quicklinks.module"
import { AppRoutingModule } from './app.routing.module';
import { AdminrootComponent } from './adminroot/adminroot.component';
import {ContactInfoModule} from "../app/contactinfo/contactinfo.module";
import {MainHeaderrComponent} from "../app/mainheader/mainheader.component";

import { HomeComponent } from './nav-router/home/home.component';
import {AccountsModule} from './nav-router/accounts/accounts.module';
import { AdmindashboardComponent } from './nav-router/admindashboard/admindashboard.component'






@NgModule({
    declarations: [
    // GreeterComponent,
    // PortfolioComponent,
    // BindingComponent,

    AppRootComponent,
    AdminrootComponent,
    MainHeaderrComponent,
    HomeComponent,
    AdmindashboardComponent
  
  ],
    imports: [
        BrowserModule,
        FormsModule,
        gallery,
        HttpClientModule,
        AppRoutingModule,
        QuickLinksModule,
        GalleryRoutingModule,
        ContactInfoModule,
        AccountsModule
        


    ],
    providers: [],
    bootstrap: [AppRootComponent]
  })
  export class AppModule { }
  