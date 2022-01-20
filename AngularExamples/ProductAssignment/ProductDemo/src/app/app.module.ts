import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRootComponent } from './app-root/app-root.component';
import{ProductsModule} from './products/products.module'
import{ProductControllerService} from './services/productcontroller.service'
@NgModule({
  declarations: [
    AppComponent,
    AppRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,HttpClientModule
  ],
  
  bootstrap: [AppRootComponent],

  providers:[
    //{provide:ProductControllerService,useClass:ProductControllerService},
    {provide:"productApiUrl",useValue:"http://localhost:5000/api/Accouts"}
]
})
export class AppModule { }
