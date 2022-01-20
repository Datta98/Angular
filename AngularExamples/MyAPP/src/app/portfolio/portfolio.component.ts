import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  {

  title = 'Gallery';

  mainStyle="max-width: 400px;margin: auto;"

  itemImageUrl1 = 'assets/pic1.jpg';
  itemImageUrl2 = 'assets/pic3.jpg';
  itemImageUrl3 = 'assets/pic5.jpg';
  itemImageUrl4 = 'assets/pic6.jpg';
 
}
