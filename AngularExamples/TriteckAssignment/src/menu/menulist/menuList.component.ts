import {Component} from '@angular/core'
import { CssSelector } from '@angular/compiler';
import { HttpClient } from '@angular/common/http'
@Component({
    selector:"menu-list",
    templateUrl:"./menuList.component.html"
    
})
export class MenuListComponent{
  
    contents:Array<any>;
    temp:any;
    //Lifecycle Hook
 ngOnInit(){
    this.httpProxy.get( "http://localhost:5006/api/Sectioninfo").subscribe((data) =>{
        console.log(data);
        let dataModels:any=data;
       
    for(let i=0;i<dataModels.length;i++)
    {
       // console.log(this.dataModels[i].contents)
       this.contents.push(dataModels[i]);  
    } 
    } );
 }
 constructor(private httpProxy : HttpClient){
  this.contents=[];

 }

}