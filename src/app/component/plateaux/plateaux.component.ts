import { Component, OnInit } from '@angular/core';
import { SushiService } from 'src/app/config/sushi-shop.service';

@Component({
  selector: 'app-plateaux',
  templateUrl: './plateaux.component.html',
  styleUrls: ['./plateaux.component.css']
})
export class PlateauxComponent implements OnInit {

  sushi: any;
  constructor(public sushiService: SushiService) { }
  
  ngOnInit() {
    this.displayAllsushis();
  }

  displayAllsushis() {
    return this.sushiService.getAllsushis().subscribe(value => {
      this.sushi = value;
    })
  }
}
