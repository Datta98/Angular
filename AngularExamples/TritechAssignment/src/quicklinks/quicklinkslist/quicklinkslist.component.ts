import {Component, OnInit} from "@angular/core"
import {LinksModel} from "../models/linksmodel.nodel"
import { HttpClient } from '@angular/common/http'
@Component({
    selector:"quicklinks-list",
    templateUrl:"./quicklinkslist.component.html",
    styleUrls:['./quicklinkslist.component.css']
})
export class QuickLinksList implements OnInit{
    linkModels : any;
    //Lifecycle Hook
 ngOnInit(){
    this.httpProxy.get( "http://localhost:5007/api/Accouts").subscribe(data =>{
        console.log(data);
        this.linkModels=data;
    } );
 }
 constructor(private httpProxy : HttpClient){
    this.linkModels= null;
 }
}