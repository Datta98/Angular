import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,RequiredValidator, FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http';
import {ContactInfoModel} from '../models/contactinfomodel.model'


@Component({
  selector: 'app-createcontact-info',
  templateUrl: './createcontact-info.component.html',
  styleUrls: ['./createcontact-info.component.css']
})
export class CreatecontactInfoComponent implements OnInit {

  details = new FormControl('');
  
  detailsform=new FormGroup({
    content:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required])

  });
 
  onSubmit(data:any)
  {
    //console.log(this.detailsform.value);
    console.log(this.content,this.address,this.phone,this.email);
    console.log(data);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     this.http.post<ContactInfoModel>("http://localhost:5000/api/Contact", data, httpOptions).subscribe(data=>{console.log("success")});
  }

  clearForm()
  {
    this.detailsform.reset();
  }
   get content(){return this.detailsform.get('content')}

   
  get address() {
    return this.detailsform.get('address');
  }
  get phone() {
    return this.detailsform.get('phone');
  }
  get email() {
    return this.detailsform.get('email');
  }

  ngOnInit(): void {}
  constructor(private http : HttpClient)
  {}
  

}
