
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ProductControllerService} from '../../services/productcontroller.service'



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  name:any;
  linkModels : any;

  constructor(private httpProxy : HttpClient){
    this.linkModels= null;
    
   }
  
  // constructor(public apiService:ProductControllerService)
  // {
   
  // }

    ngOnInit(){
    this.httpProxy.get( "http://localhost:5000/api/product").subscribe(data =>{
     //   console.log(data);
        this.linkModels=data;
    } );}

   


    // getproduct(data:any):Observable<any>{
    //   return this.apiService.getproducts(data).subscribe(response=>{this.linkModels=response;})
    // }
    Search(){
      if(this.name == ""){
        this.ngOnInit();
      }else{
        this.linkModels=this.linkModels.filter((res:any) => {
          //console.log(res);
         return res.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase());
        });
      }
    }




}





  


 







