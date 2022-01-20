import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,RequiredValidator, FormBuilder} from "@angular/forms";
import { HttpClient } from '@angular/common/http'

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
  onSubmit()
  {
    //console.log(this.detailsform.value);
    this.httpProxy.post<any>('http://localhost:5000/api/Contact', { content:this.content,email:this.email,address:this.address,phone:this.phone }  ).subscribe(data => {
      this.details = data;
    
  })
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
  constructor(private httpProxy : HttpClient)
  {}
  

}
