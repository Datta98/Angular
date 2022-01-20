import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {ContactInfoModel} from "../models/contactinfomodel.model";

@Injectable()
export class ContactControllerService{

    constructor(public http:HttpClient,@Inject("ContactApiUrl")public baseUrl:string){

    }

    createNewContact(data:any){
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
        return this.http.post<ContactInfoModel>(this.baseUrl,data,httpOptions);

    }
}