import { GalleryModel } from './../models/galleryModel.model';

import { GalleryControllerService } from '../services/gallerycontroller.service';
import { gallery } from './../gallery.module';
import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  title = 'Gallery';
  galleryModels:any;

  constructor(public apiService:GalleryControllerService){
    this.galleryModels= null;
 
  }
  apilist(){
    this.apiService.listGalleryItem().subscribe(data =>{
      console.log(data);
      this.galleryModels=data;
      });
  }
ngOnInit(){
  this.apilist();
}
}

       
       
   

 


