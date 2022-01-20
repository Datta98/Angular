import {Component,Input} from "@angular/core"

@Component({
    selector:"data-statistics",
    templateUrl:"./dataStatistics.component.html",
    styleUrls:["./dataStatistics.component.css"]
})
export class DataStatisticsComponent{
@Input()
title:string;
@Input()
text:string;
@Input()
value:number;
@Input()
circleColor:string;


constructor()
{
    this.title="12 Years of Experience";
    this.text="";
    this.value=0;
    this.circleColor="";
    
}
}