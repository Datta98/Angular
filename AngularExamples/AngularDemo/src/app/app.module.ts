import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {GreeterComponent} from "./greeter.component"

@NgModule({
    declarations:[GreeterComponent],
    imports:[BrowserModule],
    bootstrap:[GreeterComponent],
    exports:[]
})
export class AppModule{

}