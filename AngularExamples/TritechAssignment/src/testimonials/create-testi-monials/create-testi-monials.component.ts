import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-testi-monials',
  templateUrl: './create-testi-monials.component.html',
  styleUrls: ['./create-testi-monials.component.css']
})
export class CreateTestiMonialsComponent  {

  ContentMessage : string;
  ImageSource : string;
  Name : string;
  Role : String;

  constructor() {
    this.ContentMessage="";
    this.ImageSource="";
    this.Name="";
    this.Role="";    
   }

  ngOnInit(): void {
  }

  onSubmitClick(){
    console.log(this.ContentMessage,this.ImageSource,this.Name,this.Role);
  }
  onClearClick(){
    this.ContentMessage="";
    this.ImageSource="";
    this.Name="";
    this.Role="";
  }
  
  
}
