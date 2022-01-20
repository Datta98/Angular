
import { NgModule } from '@angular/core';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

@NgModule({
    declarations: [
        GalleryItemComponent,
        GalleryListComponent
    ],
    imports: [

    ],
    providers: [],
    bootstrap: [],
    exports:[GalleryListComponent]
  })
  export class gallery { }
  