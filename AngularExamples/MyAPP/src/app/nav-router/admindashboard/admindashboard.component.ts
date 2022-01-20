import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
currentuser:string;
  constructor(private activatedroute:ActivatedRoute) {
    this.currentuser="";
   }
  
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(data=>{
      
    this.currentuser=data.get("activeuser");
    // console.log(response);
    })
  }

}
