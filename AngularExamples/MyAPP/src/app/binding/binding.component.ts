import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  PortfolioPage:string="two way data binding";
  paragraphStyle="color:white";
  onShow() {
    alert('Show button clicked!');
  }

}

