import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import{QuickLinksControllerService} from '../../../services/quickLinkscontroller.service'



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
   
    console.log(data)
   
    this.apiService.createquicklinks(data).subscribe(response=>{console.log("The End")})
 
  }

  
  clearForm()
  {
    this.detailsform.reset();
  }
   get Links(){return this.detailsform.get('LinkText')}

   
 
  get Href() {
    return this.detailsform.get('Href');
  }
  constructor(public apiService:QuickLinksControllerService)
  {
   
  }
  
}
