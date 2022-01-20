import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterableproducttableComponent } from './filterableproducttable/filterableproducttable.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { ProductcatogoryrowComponent } from './productcatogoryrow/productcatogoryrow.component';
import { ProductrowComponent } from './productrow/productrow.component';

import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    FilterableproducttableComponent,
    SearchbarComponent,
    ProducttableComponent,
    ProductcatogoryrowComponent,
    ProductrowComponent
  ],
  
  imports: [
    CommonModule,FormsModule
  ],
  
  exports:[ProducttableComponent,SearchbarComponent],
})
export class ProductsModule { }
