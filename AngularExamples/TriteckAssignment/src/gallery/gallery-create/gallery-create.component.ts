import { GalleryModel } from '../models/galleryModel.model';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.css']
})
export class GalleryCreateComponent {

  
  galleryModels : any;
  details = new FormControl('');

  constructor(private http:HttpClient){this.galleryModels= null;}

    detailsform=new FormGroup({
      Filepath:new FormControl('',Validators.required),
      Alt:new FormControl('',Validators.required),
    });
   
    save(galleryDetails:GalleryModel)
    {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
        this.http.post<GalleryModel>("https://localhost:44332/api/Gallery",galleryDetails,httpOptions).subscribe(data=>
        console.log("successfully uploaded"));
        //alert("successfully uploaded");
        //this.galleryModel.push(galleryDetails);
    }

  onSubmit()
  {
    console.log(this.detailsform.value);
    this.save(this.galleryModels);
  }
  clearForm()
  {
    this.detailsform.reset();
  } 
  get Filepath() {
    return this.detailsform.get('Filepath');
  }
  get Alt(){
    return this.detailsform.get('Alt');
  }
}

