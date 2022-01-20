import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
// import {QuickLinks} from "./quicklinks.component"
import {QuickLinksModule} from "./quicklinks/quicklinks.module"
import {AppRootComponent} from "./approot/approot.component"
import {ContactInfoModule} from "./contactinfo/contactinfo.module"
import {gallery} from "./gallery/gallery.module"
import {FooterModule}from "./footer/footer.module"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common"
import {ReactiveFormsModule} from "@angular/forms";
import { QuickLinksControllerService } from 'src/services/quickLinkscontroller.service';
 







@NgModule({
    declarations:[AppRootComponent],
    imports:[BrowserModule,QuickLinksModule,ContactInfoModule,gallery,FooterModule,HttpClientModule,
        CommonModule,ReactiveFormsModule],
    bootstrap:[AppRootComponent],
    exports:[],
    providers:[
        {provide:QuickLinksControllerService,useClass:QuickLinksControllerService},
        {provide:"quickLinksApiUrl",useValue:"http://localhost:5000/api/Accouts"}
    ]
})
export class AppModule{

}