import {Component,OnInit} from "@angular/core"
import {DataStatisticModel} from "../models/dataStatistic.model"
import { HttpClient } from '@angular/common/http'

@Component({
    selector:"statistics-list",
    templateUrl:"./statisticsList.component.html",
    styleUrls:["./statisticsList.component.css"]
})
export class StatisticsListComponent implements OnInit{
//logic
dataStatistics : any;
//Lifecycle Hook
ngOnInit(){
this.httpProxy.get( "http://localhost:5004/api/DataStatistics").subscribe(data =>{
    console.log(data);
    this.dataStatistics=data;
} );

// this.httpProxy.post<any>('http://localhost:5000/api/DataStatistics', { title: 'Angular POST Request Example' ,text:'text',value :"12"}).subscribe(data => {
//     this.dataStatistics = data;
// })

}
constructor(private httpProxy : HttpClient){
this.dataStatistics= null;
}
}