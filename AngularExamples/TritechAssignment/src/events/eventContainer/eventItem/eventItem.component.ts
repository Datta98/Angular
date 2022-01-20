import {Component,Input} from "@angular/core"

@Component({
    selector:"event-item",
    templateUrl:"./eventItem.component.html",
    styleUrls:["./eventItem.component.css"]
})
export class EventItemComponent{
@Input()
title:string;
@Input()
location:string;
@Input()
description:string;

@Input()
date:string;

constructor()
{
    this.title="";
    this.location="";
    this.description="";
    this.date = "";
}
}