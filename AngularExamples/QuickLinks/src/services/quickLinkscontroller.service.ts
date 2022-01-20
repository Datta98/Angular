import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http'
import{LinksModel} from '../app/quicklinks/models/linksmodel.nodel'
@Injectable()

export class QuickLinksControllerService
{
    constructor(public http:HttpClient,@Inject("quickLinksApiUrl") public baseurl:string )
    {

    }
    createquicklinks(data:any)
    {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      return  this.http.post<LinksModel>(this.baseurl, data, httpOptions);
    }
}




//appmoule code 
// providers:[
//     {provide:QuickLinksControllerService,useClass:QuickLinksControllerService},
//     {provide:"quickLinksApiUrl",useValue:"http://localhost:5000/api/Accouts"}
//]