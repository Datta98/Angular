import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import {EventModel} from "../eventContainer/models/eventmodel.module"
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  Title:string;
  Date:string;
  Location:string;
  Description:string;
  //eventmodels:EventModel;

  constructor(private http : HttpClient) { 
    this.Title="";
    this.Date="";
    this.Location="";
    this.Description="";
    // this.eventmodels=EventModel;
  }

  onTitleEdit( titlevalue:string):void{
    this.Title = titlevalue;
}
onDateEdit( datevalue:string):void{
  this.Date = datevalue;
}
onLocationEdit( locationvalue:string):void{
this.Location = locationvalue;
}
onDescriptionEdit( descriptionvalue:string):void{
this.Description = descriptionvalue;
}
onSubmit(data:any){
  console.log(this.Title,this.Date,this.Location,this.Description);
  console.log(data);
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
   this.http.post<EventModel>("http://localhost:5000/api/event", data, httpOptions).subscribe(data=>{console.log("success")});
  }

  onClear(){
  
      this.Title="";
      this.Date="";
      this.Location="";
      this.Description="";
  }
  ngOnInit(): void {
  }

  DaTadetails = new FormControl('');
  
  
  detailsform =new FormGroup({
    title:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required, Validators.minLength(10)])
  });
  
  
 

    get title(){return this.detailsform.get('title')}

   
   get date() {
     return this.detailsform.get('date');
   }
  
   get location() {
     return this.detailsform.get('location');
   }
   get description() {
     return this.detailsform.get('description');
   }

// onSubmit()
  // {
  //   console.log(this.detailsform.value);
    
  // }
  // clearForm()
  // {
  //   this.detailsform.reset();
  // }

}
