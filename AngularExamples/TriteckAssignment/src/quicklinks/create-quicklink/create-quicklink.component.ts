import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http';
import{LinksModel} from '../models/linksmodel.nodel'
@Component({
  selector: 'app-create-quicklink',
  templateUrl: './create-quicklink.component.html',
  styleUrls: ['./create-quicklink.component.css']
})
export class CreateQuicklinkComponent implements OnInit {
  
 

  ngOnInit(): void { 
   
  }

 
  details = new FormControl('');
  
  detailsform=new FormGroup({
    LinkText:new FormControl('',Validators.required),
    Href:new FormControl('',Validators.required),
    

  });


  onSubmit(data:any)
  {
    //console.log(this.LinkText,this.Ref);
    console.log(data)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    this.http.post<LinksModel>('http://localhost:5000/api/Accouts',data,httpOptions ).subscribe(data => {
      (console.log("success"))
  });
  // console.log(this.detailsform.value);
  }

  
  clearForm()
  {
    this.detailsform.reset();
  }
   get Links(){return this.detailsform.get('LinkText')}

   
 
  get Href() {
    return this.detailsform.get('Href');
  }
  constructor(private http : HttpClient)
  {
   
  }
  
}
