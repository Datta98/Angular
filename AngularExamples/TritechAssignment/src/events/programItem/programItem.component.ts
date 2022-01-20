import {Component,Input} from "@angular/core"

@Component({
  selector: 'program-Item',
  templateUrl: './programItem.component.html',
  styleUrls: ['./programItem.component.css']
})
export class ProgramItemComponent {
     @Input()
     img_src:string;
   
  constructor() { 
  
    this.img_src= "";
  }
  
}
