import {Component, OnInit} from "@angular/core"
import {DataModel} from "../models/dataModel.model"
import { HttpClient } from '@angular/common/http'
@Component({
    selector:"testimonials-list",
    templateUrl:"./testimonialsList.component.html",
    styleUrls:['./testimonialsList.component.css']
})
export class TestimonialListComponent implements OnInit{
    dataModels : any;
    //Lifecycle Hook
 ngOnInit(){
    this.httpProxy.get( "http://localhost:5009/api/Testimonials").subscribe(data =>{
        console.log(data);
        this.dataModels=data;
    } );
 }
 constructor(private httpProxy : HttpClient){
    this.dataModels= null;
 }
}