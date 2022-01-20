import {Component,Input, OnInit} from '@angular/core'
import { CssSelector } from '@angular/compiler';

@Component({
    selector:"menu-item",
    templateUrl:"./menuItem.components.html",
    styleUrls:["./menuItem.components.css"]
})
export class MenuItemComponent implements OnInit{
@Input()
heading:string;
@Input()
contents:any
@Input()
bgcolor:string
@Input()
bgcolorcontent:string
@Input()
color:string

constructor(){
    this.heading=""
    this.contents=""
    this.bgcolor=""
    this.bgcolorcontent=""
    this.color=""
  
}
ngOnInit(){
 
}

}