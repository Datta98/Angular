import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  title = 'Gallery';
  galleryModels:any;
  constructor(private httpProxy : HttpClient){
    this.galleryModels= null;
  }
  ngOnInit(){
    this.httpProxy.get( 'http://localhost:5022/api/Gallery').subscribe(data =>{
        console.log(data);
        this.galleryModels=data;
    } );
 }
 
}

