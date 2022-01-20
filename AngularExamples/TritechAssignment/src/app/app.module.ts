import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {AppRootComponent} from "../appRoot/appRoot.component"
import {EventsModule} from "../events/events.module"
import { HttpClientModule } from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import {StatisticsModule} from "../statistics/statistics.module"
import {gallery} from "../gallery/gallery.module"
import{MenuModule} from "../menu/menu.module"
import{QuickLinksModule} from "../quicklinks/quicklinks.module"
import {ContactInfoModule} from "../contactinfo/contactinfo.module"
import {TestimonialsModule} from "../testimonials/testimonials.module"
import {FooterModule} from "../footer/footer.module"
import{AppRoutingModule}from './app-routing.module'
import { HomeComponent } from '../events/home/home.component'
import { from } from 'rxjs';
//declaration
@NgModule({
    declarations:[AppRootComponent],
    imports:[BrowserModule,EventsModule,HttpClientModule,
        ReactiveFormsModule,StatisticsModule,gallery,
        MenuModule,QuickLinksModule,ContactInfoModule,
        TestimonialsModule,FooterModule,AppRoutingModule,],
    
    bootstrap:[AppRootComponent],
    exports:[]
})
export class AppModule{

}