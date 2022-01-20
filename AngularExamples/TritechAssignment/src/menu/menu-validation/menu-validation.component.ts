import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http';
import { DataModel } from '../models/dataModels.model';
import { analyze } from 'eslint-scope';


@Component({
  selector: 'app-menu-validation',
  templateUrl: './menu-validation.component.html',
  styleUrls: ['./menu-validation.component.css']
})
export class MenuValidationComponent {

  details = new FormControl('');
  dataModels:any;
  // updatedetails(){
  //   this.details.setValue('Microsot');
  // }
  detailsform=new FormGroup({
    Title:new FormControl('',Validators.required),
    Contents:new FormControl('',Validators.required),
   
  });
  constructor(private http : HttpClient){
    this.dataModels= null;
 }
  onSubmit(data:any)
  {
  //   this.httpProxy.post<any>('http://localhost:5000/api/SectionInfo', { Title:"val.Title",Contents:"val.Title" }  ).subscribe(data => {
  //     this.details = data;
  //   console.log(this.detailsform.value);

    
  // });

  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    this.http.post<DataModel>("http://localhost:5000/api/SectionInfo", data, httpOptions).subscribe(data=>{console.log("success")});
  }
  saveapi(val: any){
    console.log(val);
  }
  clearForm()
  {
    this.detailsform.reset();
  }
   get Title(){return this.detailsform.get('Title')}

   
  get Contents() {
    return this.detailsform.get('Contents');
  }

}
