import { Component,Input } from '@angular/core';

@Component({
  selector: 'gallery-Item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
@Input()
Url:string;
@Input()
alter:string;

constructor(){
  this.Url ="";
  this.alter="";
}
}
