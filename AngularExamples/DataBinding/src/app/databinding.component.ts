import {Component} from "@angular/core"


@Component({
    selector:"databinding",
    templateUrl:"./databinding.component.html",
    styleUrls:["./databinding.component.css"]
})

 export class DataBindingComponent {
    appName = "My name is Shridatta "; //String interpolation

    userName:string = "ShriDatta"; //Property binding

     myname:string="";
    onShow()
        {
           this.myname = "Excelsof"; //Event Binding
    } 

    myCSSClass = "red"; //Class Binding
}
