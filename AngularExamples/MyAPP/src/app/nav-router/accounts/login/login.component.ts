import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:string
  onlogin(){
    console.log(this.username)
  this.route.navigate(["/admindashboard",this.username])

    }

  constructor(public route:Router) {
    this.username="";
   }

  ngOnInit(): void {
  }

}
