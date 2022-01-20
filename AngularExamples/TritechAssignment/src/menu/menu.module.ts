//import content from other modules
import {NgModule} from "@angular/core"
import {MenuListComponent} from "./menulist/menuList.component"
import {MenuItemComponent} from "./menuitem/menuItem.components";
import { CreatemenuComponent } from './createmenu/createmenu.component'
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { MenuValidationComponent } from './menu-validation/menu-validation.component'

@NgModule({
    declarations:[MenuListComponent,MenuItemComponent, CreatemenuComponent, MenuValidationComponent],
    imports:[FormsModule,HttpClientModule,CommonModule,ReactiveFormsModule],
    bootstrap:[],
    exports:[MenuListComponent,CreatemenuComponent,MenuValidationComponent]
})

export class MenuModule{

}