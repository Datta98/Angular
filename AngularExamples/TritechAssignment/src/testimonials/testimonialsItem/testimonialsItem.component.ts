import {Component,Input} from "@angular/core"
@Component({
    selector:"testimonial-item",
    templateUrl:"./testimonialsItem.component.html",
    styleUrls:['./testimonialsItem.component.css']
})
export class TestimonialItemComponent{
    @Input()
    content:string;
    @Input()
    name:string;
    @Input()
    role:string;
    @Input()
    img_src:string;

    constructor(){
        this.content="";
        this.name="";
        this.role="";
        this.img_src="";
    }
}