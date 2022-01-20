import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import {AccountscontrollerService} from "../services/accountscontroller.service"
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
    this.apiService.createNewQickLinksItem(data).subscribe(response=>
      alert("successfully uploaded"));
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
  constructor(private apiService : AccountscontrollerService)
  {
   
  }
  
}
