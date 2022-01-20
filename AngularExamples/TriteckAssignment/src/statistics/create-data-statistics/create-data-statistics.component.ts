import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-data-statistics',
  templateUrl: './create-data-statistics.component.html',
  styleUrls: ['./create-data-statistics.component.css']
})
export class CreateDataStatisticsComponent implements OnInit {

  title:string;
  text:string;
  value:string;
  constructor() {
    this.title="";
    this.text="";
    this.value="";
   }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.title,this.text,this.value);
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
  //   this.http.post<DataStatisticModel>("http://localhost:5000/api/DataStatistics", data, httpOptions).subscribe(data=>{console.log("success")});
   }
  onClear()
  {
    this.title="";
    this.text="";
    this.value="";
  }
  
  onTitleEdit(titleValue:string):void
  {
    this.title=titleValue;
  }
  onTextEdit(textValue:string):void
  {
    this.text=textValue;
  }
  onValueEdit(value:string):void
  {
    this.value=value;
  }

}
