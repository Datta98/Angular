import { NgModule } from '@angular/core';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';
import { GalleryControllerService } from './services/gallerycontroller.service';

@NgModule({
    declarations: [
        GalleryItemComponent,
        GalleryListComponent,
        GalleryCreateComponent 
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule

    ],
    providers: [
        {provide:GalleryControllerService,useClass:GalleryControllerService},
        {provide:"GalleryAPIUrl",useValue:"https://localhost:44332/api/Gallery"}
    ],
    bootstrap: [],
    exports:[GalleryListComponent,GalleryCreateComponent]
  })
  export class gallery { }
  