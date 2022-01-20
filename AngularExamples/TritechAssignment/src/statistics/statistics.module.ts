
import {NgModule} from "@angular/core"
import {DataStatisticsComponent} from "./dataStatistics/dataStatistics.component"
import {StatisticsListComponent} from "./statisticsList/statisticsList.component";
import { CreateDataStatisticsComponent } from './create-data-statistics/create-data-statistics.component'
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http'
import {CommonModule} from "@angular/common"
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationformComponent} from "./validationform/validationform.component";


//declaration
@NgModule({
    declarations:[DataStatisticsComponent,StatisticsListComponent, CreateDataStatisticsComponent,ValidationformComponent],
    imports:[FormsModule,HttpClientModule,CommonModule,ReactiveFormsModule],
    bootstrap:[],
    exports:[StatisticsListComponent,CreateDataStatisticsComponent,ValidationformComponent]
})
export class StatisticsModule{

}