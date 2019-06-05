import { RandomService } from './../random.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(private service: RandomService) { }

  colors: string[] = this.service.allColors;
  clickedColor;

  getColor(color: string) {
    this.clickedColor = color;
    console.log(this.clickedColor);
  }

  ngOnInit() {
  }

}
