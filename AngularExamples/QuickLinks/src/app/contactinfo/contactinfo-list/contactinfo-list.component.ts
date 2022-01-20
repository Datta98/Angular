import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-contactinfo-list',
  templateUrl: './contactinfo-list.component.html',
  styleUrls: ['./contactinfo-list.component.css']
})
export class ContactinfoListComponent implements OnInit {
contactModels:any;
  constructor(private httpProxy:HttpClient) {
   this.contactModels="";
   }

  ngOnInit() {
    this.httpProxy.get( "http://localhost:4000/api/contact").subscribe(data =>{
      console.log(data);
      this.contactModels=data;
  });


  }
}
