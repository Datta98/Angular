import {Component, Input} from "@angular/core"

@Component({
    selector:"contactinfo-item",
    templateUrl:"./contactinfo-item.component.html",
    styleUrls:["./contactinfo-item.component.css"]
})

 export class ContactInfoItem{
    @Input()
    email:string;
    @Input()
    phone:string;
    @Input()
    address:string;
    @Input()
    content:string;
    constructor(){
        this.email=""
        this.phone=""
        this.address=""
        this.content=""
    }
}