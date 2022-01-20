import {NgModule} from "@angular/core"
import {EventImageComponent} from "./eventImage/eventImage.component"
import {ItemListComponent} from "./itemList/itemList.component"
import {ProgramItemComponent} from "./programItem/programItem.component";
import {EventItemComponent} from "./eventContainer/eventItem/eventItem.component"
import {EventListComponent} from "./eventContainer/eventList/eventList.component"
import { CreateEventComponent } from './create-event/create-event.component'
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common"
import {ReactiveFormsModule} from '@angular/forms';
import {MainHeaderComponent} from "../events/mainheader/mainheader.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import{AppRoutingModule} from '../app/app-routing.module';
import { MainpageComponent } from '../events/mainpage/mainpage.component'
import {StatisticsModule} from "../statistics/statistics.module"
import {gallery} from "../gallery/gallery.module"
import{MenuModule} from "../menu/menu.module"
import{QuickLinksModule} from "../quicklinks/quicklinks.module"
import {ContactInfoModule} from "../contactinfo/contactinfo.module"
import {TestimonialsModule} from "../testimonials/testimonials.module"
import {FooterModule} from "../footer/footer.module"






//declaration
@NgModule({
    declarations:[EventImageComponent,ItemListComponent,ProgramItemComponent, CreateEventComponent,EventItemComponent,EventListComponent,MainHeaderComponent, HomeComponent, LoginComponent, SignupComponent, MainpageComponent],
    imports:[FormsModule,HttpClientModule,CommonModule,ReactiveFormsModule,AppRoutingModule,
        StatisticsModule,gallery,MenuModule,QuickLinksModule,ContactInfoModule,TestimonialsModule,FooterModule
    
    ],
    bootstrap:[],
    exports:[ItemListComponent,EventImageComponent,CreateEventComponent,EventListComponent,MainHeaderComponent,MainpageComponent]
})
export class EventsModule{

}