import {Component,OnInit} from "@angular/core"
import {EventModel} from "../models/eventmodel.module"
import { HttpClient } from '@angular/common/http'
@Component({
    selector:"event-list",
    templateUrl:"./eventList.component.html"
   
})
export class EventListComponent implements OnInit{
//logic
eventModels : any;
    //Lifecycle Hook
 ngOnInit(){
    this.httpProxy.get( "http://localhost:5000/api/event").subscribe(data =>{
        console.log(data);
        this.eventModels=data;
    } );
}
constructor(private httpProxy : HttpClient){
   this.eventModels= null;
}
}