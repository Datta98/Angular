import {Component} from "@angular/core"
import {Router} from '@angular/router'
@Component({
    selector:"main-header",
    templateUrl:"./mainheader.component.html",
    styleUrls:["./mainheader.component.css"]
})
export class MainHeaderComponent{
    //logic
    constructor(public route:Router) {
        
       }
       onHome(){
        
      this.route.navigate(["/home"])
        }
        onmain()
        {
            this.route.navigate(["/main"])
        }
}