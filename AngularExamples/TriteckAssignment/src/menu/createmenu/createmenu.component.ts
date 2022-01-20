import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.css']
})
export class CreatemenuComponent implements OnInit {
    Title : string;
    Contents : string;
    
    constructor() {
      this.Title="";
      this.Contents="";
     }
  
    ngOnInit(): void {
      
    }
  
    onSubmitClick(){
      console.log(this.Title,this.Contents);
    }
    onClearClick(){
      this.Title="";
      this.Contents="";
    }

    
  }
  
