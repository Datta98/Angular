import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import {DataStatisticModel} from "../models/dataStatistic.model";
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'; 
@Component({
  selector: 'app-validationform',
  templateUrl: './validationform.component.html',
  styleUrls: ['./validationform.component.css']
})
export class ValidationformComponent  {

  DaTadetails = new FormControl('');
  
  
  Validationform=new FormGroup({
    Title:new FormControl('',Validators.required),
    Value:new FormControl('',Validators.required),
    // Text:new FormControl('',[Validators.required, Validators.minLength(50)])
    Text:new FormControl('',Validators.required)
  });
  constructor(private http : HttpClient){

    }
  onSubmit(data:any)
  {
    console.log(this.Validationform.value);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    this.http.post<DataStatisticModel>("http://localhost:5000/api/DataStatistics", data, httpOptions).subscribe(data=>{console.log("success")});
    
  }
  clearForm()
  {
    this.Validationform.reset();
  }
   get Title(){return this.Validationform.get('Title')}

   
  get Value() {
    return this.Validationform.get('Value');
  }
  
  get Text() {
    return this.Validationform.get('Text');
  }



}
