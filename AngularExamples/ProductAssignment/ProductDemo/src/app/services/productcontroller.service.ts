import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http'

@Injectable()

export class ProductControllerService
{
    constructor(public http:HttpClient,@Inject("productApiUrl") public baseurl:string )
    {

    }
    getproducts(data:any)
    {
        this.http.get( this.baseurl)
    }
}

