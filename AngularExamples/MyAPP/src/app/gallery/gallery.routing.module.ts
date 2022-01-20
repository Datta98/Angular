import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { GalleryCreateComponent } from './gallery-create/gallery-create.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

const Routes :Routes = [
     { path: 'creategallery', component: GalleryCreateComponent},
    // { path: 'listgallery', component: GalleryListComponent},
    // {  path: '', redirectTo: '/creategallery', pathMatch: 'full'}
];

@NgModule({
    imports :[
        RouterModule.forRoot(Routes),
    
    ],
    exports:[ RouterModule]
})

export class GalleryRoutingModule{}