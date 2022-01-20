import { NgModule } from '@angular/core';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule} from '@angular/forms';
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';


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
    providers: [],
    bootstrap: [],
    exports:[GalleryListComponent,GalleryCreateComponent]
  })
  export class gallery { }
  