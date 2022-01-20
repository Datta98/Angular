import { Injectable,Inject } from '@angular/core';
import {LinksModel} from "../models/linksmodel.nodel"
import {HttpHeaders,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountscontrollerService {

  constructor(public http:HttpClient,@Inject("QuickLinksAPIUrl") public baseUrl:string){
    
  }
  createNewQickLinksItem(data:any)
  {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post<LinksModel>(this.baseUrl, data, httpOptions);
  }

  listQickLinksItem(){
    return this.http.get(this.baseUrl);
  }

}
