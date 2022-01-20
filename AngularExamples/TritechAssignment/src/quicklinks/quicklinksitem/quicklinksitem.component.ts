import {Component,Input} from "@angular/core"

@Component({
    selector:"quicklinks-item",
    templateUrl:"./quicklinksitem.component.html",
    styleUrls:["./quicklinksitem.component.css"]
    
})

 export class QuickLinksItem{
 @Input()
 link:string;
 @Input()
 href:string;
 constructor()
 {
     this.link="";
     this.href="";
 }
}