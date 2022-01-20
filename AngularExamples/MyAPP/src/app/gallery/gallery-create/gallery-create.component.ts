
import { GalleryModel } from '../models/galleryModel.model';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GalleryControllerService } from '../services/gallerycontroller.service';

@Component({
  selector: 'gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.css']
})
export class GalleryCreateComponent {

  galleryModels : any;
  details = new FormControl('');

  constructor(private apiService:GalleryControllerService){this.galleryModels= null;}

    detailsform=new FormGroup({
      Filepath:new FormControl('',Validators.required),
      Alt:new FormControl('',Validators.required),
    });
   


  onSubmit(data:any)
  {
    this.apiService.createNewGalleryItem(data).subscribe(response=>
      alert("successfully uploaded"));
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

