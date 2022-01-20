import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  linkModels : any;
  ngOnInit(){
    this.httpProxy.get( "http://localhost:5000/api/product").subscribe(data =>{
        console.log(data);
        this.linkModels=data;
    } );
 }
 constructor(private httpProxy : HttpClient){
    this.linkModels= null;
 }

}
