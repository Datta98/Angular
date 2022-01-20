import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import {DataModel} from "../models/dataModel.model"
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-testimonials-detail',
  templateUrl: './testimonials-detail.component.html',
  styleUrls: ['./testimonials-detail.component.css']
})
export class TestimonialsDetailComponent  {

  dataModels : any;
  details = new FormControl('');
  // updatedetails(){
  //   this.details.setValue('Microsot');
  // }
  detailsform=new FormGroup({
    ContentMessage:new FormControl('',Validators.required),
    ImageSource:new FormControl('',Validators.required),
    Name:new FormControl('',Validators.required),
    Role:new FormControl('',Validators.required)

  });
  constructor(private http : HttpClient){
   
 }
  saveapi(val: any){
    console.log(val);
  }
  onSubmit(data:any)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    this.http.post<DataModel>(" http://localhost:5000/api/Testimonials", data, httpOptions).subscribe(data=>{console.log("successfully uploaded")});
  }
  clearForm()
  {
    this.detailsform.reset();
  }
   get ContentMessage(){return this.detailsform.get('ContentMessage')}

   
  get ImageSource() {
    return this.detailsform.get('ImageSource');
  }
  get Name() {
    return this.detailsform.get('Name');
  }
  get Role() {
    return this.detailsform.get('Role');
  }

}
