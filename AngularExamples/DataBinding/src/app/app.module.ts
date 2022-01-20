import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {DataBindingComponent} from "./databinding.component"
import { FormsModule } from '@angular/forms'; 
@NgModule({
    declarations:[DataBindingComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[DataBindingComponent],
    exports:[]
})
export class AppModule{

}