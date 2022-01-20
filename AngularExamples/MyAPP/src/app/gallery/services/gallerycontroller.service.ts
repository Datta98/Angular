import {HttpClient} from '@angular/common/http'; 
import {Injectable,Inject} from '@angular/core';
import {GalleryModel} from '../models/galleryModel.model'
import {HttpHeaders} from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })
// export class GalleryControllerService {
//   urlpath:any="";
//   constructor(){
//     this.urlpath ="https://localhost:44332/api/Gallery";
//   }
// }
@Injectable()
export class GalleryControllerService{
    constructor(public http:HttpClient,@Inject("GalleryAPIUrl") public baseUrl:string){
    
    }
    createNewGalleryItem(data:any)
    {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
       return this.http.post<GalleryModel>(this.baseUrl, data, httpOptions);
    }

    listGalleryItem(){
      return this.http.get(this.baseUrl);
    }

}