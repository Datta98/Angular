import {Component, OnInit} from "@angular/core"
import {AccountscontrollerService} from "../services/accountscontroller.service"
@Component({
    selector:"quicklinks-list",
    templateUrl:"./quicklinkslist.component.html",
    styleUrls:['./quicklinkslist.component.css']
})
export class QuickLinksList implements OnInit{
    linkModels : any;
    constructor(private apiService : AccountscontrollerService)
    {
        this.linkModels= null;
    }
    //Lifecycle Hook
        apilist(){
            this.apiService.listQickLinksItem().subscribe(data =>{
            console.log(data);
            this.linkModels=data;
            });
        }
        ngOnInit(){
            this.apilist();
        }
      
}
 
 